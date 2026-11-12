import {FINGERS,keyInfo,LESSONS} from "./curriculum";
import type {PracticeConfig} from "./typing";
export type KeyRect={key:string;x:number;y:number;width:number;height:number;finger:number};
const rows:[string,number][][]=[
 [["`",1],["1",1],["2",1],["3",1],["4",1],["5",1],["6",1],["7",1],["8",1],["9",1],["0",1],["-",1],["=",1],["Back",1.8]],
 [["Tab",1.45],...[..."qwertyuiop[]\\"].map(k=>[k,1] as [string,number])],
 [["Caps",1.8],...[..."asdfghjkl;'"].map(k=>[k,1] as [string,number]),["Enter",2]],
 [["Shift",2.25],...[..."zxcvbnm,./"].map(k=>[k,1] as [string,number]),["ShiftR",2.55]],
 [["Ctrl",1.25],["Alt",1.25],["Cmd",1.25],[" ",6.3],["CmdR",1.25],["AltR",1.25],["Left",1],["Down",1],["Right",1]],
];
export const KEY_RECTS:KeyRect[]=rows.flatMap((row,r)=>{const unit=912/row.reduce((sum,v)=>sum+v[1],0);let offset=0;return row.map(([key,w])=>{const rect={key,x:24+offset*unit,y:17+r*42,width:w*unit-4,height:36,finger:keyInfo(key).finger?.id??-1};offset+=w;return rect})});
export function positionOf(char:string){const base=char==="\n"?"Enter":keyInfo(char).base;const rect=KEY_RECTS.find(k=>k.key===base);return rect?{x:rect.x+rect.width/2,y:rect.y+rect.height/2}:{x:480,y:203}}
export const FINGER_HOME=FINGERS.map(f=>positionOf(f.home==="Space"?" ":f.home.toLowerCase()));
export function tutorialTargets(config:PracticeConfig):string[]{
 if(!config.lessonId||config.stage!==0)return [];
 const lesson=LESSONS.find(l=>l.id===config.lessonId);if(!lesson)return [];
 if(config.kind==="zh")return ["练习"];
 if(lesson.keys==="shift")return ["A","J","F","K"];
 let chars=Array.from(lesson.keys).filter(c=>c!==" ");
 if(!chars.length)chars=Array.from(config.text).filter(c=>c!==" "&&c!=="\n").slice(0,4);
 if(chars.length===1)return [chars[0],chars[0],chars[0],chars[0]];
 if(chars.length===2)return [chars[0],chars[1],chars[0],chars[1]];
 if(chars.length>4)return [chars[0],chars.at(-1)!,chars[Math.floor(chars.length/2)],chars[Math.max(1,Math.floor(chars.length/2)-1)]];
 return chars;
}
export const DEMO_STEPS=["找到基准键","伸出这根手指","轻轻按下","回到原位"];
