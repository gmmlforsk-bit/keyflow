export type Cue = "correct" | "error" | "complete" | "start";
export type SoundStatus = "waiting" | "ready" | "unavailable";
let context: AudioContext | null = null;
let masterVolume=.65;
export function setSoundVolume(value:number){masterVolume=Math.max(0,Math.min(1,value))}
let lastCorrect = -Infinity;
/** Single short voice, with an exponential release to avoid clicks. */
export function scheduleVoice(ctx:AudioContext,frequency:number,time:number,duration:number,gain:number,type:OscillatorType="sine",endFrequency?:number){
 const osc=ctx.createOscillator(), envelope=ctx.createGain();
 osc.type=type;osc.frequency.setValueAtTime(frequency,time);
 if(endFrequency)osc.frequency.exponentialRampToValueAtTime(endFrequency,time+duration);
 envelope.gain.setValueAtTime(.0001,time);envelope.gain.exponentialRampToValueAtTime(gain,time+.004);envelope.gain.exponentialRampToValueAtTime(.0001,time+duration);
 osc.connect(envelope);envelope.connect(ctx.destination);osc.start(time);osc.stop(time+duration+.015);
 osc.onended=()=>{osc.disconnect();envelope.disconnect()};
}
export const VOICES:Record<Cue,{frequency:number;offset:number;duration:number;gain:number;type?:OscillatorType;end?:number}[]>={
 correct:[{frequency:880,offset:0,duration:.038,gain:.052,end:560},{frequency:1760,offset:0,duration:.022,gain:.009,end:980}],
 error:[{frequency:185,offset:0,duration:.065,gain:.055,type:"triangle",end:145},{frequency:150,offset:.072,duration:.075,gain:.043,type:"triangle",end:112}],
 start:[{frequency:440,offset:0,duration:.065,gain:.025},{frequency:660,offset:.045,duration:.09,gain:.03}],
 complete:[{frequency:523.25,offset:0,duration:.14,gain:.035},{frequency:659.25,offset:.075,duration:.17,gain:.03},{frequency:783.99,offset:.15,duration:.24,gain:.028}],
};
export function scheduleCue(ctx:AudioContext,cue:Cue,volume=1){if(volume<=0)return;const now=ctx.currentTime+.003;for(const v of VOICES[cue])scheduleVoice(ctx,v.frequency,now+v.offset,v.duration,v.gain*Math.max(0,Math.min(1,volume)),v.type||"sine",v.end)}
export async function unlockSound():Promise<SoundStatus>{
 try{if(typeof window==="undefined")return "waiting";const Constructor=window.AudioContext||(window as unknown as {webkitAudioContext?:typeof AudioContext}).webkitAudioContext;if(!Constructor)return "unavailable";if(!context||context.state==="closed")context=new Constructor();if(context.state!=="running")await context.resume();return context.state==="running"?"ready":"unavailable"}catch{return "unavailable"}
}
export function playCue(cue:Cue,enabled:boolean){
 if(!enabled||!context||context.state!=="running")return;
 const now=context.currentTime;if(cue==="correct"&&now-lastCorrect<.026)return;if(cue==="correct")lastCorrect=now;
 scheduleCue(context,cue,masterVolume);
}
