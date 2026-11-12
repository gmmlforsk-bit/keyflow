import type { Kind } from "./curriculum";
export type Mistake = { expected: string; actual: string; count: number };
export type PracticeRecord = { id: string; date: string; title: string; kind: Kind; speed: number; accuracy: number; correct: number; attempts: number; errors: number; seconds: number; completed: boolean; lessonId?: string; stage?: number; mistakes: Mistake[]; samples: number[]; guidedMistakes?:Mistake[] };
export type PracticeConfig = { id: string; title: string; text: string; kind: Kind; duration: number; lessonId?: string; stage?: number; goal?: number; coached?: boolean };
export const unit = (kind: Kind) => kind === "en" || kind === "code" ? "WPM" : kind === "keys" ? "键 / 分" : "字 / 分";
export function measure(typed: string, text: string, attempts: number, errors: number, seconds: number, kind: Kind) {
  const target=Array.from(text); const correct=Array.from(typed).filter((c,i)=>c===target[i]).length;
  return { correct, accuracy: attempts ? Math.round((attempts-errors)/attempts*1000)/10 : 100, speed: seconds>0 ? Math.round(correct/(kind==="en"||kind==="code"?5:1)*60/seconds) : 0 };
}
export function countInput(previous: string, next: string, target: string) {
 const before=Array.from(previous), after=Array.from(next), chars=Array.from(target); let prefix=0;
 while(prefix<before.length && prefix<after.length && before[prefix]===after[prefix]) prefix++;
 let attempts=0; const mistakes:Mistake[]=[];
 for(let i=prefix;i<after.length;i++){attempts++; if(after[i]!==chars[i]) mistakes.push({expected:chars[i]||"",actual:after[i],count:1});}
 return {attempts,mistakes};
}
export const formatSeconds=(seconds:number)=>seconds<10?Math.round(seconds*10)/10:Math.round(seconds);
export const displayChar=(c:string)=>c===" "?"空格":c==="\n"?"换行":c||"末尾";
export function aggregateMistakes(records:PracticeRecord[]) { const counts=new Map<string,number>(); records.forEach(r=>r.mistakes.forEach(m=>{if(m.expected) counts.set(m.expected,(counts.get(m.expected)||0)+m.count)})); return [...counts.entries()].map(([char,count])=>({char,count})).sort((a,b)=>b.count-a.count); }
export function weakText(chars:string[]) {
 const chosen=[...new Set(chars.filter(Boolean))].slice(0,5); if(!chosen.length) return "f j f j fj jf fj jf";
 const groups=chosen.map(c=>c===" "?"f j f  j f j":c==="\n"?"f\nj\nf\nj":`${c}${c}${c} ${c} ${c}`);
 const mixed=Array.from({length:6},(_,i)=>chosen.map((_,j)=>chosen[(j+i)%chosen.length]).join("")).join(" ");
 return groups.join(" ")+" "+mixed;
}
