import type { Kind } from "./curriculum";
export type Passage = { id: string; title: string; topic: string; level: "入门" | "进阶" | "挑战"; kind: Kind; text: string };
const english = [
 ["清晨小事","日常","入门","A new day begins. I open the window and make a cup of tea. The room is quiet. There is a book on the table and a small plant by the door. I have time to read one page before I go."],
 ["图书馆的一角","日常","入门","The library is close to my home. I walk there after lunch. There are books about art, music, and the sea. I pick a short story and find a seat. For a little while, the busy day can wait."],
 ["和朋友做饭","日常","入门","We meet in a small kitchen. Ben washes the rice, and Maya cuts the fruit. I put clean plates on the table. The food is simple, but we made it together. That is what makes the evening good."],
 ["一种小习惯","成长","进阶","A habit can begin with something almost too small to notice: one page, one sentence, or five minutes of practice. The point is to make it easy to return. After a difficult day, a modest routine gives us a place to begin again. We do not need a perfect morning to do one useful thing."],
 ["沿河步行","自然","进阶","The path follows the river out of town. Near the bridge, the water moves quickly over pale stones; farther away, it slows beside the trees. A cyclist rings a bell, and two people step aside. I stop to watch a bird lift from the bank. Nothing remarkable happens, yet the walk changes the shape of the afternoon."],
 ["修好一盏灯","创造","进阶","The old lamp had been in the cupboard for months. One Saturday, we cleared the table, sorted the parts, and began to look closely. The problem was smaller than we expected. An hour later, a warm circle of light appeared on the wall. Repairing it did more than save an object; it made the room feel like ours again."],
 ["把问题问清楚","思考","进阶","Before choosing a tool, describe the work it needs to do. Who will use it? What happens most often? Where do people get stuck? A clear question can prevent days of polishing the wrong answer. Write down an example, test a small version, and use what happens to decide the next step."],
 ["留出空白","生活","进阶","A full calendar can make every hour look valuable, but useful work also needs space. Leave a few minutes between tasks. Close the extra windows. Finish the thought in front of you before opening another one. Rest is easier to notice when it has a place in the day, rather than whatever time remains at the end."],
 ["一次观察记录","科学","挑战","At 07:45, the team measured the water temperature: 18.6 degrees. They repeated the measurement three times, recorded the range, and checked the sensor against a reference. The result looked surprising, but nobody changed it to fit an expectation. A useful observation is one that another person can examine, question, and repeat."],
 ["邮件里的细节","工作","挑战","Hi Alex,\n\nThanks for sending the draft. Could you update Section 2, check the figures in Table 4, and return the revised file by Friday? Please keep the original notes; they explain why we changed the schedule.\n\nBest,\nMaya"],
 ["一场简短对话","对话","挑战","\"What should we try first?\" Nora asked.\n\"The smallest version that answers the question,\" said Leo. \"If it fails, we'll know which part to change.\"\nShe looked at the plan again. \"All right. Let's test one idea today and write down what we learn.\""],
 ["一个小型项目","创造","挑战","The first version had 12 buttons and three separate menus. During testing, most people used only two actions: start and save. We removed the extra controls, made the main action easier to find, and tested again. Simplicity did not mean doing less work. It meant making careful decisions so that other people would not have to."],
];
const chinese = [
 ["给清晨留一点时间","生活","入门","清晨醒来，先把窗帘拉开，让自然光落进房间。烧一壶水，收好桌上散落的纸，再给自己留几分钟安静的时间。不必一睁眼就处理所有消息，也不必马上把今天安排得满满当当。从一件简单的小事开始，慢慢走进新的一天。"],
 ["街角的早餐店","生活","入门","街角的早餐店很早就亮起了灯。蒸笼打开时，热气把玻璃蒙上薄薄的一层。老板记得常客的口味，也会给第一次来的客人多介绍两句。有人站着喝完豆浆，有人拎着袋子赶车。城市还在醒来，这里已经装满了普通而温暖的声音。"],
 ["整理一张书桌","日常","入门","把暂时不用的东西放回原处，在桌面上留出一块能够展开书本的地方。笔不用很多，顺手就好；纸不用堆满，够写今天的内容就好。整理不是为了让房间看起来像一张照片，而是让下一次坐下来时，能够更容易开始想做的事情。"],
 ["雨后的路","自然","入门","雨停之后，路边的树叶显得格外清楚。水珠顺着叶尖落下来，石板缝里有细细的水流。行人收起伞，抬头看了看渐渐变亮的天空。走到转角时，熟悉的街道像是刚被擦拭过。其实什么都没有改变，只是我们终于慢下来，多看了一眼。"],
 ["学习不是收藏","学习","进阶","把一篇文章保存下来，并不等于已经理解它。真正有用的学习，往往发生在合上资料之后：能不能用自己的话解释，能不能举出一个不同的例子，能不能把它用于眼前的问题？如果暂时做不到，就回到最不清楚的地方。比起不断增加收藏，一次扎实的理解更能带来改变。"],
 ["给计划留下余地","成长","进阶","制定计划时，我们容易把未来的自己想象得精力充沛、从不分心。可是，真实的日子总有意外，也有疲惫。一个能够持续的计划，应该允许调整：今天少做一点，明天继续；发现方法不合适，就换一种方式。计划的作用是帮助行动，而不是在偏离之后，给自己增加一份责备。"],
 ["观察一棵树","自然","进阶","同一棵树，在不同的时间会呈现不同的样子。清晨，叶片背面的颜色更容易被看见；中午，树影缩成紧紧的一团；傍晚，光线从枝叶之间穿过，地面上落满细碎的亮点。观察不一定需要走到遥远的地方。只要愿意多停留片刻，熟悉的事物也能成为新的问题。"],
 ["把问题写具体","思考","进阶","“我总是做不好”很难带来下一步行动，而“我在第三步经常漏掉检查”就清楚得多。遇到困难时，先把事情发生的时间、条件和过程写下来。具体的描述不一定立刻给出答案，却能让你知道应该从哪里试起。与其急着评价自己，不如先认真描述问题。"],
 ["重新读一遍","表达","进阶","写完一段文字之后，可以先停一会儿，再从读者的角度重新读一遍。第一句话有没有说清楚主题？每个代词指的是谁？删掉其中一句，会不会让意思更明确？修改常常不是增加更多解释，而是找到恰当的顺序，让一句话自然地把读者带到下一句。"],
 ["一次会议记录","工作","挑战","会议记录｜项目复查\n时间：2026 年 11 月 10 日，14:30。\n讨论事项：第一，确认新版首页的三个主要入口；第二，核对移动端的输入与暂停行为；第三，补充验收样例。\n待办：小林整理反馈，小周复核数据。下一次检查安排在周五，具体时间另行确认。"],
 ["数据背后的条件","科学","挑战","看到一组数字时，先别急着比较高低。它是在什么条件下测得的？样本来自哪里？有没有重复测量？同样写着“每分钟”，中文字符数和英文 WPM 也不是同一种单位。只有把定义、条件和不确定之处说清楚，数字才真正能够帮助判断，而不是制造一种精确的印象。"],
 ["交付之前的最后一遍","工作","挑战","文件名为 Notes_v2，保存日期是 2026-11-10。提交前，请依次检查：标题是否对应最终内容，链接是否能够打开，数字是否与原始记录一致。若发现异常，不要只写“已修复”，还要说明触发条件与验证结果。清楚的交付能让下一位接手的人少猜一步，也少走一段弯路。"],
];
const code = [
 ["JavaScript · 变量与模板","JavaScript","入门","const name = \"Maya\";\nconst lessons = 30;\nconst message = `${name} has ${lessons} lessons.`;\n\nconsole.log(message);"],
 ["JavaScript · 数组过滤","JavaScript","进阶","const tasks = [\n  { id: 1, done: true },\n  { id: 2, done: false },\n];\n\nconst pending = tasks.filter((task) => !task.done);\nconsole.log(pending.length);"],
 ["JavaScript · 异步请求","JavaScript","挑战","async function loadNotes(url) {\n  const response = await fetch(url);\n  if (!response.ok) {\n    throw new Error(`Request failed: ${response.status}`);\n  }\n  return response.json();\n}"],
 ["Python · 简单函数","Python","入门","def greet(name):\n    return f\"Hello, {name}!\"\n\nnames = [\"Alice\", \"Ben\", \"Maya\"]\nfor name in names:\n    print(greet(name))"],
 ["Python · 汇总数据","Python","进阶","scores = [82, 95, 88, 91]\npassed = [score for score in scores if score >= 90]\naverage = sum(scores) / len(scores)\n\nprint(f\"Average: {average:.1f}\")\nprint(f\"Passed: {len(passed)}\")"],
 ["Java · 类与方法","Java","挑战","public class Practice {\n  public static void main(String[] args) {\n    int[] scores = {82, 95, 88};\n    for (int score : scores) {\n      System.out.println(\"Score: \" + score);\n    }\n  }\n}"],
 ["HTML · 一张小卡片","HTML","进阶","<article class=\"card\">\n  <h2>A little practice</h2>\n  <p>One step at a time.</p>\n  <a href=\"/lessons\" aria-label=\"Open lessons\">\n    Start learning\n  </a>\n</article>"],
 ["CSS · 网格布局","CSS","进阶",".lesson-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n\n@media (max-width: 640px) {\n  .lesson-grid {\n    grid-template-columns: 1fr;\n  }\n}"],
 ["SQL · 分组查询","SQL","挑战","SELECT\n  category,\n  COUNT(*) AS total,\n  AVG(score) AS average_score\nFROM practice_records\nWHERE created_at >= '2026-11-01'\nGROUP BY category\nORDER BY average_score DESC;"],
 ["JSON · 项目配置","JSON","入门","{\n  \"name\": \"keyflow\",\n  \"version\": 2,\n  \"features\": [\"lessons\", \"practice\"],\n  \"settings\": {\n    \"duration\": 60,\n    \"keyboard\": true\n  }\n}"],
 ["TypeScript · 结果类型","TypeScript","挑战","type Result = {\n  speed: number;\n  accuracy: number;\n};\n\nfunction isPassed(result: Result): boolean {\n  return result.accuracy >= 95;\n}\n\nconst score: Result = { speed: 42, accuracy: 98 };"],
 ["Python · 文件与异常","Python","挑战","from pathlib import Path\n\ntry:\n    content = Path(\"notes.txt\").read_text(encoding=\"utf-8\")\nexcept FileNotFoundError:\n    content = \"\"\n\nlines = [line.strip() for line in content.splitlines()]\nprint(len(lines))"],
];
const symbols = [
 ["数字 · 两位数切换","数字","入门","12 21 34 43 56 65 78 87 90 09\n15 51 26 62 37 73 48 84 59 95\n10 20 30 40 50 60 70 80 90 100"],
 ["数字 · 日期与时间","日期","入门","2026-11-10 08:30\n2026-12-01 14:45\n2027-01-15 09:05\nMonday 10:00 / Friday 16:30\nStart: 08:15, End: 09:45"],
 ["数字 · 金额与小数","数字","进阶","12.50 + 7.25 = 19.75\n100.00 - 38.40 = 61.60\nPrice: $24.99 / Tax: $2.50\nTotal: $27.49 / Items: 3\n0.125 0.250 0.500 0.750 1.000"],
 ["符号 · 括号配对","符号","入门","() [] {} <>\n(a) [b] {c} <d>\n(x + y) * (a - b)\nitems[0] = values[1];\n{ name: \"Maya\", age: 20 }"],
 ["符号 · Shift 数字排","符号","进阶","1! 2@ 3# 4$ 5% 6^ 7& 8* 9( 0)\n! @ # $ % ^ & * ( )\nprice * quantity - discount\nrate > 0 && rate < 100\nvalue !== null ? value : 0"],
 ["符号 · 标点切换","符号","进阶","; : ' \" , . / ? - _ = +\nName: \"Alice\"; Status: 'ready';\nYes, please. No, thanks. Really?\npath/to/file_name-v2.txt\na += 1; b -= 2; c *= 3;"],
 ["混合 · 文件与目录","路径","进阶","notes/week_01.md\nimages/cover-v2.png\narchive/2026-11/report_final.pdf\nsrc/components/PracticePanel.tsx\nproject_name/assets/icons/arrow-left.svg"],
 ["混合 · 示例网址","网址","进阶","https://example.com/lessons?id=12\nhttps://example.org/search?q=typing&page=2\nuser_name@example.com\nhello.world@example.org\nhttps://example.com/docs/getting-started#step-1"],
 ["数字 · 序列与编号","数字","进阶","ID-1048 / REF-2096 / NO-3072\nA001 B012 C123 D234 E345\n0010 0100 1000 0001\n1024 2048 4096 8192\nVersion: 2.1.0, Build: 20261110"],
 ["符号 · 逻辑表达式","符号","挑战","(a > b) && (c <= d)\nvalue === null || value === undefined\n!ready ? \"wait\" : \"start\"\n(a + b) / (c - d) >= 0.5\nlist.filter((item) => item.id !== 0);"],
 ["混合 · 表格数据","数据","挑战","id,name,score,passed\n101,Alice,98.5,true\n102,Ben,87.0,false\n103,Maya,95.2,true\n104,Leo,91.8,true\n105,Nora,89.5,false"],
 ["混合 · 综合校对","混合","挑战","Task #2048: Review \"Draft_v3\".\nDue: 2026-11-10, 17:30 (UTC+08:00).\nProgress: 75% [15/20]; Status: Ready.\nCheck: a+b=c, x!=y, path/file_name.ext\nResult: {\"ok\":true,\"count\":15}"],
];
export const PASSAGES: Passage[] = ([ [english,"en"], [chinese,"zh"], [code,"code"], [symbols,"keys"] ] as const).flatMap(([items,kind]) => items.map((r,i) => ({id:`${kind}-${i}`,title:r[0],topic:r[1],level:r[2] as Passage["level"],text:r[3],kind})));
export const KIND_NAMES: Record<Kind,string> = {keys:"键位与符号",en:"英文",zh:"中文",code:"代码"};
