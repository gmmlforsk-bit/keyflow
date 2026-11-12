export type Kind = "keys" | "en" | "zh" | "code";
export type Drill = { title: string; text: string };
export type Lesson = { id: string; title: string; summary: string; keys: string; kind: Kind; steps: string[]; mistake: string; drills: Drill[]; chapter: number; number: number; goal: number };
export const CHAPTERS = [
  { title: "安放双手", label: "基准行", description: "从 F、J 的定位凸点开始，建立八指分工。", keys: "ASDF JKL;" },
  { title: "向上探索", label: "上排键", description: "从基准键出发，学习伸指与回位。", keys: "QWERT YUIOP" },
  { title: "向下延伸", label: "下排键", description: "把不熟悉的下排键，连成自然的动作。", keys: "ZXCVB NM,./" },
  { title: "写完整的句子", label: "数字与符号", description: "练习数字、大小写与常见符号的组合。", keys: "12345 !?{}" },
  { title: "进入真实文字", label: "英文应用", description: "从单词到段落，维持准确、连续的节奏。", keys: "word → sentence" },
  { title: "把熟练带进日常", label: "中文与代码", description: "把键位能力用到中文、混排和代码中。", keys: "中文 / code" },
];
type Seed = [string,string,string,Kind,string[],string,[string,string,string]];
const SEEDS: Seed[][] = [
[
 ["找到 F 和 J","不低头，也能找到双手的起点。","fj","keys",["先用左右食指摸到 F 和 J 上的凸起，其余手指自然弯曲，轻放在旁边。","左食指按 F，右食指按 J。每按一次就轻轻松开，不必把整个手掌抬起来。","空格交给你顺手的拇指。眼睛看屏幕，试着只靠触觉重新找到 F、J。"],"如果按成 G 或 H，先停一下摸回凸点。不要一边低头找键，一边追速度。",["fff jjj fff jjj fj fj fj fj","fjf jfj fjf jfj ffj jjf ffj jjf","fj fj jf jf f j fj jf fjf jfj"]],
 ["加入 D 和 K","让两根中指学会独立工作。","dk","keys",["食指仍以 F、J 定位，把左中指放在 D，右中指放在 K。","敲 D、K 时尽量只移动中指。其他手指自然放松，不需要死死压在键上。","混合 F、J 练习时，先默读下一组，再按固定分工输入。"],"容易用食指代按 D、K。放慢速度，让中指完成它自己的动作。",["ddd kkk ddd kkk dk dk kd kd","fd jk fd jk df kj df kj","fdk jkd dfk kjd dkf kdj fj dk"]],
 ["加入 S 和 L","给无名指一点适应的时间。","sl","keys",["左无名指放 S，右无名指放 L。双手依然通过食指找到基准行。","无名指开始可能不够灵活。把敲击幅度放小，不必刻意把它高高抬起。","在 S、D、F 与 J、K、L 之间轮换，动作清楚比连得很快更重要。"],"手指可能一起抬起或挤在一处。暂停后重新摆手，再输入下一组。",["sss lll sss lll sl ls sl ls","sdf jkl sdf jkl fds lkj","sld ksf lfj sdk jls fkl sls lsl"]],
 ["加入 A 和分号","让小指找到自己的键位。","a;","keys",["左小指放 A，右小指放分号 ;。这是美式 QWERTY 基准行的两端。","小指不用用力敲击。手腕保持自然，别为了够键把肩膀绷紧。","本课的分号是英文半角 ;，请先切换到英文输入状态。"],"中文输入法可能输出全角分号 ；。本课要求半角 ;，两者不是同一个字符。",["aaa ;;; aaa ;;; a; ;a a; ;a","asdf jkl; asdf jkl; fdsa ;lkj","a;s dlf kj; asf jkl a; a;s dkl"]],
 ["基准行小测","让八根手指协作，而不是到处找键。","asdfjkl;","keys",["把左手放在 A、S、D、F，右手放在 J、K、L、;，拇指负责空格。","不确定位置时，用 F、J 凸点校准。先稳定输入四字符组，再尝试短词。","完成三轮准确率至少 95% 的练习。这里不设速度门槛，先把动作练对。"],"如果某个键反复错，别把整组越打越快。到错键训练里单独练它。",["asdf jkl; asdf jkl; fdsa ;lkj","sad dad ask lad fall flask salad","all sad lads ask a dad; a lad asks;"]],
],
[
 ["食指向中间：G 和 H","一根食指，管理两列键。","gh","keys",["左食指从 F 向右到 G，右食指从 J 向左到 H。","每次伸指敲键后，以 F、J 为参照回位。手掌可以微调，不必僵住。","本课会交替使用 F、G、H、J，区分回位键和延伸键。"],"G、H 都在中间，容易由同一只手包办。保持 G 左手、H 右手的分工。",["fgf jhj fgf jhj gh hg gh hg","gag had has half glass shall","a glass; a flag; a half glass;"]],
 ["上排第一步：R 和 U","向上伸指，按完回到 F、J。","ru","keys",["左食指从 F 伸向 R，右食指从 J 伸向 U。先看一眼键盘确认位置。","用 frf、juj 感受从基准键出发、敲目标键、再回位的路径。","逐渐把眼睛留在屏幕上。每次找不到键，就停下来摸回 F、J。"],"不要把整只手一起移到上排。伸指时让其余手指保持自然的基准位置。",["frf juj frf juj ru ur ru ur","fur rug rush rural usual sugar","a rug; a full jar; a rural hall;"]],
 ["中指向上：E 和 I","相同手指，建立上下关联。","ei","keys",["左中指负责 D、E，右中指负责 K、I。先做 ded、kik 的回位练习。","上排看起来靠上，但手指的移动通常略带斜向。根据自己的键盘微调。","混合单词时仍守住手指分工，不要因为想快就让食指抢键。"],"I 容易错成 U，E 容易错成 R。先慢练相邻键的区分。",["ded kik ded kik ei ie ei ie","read ride file field guide idea","a fresh idea; a real fire; read a file;"]],
 ["无名指向上：W 和 O","练习相邻键之间的精准感。","wo","keys",["左无名指从 S 伸向 W，右无名指从 L 伸向 O。","慢练 sws、lol。感受目标键和基准键之间的距离，不用用力伸直手指。","遇到连续相同字母时，让手指轻轻抬落，不要一直压住导致连发。"],"O 是字母，不是数字 0；本课先只练字母 O。",["sws lol sws lol wo ow wo ow","wood word slow world follow would","we follow a slow flow; a good word;"]],
 ["小指向上：Q 和 P","把上排两端纳入地图。","qp","keys",["左小指从 A 到 Q，右小指从分号键到 P。","先练 aqa、;p;，再输入短词。手小可以自然微调手掌位置。","练完后松开双手，重新找 F、J，确认没有把基准位置整个带偏。"],"右小指常把 P 打成 O。每一组先确认一次手指分工。",["aqa ;p; aqa ;p; qp pq qp pq","paper people equip equal proper","people read a paper; a proper paper;"]],
],
[
 ["补齐上排：T 和 Y","认识食指的第二列上排键。","ty","keys",["左食指除了 R，还负责 T；右食指除了 U，还负责 Y。","对比 frf、ftf 和 juj、jyj，分清同一根手指的两个上排目标。","按完延伸键，以 F、J 重新定位，不要让双手越练越靠近中间。"],"T 与 Y 位于双手交界。按本课程的 T 左手、Y 右手分工练习。",["ftf jyj frf juj ty yt ty yt","try type pretty today thirty yearly","try a little today; type with joy;"]],
 ["下排第一步：V 和 M","让食指学会向下到达。","vm","keys",["左食指从 F 向下到 V，右食指从 J 向下到 M。","练 fvf、jmj，动作小而清楚。手指不需要离开键盘很高。","M 在右手区域，V 在左手区域。输入单词时保持两边配合。"],"V 容易和 B 混淆。先记住回位路径，再追求连续输入。",["fvf jmj fvf jmj vm mv vm mv","move very more movie memory improve","move slowly; give every word some room;"]],
 ["中指向下：C 和逗号","开始在句子中自然停顿。","c,","keys",["左中指负责 C，右中指负责英文逗号 ,。","先练 dcd、k,k，再练带逗号的短语。逗号后保留一个半角空格。","实体键盘模式会直接识别英文逗号，无需切换输入法；空格仍要按原文保留。"],"容易漏掉逗号后的空格。把标点和空格看成句子的一部分。",["dcd k,k dcd k,k c, ,c c, ,c","calm, clear, close, create, music,","come closer, move slowly, keep calm,"]],
 ["无名指向下：X 和句号","把句末的停顿打完整。","x.","keys",["左无名指负责 X，右无名指负责英文句号 .。","练 sxs、l.l 时只按一次目标键，再回到基准键。","完整句子末尾也要输入句号。最后一个标点属于练习文本。"],"英文句号 . 与中文句号 。不同。别因为视觉相似而忽略字符。",["sxs l.l sxs l.l x. .x x. .x","six foxes. exit. extra space.","relax. make the move. fix six foxes."]],
 ["补齐下排：Z、B、N 与 /","完成字母区，区分双手的边界。","zbn/","keys",["左小指负责 Z，左食指负责 B，右食指负责 N，右小指负责 /。","把 az、fb、jn、;/ 分开慢练。B 靠近中线，本课程固定用左食指。","混合全部字母时，先读一个词，再动手。遇到难词可按字母分段。"],"不同人对 B 的习惯可能不同。本课程采用 B 左食指，先用一致的分工建立稳定感。",["aza fbf jnj ;/; zb nb bn / /","zebra banana brown zone number zero","a brown zebra / a big banana / number nine"]],
],
[
 ["左半边数字：1 到 5","把字母区的定位延伸到数字排。","12345","keys",["本课程分工：1 左小指、2 左无名指、3 左中指、4 和 5 左食指。","每按一组数字，再敲一次 asdf，确认双手没有漂移。","数字排更远，先看清手指路径，再逐渐减少低头次数。"],"不要连续伸手后一直停在数字排。回到基准行，再开始下一组。",["a1a s2s d3d f4f f5f 12345","12 23 34 45 51 15 24 35 42 53","item 12 item 25 level 34 room 45"]],
 ["右半边数字：6 到 0","先认清 O 和 0，再练组合。","67890","keys",["本课程采用 6、7 右食指，8 右中指，9 右无名指，0 右小指。","数字 0 位于数字排，字母 O 位于上排。练习时特意区分。","先分组输入，再用日期和编号把两侧数字连起来。"],"数字排的分工存在不同习惯。本课程统一使用上面的安排，保持动作一致即可。",["j6j j7j k8k l9l ;0; 67890","60 70 80 90 100 608 709 890","2026 11 10 id 67890 total 1234567890"]],
 ["Shift 与大小写","双手配合，不用 Caps Lock 代替一切。","shift","en",["打一枚大写字母时，通常用另一只手的小指按住 Shift，再按字母。","例如 A 用右 Shift 加左小指 A；J 用左 Shift 加右食指 J。","松开 Shift 再打后续小写。这里不检查你用了哪只手，只检查输出的大小写。"],"常见错误是 Shift 放得太晚，后面几个字母也变成大写。先慢练首字母。",["Aa Jj Ff Kk Dd Ll Ss Pp Qq Zz","Alice James Monday Friday November","Start small. Keep going. Practice every day."]],
 ["句子里的标点","把引号、冒号和问号纳入节奏。",";:'\"?!","en",["本课按美式 QWERTY 符号位置示范。冒号是 Shift + ;，问号是 Shift + /。","英文引号是直引号 ' 和 \"。先确认输入法没有自动换成弯引号。","输入标点后，再看原文是否有空格；不要凭日常习惯自行增删。"],"中文或智能引号可能让字符变样。本课使用英文半角标点，按屏幕原样输入。",["; : ; : ' \" ' \" ? ! ? !", "Who is there? It is me! Name: Alice.", "She said, \"Keep trying!\" That's a good idea."]],
 ["括号与常见符号","从单个符号，练到成对出现。","[]{}()<>_+=","code",["中括号 [ ] 在 P 的右侧，花括号 { } 用 Shift 配合相同按键。","圆括号 ( ) 在美式键盘上分别是 Shift + 9、Shift + 0。","代码符号需要逐字符比对。每开一个括号，就在视线上找到它的闭合位置。"],"漏掉括号、把 - 写成 _、把 = 写成 + 都很常见。先准确输入，再连成短表达式。",["[] {} () <> _ + = - [ ] { } ( )", "a = (b + c); items[0] = value;", "const user_name = { id: 1, tags: [\"new\"] };"]],
],
[
 ["高频短词","从记键位，过渡到连续拼写。","","en",["先读完一个短词，再用对应手指连续输入。不要把眼睛来回移到键盘。","空格也要准确。每完成一个词，让拇指轻轻结束这一组动作。","这节课不要求盲目提速，仍以准确率 95% 作为通关条件。"],"短词越熟悉，越容易抢快漏字。保持词与词之间均匀的间隔。",["the and for you with this that have from", "we can make time for the things we love", "give your work a little space and your mind a little time"]],
 ["常见字母组合","让常见组合逐渐变得顺手。","","en",["分别感受 th、ing、tion、er 在不同手指之间的移动。","重复的目的是形成清楚的路径，不需要强行让同一根手指完成相邻键。","把长词拆成两三段，再逐步连起来。每次仍按完整原文输入。"],"不要把熟悉词尾自动补到错误的位置。输入前多看一眼单词的实际拼写。",["the this that there thing think three", "reading writing learning moving growing", "better winter sister attention direction creation"]],
 ["句首与人名","把大小写用到真实句子里。","","en",["每到句首，提前准备另一只手的 Shift。","人名和日期里的大写不能省略。注意 Monday 与 monday 会被视为不同。","打完句号后再输入空格，把整个句子当成有起有落的一组。"],"看词义时容易忘记大小写。先扫一遍句首和人名，再开始输入。",["Alice reads a book. James opens the door.", "On Monday, Maya writes a note to Leo.", "Every Friday, Nora and Ben walk to the library. They talk about books."]],
 ["标点与连贯表达","在较长句子里保住准确率。","","en",["视线可以比手指提前几个字母，但不要一下跳到很远的位置。","逗号、引号、撇号都占字符位置。输入时照原文保留。","如果错位，不要继续把整句话打错。先退格回到错误处，再恢复节奏。"],"漏掉一个空格会让后面的字符全部错位。错字突然变多时，先检查是否少打了字符。",["Don't rush. A steady rhythm is more useful than a fast start.", "\"Can we try again?\" she asked. \"Of course,\" he said.", "Small habits matter: read a little, write a little, and return tomorrow."]],
 ["英文综合练习","把键位、标点和节奏放到一起。","","en",["先读一遍短文，识别大写、引号和数字这些需要额外留意的位置。","每完成一小段，放松肩膀。不要为了保持计时而憋着气或用力压键。","完成后看错键分布，再选择针对训练。速度只和同类练习里的自己比较。"],"一次高分不代表每次都能稳定。准确率稳定后，再逐渐提高连续输入速度。",["The room is quiet. A book lies open beside the window. Take a breath and begin again.", "Learning takes patience. Some days feel easy; other days need more care. Both kinds of days count.", "At 8:30, Alice opened her notebook. \"One useful thing today,\" she wrote. A small plan made the morning feel clear."]],
],
[
 ["中文输入法：先上屏，再计分","区分拼音输入过程与最终文字。","","zh",["切换到你熟悉的中文输入法。本课比对最终上屏汉字，不比对拼音串或候选序号。","拼音可尝试按短词输入；遇到重码，确认候选词后再继续。五笔等输入法也可以使用。","先练不带标点的短句。完成组合输入后，网站才会把上屏文字计入成绩。"],"输入法还在选词时不要急着纠错。先确认上屏文字；网站无法判断候选栏里的内容。",["今天的天气很好 我们一起去散步 看看窗外的风景", "认真练习 保持耐心 一点一点找到自己的节奏", "从眼前的几个字开始 慢慢积累 不着急也不停下来"]],
 ["中文词组与候选确认","用词组减少反复选字。","","zh",["先读一个短词或短语，再使用自己熟悉的输入方式上屏。","如果候选词不对，及时选择或改正。别把系统默认候选当成一定正确。","这节课按最终正确字符每分钟计算，不能直接拿来比较英文 WPM。"],"同音词容易被忽略。注意原文的 的、地、得 和常见同音词，按原文输入。",["学习方法 时间安排 认真观察 保持专注 及时复习", "把复杂的事情分成几步，再从最容易的一步开始。", "真正的熟练来自清楚的动作和耐心的重复，而不是一次仓促的尝试。"]],
 ["中文标点与全半角","看清同一个位置上的不同符号。","","zh",["中文逗号 ，、句号 。、问号 ？与英文半角标点不同。按原文逐个核对。","本课引号是中文双引号“”。某些输入法会自动配对，注意不要再多打一次。","网站不会自动替你统一全半角。若一串标点都报错，先检查输入法状态。"],"自动补全的右引号可能造成重复。用方向键或退格整理后，再继续输入。",["你好，今天过得怎么样？我很好，谢谢。你呢？", "她说：“先把每个字打准确，再考虑速度。”", "练习的重点有三个：放松双手、看清原文、及时纠错。做到了，就继续。"]],
 ["中英混排与数字","学会在输入状态之间切换。","","zh",["本课包含汉字、英文大小写与半角数字。切换方式以你当前输入法的设置为准。","切换前先结束正在进行的中文组合输入，确认上屏内容，再输入英文。","原文的空格、英文冒号和连接号也需要保留。混排慢一点很正常。"],"最常见的错位来自多余空格或全角数字。遇到连续错字，先检查字符形式。",["今天练习 10 分钟，目标是保持 95% 的准确率。", "打开 Notes，创建名为 Week 01 的笔记，再写下今天的练习感受。", "任务 ID: 2048。状态为 Ready。请在 2026-11-10 前完成第 1 轮复查。"]],
 ["代码入门：缩进与配对","把准确输入带进实际工作。","","code",["实体键盘模式无需切换输入法，直接按原文输入 JavaScript，注意大小写和每一个括号。","缩进统一使用两个空格；练习区按 Tab 会插入两个空格。Enter 输入真实换行。","这里练的是准确输入，网站不会执行代码。输入结束后检查漏掉的符号。"],"半角引号、分号和花括号最容易漏。不要因为看懂了代码，就跳过原文的字符。",["const name = \"Alice\";\nconst count = 3;\nconsole.log(name, count);", "function greet(name) {\n  return \"Hello, \" + name;\n}\n\nconsole.log(greet(\"Alice\"));", "const items = [1, 2, 3];\nconst doubled = items.map((item) => {\n  return item * 2;\n});\n\nconsole.log(doubled);"]],
]
];
export const LESSONS: Lesson[] = SEEDS.flatMap((group,chapter) => group.map((s,i) => ({ id:`l${chapter*5+i+1}`, title:s[0], summary:s[1],keys:s[2],kind:s[3],steps:s[4],mistake:s[5],chapter,number:chapter*5+i+1,goal:95,drills:s[6].map((text,j)=>({title:["找准动作","连起来练","放进应用"][j],text})) })));
export const FINGERS = [
 {id:0,name:"左小指",home:"A",keys:"`1qaz",tip:"从 A 出发，负责左侧边缘键。"},
 {id:1,name:"左无名指",home:"S",keys:"2wsx",tip:"以 S 为起点，往上 W、往下 X。"},
 {id:2,name:"左中指",home:"D",keys:"3edc",tip:"以 D 为起点，往上 E、往下 C。"},
 {id:3,name:"左食指",home:"F",keys:"45rtfgvb",tip:"从 F 定位，管理 F、G 两列附近的键。"},
 {id:4,name:"右食指",home:"J",keys:"67yuhjnm",tip:"从 J 定位，管理 H、J 两列附近的键。"},
 {id:5,name:"右中指",home:"K",keys:"8ik,",tip:"以 K 为起点，往上 I、往下逗号。"},
 {id:6,name:"右无名指",home:"L",keys:"9ol.",tip:"以 L 为起点，往上 O、往下句号。"},
 {id:7,name:"右小指",home:";",keys:"0p;/-=[]\\'",tip:"负责分号与右侧标点，动作放轻。"},
 {id:8,name:"拇指",home:"Space",keys:" ",tip:"用你更顺手的一侧拇指轻按空格。"},
];
const shifted: Record<string,string>={"!":"1","@":"2","#":"3","$":"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0","_":"-","+":"=","{":"[","}":"]","|":"\\",":":";","\"":"'","<":",",">":".","?":"/","~":"`"};
export function keyInfo(char:string) { const base=shifted[char]||char.toLowerCase(); const finger=base?FINGERS.find(f=>f.keys.includes(base)):undefined; const shift=!!shifted[char] || /^[A-Z]$/.test(char); return {base,finger,shift}; }
