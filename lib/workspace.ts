import { LESSONS, type Kind } from "./curriculum";
import type { PracticeRecord, Mistake } from "./typing";
export type Progress = Record<string,number[]>;
export function validMistakes(v:unknown):v is Mistake[]{return Array.isArray(v)&&v.every(m=>m&&typeof m.expected==='string'&&typeof m.actual==='string'&&Number.isInteger(m.count)&&m.count>0)}
export function validRecord(r:unknown):r is PracticeRecord { if(!r||typeof r!=="object")return false;const a=r as PracticeRecord;return typeof a.id==="string"&&typeof a.title==="string"&&typeof a.date==="string"&&!isNaN(Date.parse(a.date))&&["en","zh","code","keys"].includes(a.kind)&&typeof a.speed==="number"&&isFinite(a.speed)&&typeof a.accuracy==="number"&&a.accuracy>=0&&a.accuracy<=100&&typeof a.seconds==="number"&&a.seconds>0&&validMistakes(a.mistakes)&&(a.guidedMistakes===undefined||validMistakes(a.guidedMistakes)) }
export function validProgress(p:unknown):Progress {if(!p||typeof p!=="object")return {};return Object.fromEntries(Object.entries(p).filter(([k,v])=>LESSONS.some(l=>l.id===k)&&Array.isArray(v)).map(([k,v])=>[k,[...new Set((v as unknown[]).filter((i):i is number=>typeof i==="number"&&[0,1,2].includes(i)))]]))}
export function firstStage(id:string,progress:Progress){return [0,1,2].find(i=>!(progress[id]||[]).includes(i))??0}
export function resumeLesson(progress:Progress,id?:string,stage?:number){
 const current=LESSONS.find(l=>l.id===id);
 if(current&&(progress[current.id]||[]).length<3)return {id:current.id,stage:stage!==undefined&&[0,1,2].includes(stage)&&!(progress[current.id]||[]).includes(stage)?stage:firstStage(current.id,progress)};
 const next=LESSONS.find(l=>(progress[l.id]||[]).length<3)||LESSONS[0];
 return {id:next.id,stage:firstStage(next.id,progress)};
}
export function nextLessonStep(id:string,stage:number,progress:Progress){
 if(stage<2)return {id,stage:stage+1};
 const current=LESSONS.findIndex(l=>l.id===id);const next=LESSONS[(current+1)%LESSONS.length];
 return {id:next.id,stage:firstStage(next.id,progress)};
}
export type Preferences={mode:"learn"|"free";lessonId:string;stage:number;passageId:string;duration:number;continuous:boolean;keyboard:boolean;sound?:boolean};
export function mergeProgress(a:Progress,b:Progress):Progress{const result:Progress={};for(const l of LESSONS){const stages=[...new Set([...(a[l.id]||[]),...(b[l.id]||[])])].sort();if(stages.length)result[l.id]=stages}return result}
export function mergeRecords(a:PracticeRecord[],b:PracticeRecord[]):PracticeRecord[]{return [...new Map([...b,...a].map(r=>[r.id,r])).values()].sort((x,y)=>Date.parse(y.date)-Date.parse(x.date)||x.id.localeCompare(y.id)).slice(0,120)}
