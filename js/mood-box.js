// 数据版本号，更新代码时修改此版本号可强制重置数据
const DATA_VERSION = 'v11';
const storedVersion = localStorage.getItem('moodDataVersion');

// 如果版本不一致，清除旧数据
if (storedVersion !== DATA_VERSION) {
    localStorage.removeItem('moodData');
    localStorage.removeItem('userLikes');
    localStorage.removeItem('userComments');
    localStorage.setItem('moodDataVersion', DATA_VERSION);
}

// 从localStorage读取数据，如果没有则使用默认值
// 所有歌词来自用户提供的夏日入侵企画真实歌词
let moodData = JSON.parse(localStorage.getItem('moodData')) || [
    {
        text: "在二十五点零五分，刷新在我楼下的人，不管气氛，又或是奋不顾身，拥挤进一扇拖延的门",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "像是收留了将要迷途，茫然奔向沙发冰箱贪婪的灵魂，还有，携带了天真的愚蠢",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "怎么会有人需要把所有灯打开，啊，真的刚发现，忘了整理的房间，应该是停过电",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "最近的作息也完全正常，没受那件事影响，不过这么说来，不会吧，难道是在为我紧张",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "回廊间低语嘶吼，随脉搏颤抖的双手，阻挡破碎门外的异兽，包围在灼热空气中",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "被你见证无数紧要的荒唐，也各自假装匆忙都遗忘，又珍藏了一晚虚度的时光",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "再后来不着边际的表达，和听不清的话，就算了吧，要不然确实还真想不起，第一次是在哪里相遇",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "能拥有说话这么完全没重点的你，应该是种幸运，再后来音乐也渐弱，世界又再一次归于沉默",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "我们对望着，一些久违的感动在安静流过，外面的，排好队站直了，我们重新认识一下：）",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "黄昏日落世界坠入光河，车流的轮廓 浪潮起落，匆忙人群 鱼跃 而过，身影间温柔拉扯",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "星幕下沉呼吸缱绻炙热，城市的脉络 纠葛交错，蒸汽泡沫 光影斑驳，恍惚中难以捉摸",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "空气与记忆重合，有一种落寞失而复得，随刹那花火湮没，依旧期待转折，时间虚度又如何",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "也许是夏夜意外的可能，温热的风却来的情理之中，微醺霓虹失焦的街灯，人潮仍汹涌",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "不知道该去怎么形容，闪烁的梦 什么永恒，此刻的莫名自我感动，不需要人懂，迎着风",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "你终于走出了房间 依旧冷淡的语言，就连眼神都想逃离 这段关系的终点",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "挽留的话你没带走 最后的再见也没能说出口，你所有谎言和敷衍 在此刻走到尽头",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "当一切结束的时候 眼泪别再流，就让你身后的空气记忆全部都放手",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "在路灯闪烁的时候 是谁狼狈地站在人群中，所有勉强和倔强也麻烦你别看透",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "其实我知道 一切的接受，不断的退后 只是无休止的迁就，想来全是麻木和空虚委屈",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "就算过了很久 可停不下时间一直走，深夜的时候 拜托回忆别停留，梦里黄昏 地铁路口 你别回头",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "一场滥俗的告别 看你找了什么理由，是你一个人要走 还说还我自由",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "如果说在偌大世界里，还有什么事情让我着迷，那一定是如何能看清，你紧闭的双眼和你的心",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "或许你一定会觉得神奇，明明只是一场平常相遇，其实你也不必假装逃避，我来勇敢去跨越距离",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "像一道光，像一道光，像一场暴风雨，你就这样侵入我的心",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "像一首歌，像一首歌，只想唱给你听，你真空了我所有的空气",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "如果说一切只在想象里，我已经完整了全部剧情，可是你是自由自在地，我怎么能单凭自己拥有你",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "开始时总以为一切顺利，可是过程好像有点生气，其实你不用太故作神秘，我看得见最真实的你",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "太多的想法往外涌，但最后只能装满垃圾桶，这个时候想出去走走，但窗外街灯昏暗不想再动",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "拿好手机和钱包，来一次环绕世界的旅行，一路珍藏了所有的爱，还带回各种奇怪的礼物",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "我想要开一个卖好多奇怪东西的店，凌晨两点还为你营业，如果你看上了哪件东西没钱买，也可以拿你的愿望交换",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "日程不能排的太满，因为要保持足够的睡眠，尝试世界各地的晚餐，因为醒来就在下午一点半",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "拒绝了所有的挽留，就算你流下眼泪也没有用，一路珍藏了所有的爱，还带回各种奇怪的礼物",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "不知不觉又遇到了许多问题，比如说分享欲和礼貌越来越贫瘠，逐渐习惯选择性忘记，可微笑却每天练习",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "又过了昼夜颠倒的一天，作业依然没写却有举重若重的悠闲，心理卫生和身材的管理，听起来觉得有些神秘",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "就像是一场，人来人往时光如梭的梦，带着今年今日再次初来的南风",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "也是后知后觉才发现，不该这样匆忙追忆年华，都忘了收藏那天，你眼里氤氲的晚霞",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "不经意被触碰的初愈灵魂，从一个炎热夏天傍晚走到了哪里，还好直到今天还能想起，第一次向天空挥拳的意义",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "不停循环的地铁再没遇见你，珍惜的细枝末节开始难以想起，请自由生活在新的人群，去拥有崭新的回忆",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "难免有无法隐藏的情绪，还有过几次想要放弃，接受自己不总是那么勇敢，再继续寻找新的答案",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "在你难过的时候，希望你不会感觉到无助，因为在遥远的这边，有一个人在为你祈祷",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "直到现在我也一样，还无法找到合适的距离，也以为简单的言语，就可以互相温暖",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "那时总是抱怨日子过得太平淡，现在回想起来有一点点伤感，但愿一切平稳但愿今夜不孤单",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "一切都会逝去，只有回忆活着，毫无防备你在梦中出现，还是那道阳光那种感觉",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "之后只留下了一段唏嘘，也只在梦醒的时分，不管我写下多真挚的话，最后也只能把我自己感动",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "继续睡去吧并期待着，你还能再次出现在梦中",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "若世界准备好为难我有什么办法，躲起来倒不如勇敢地去拥抱变化，一万次的跌落会找到起跳的方法，一万次的燃烧会绽放最绚烂烟花",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "如果我要着陆就必须先有腾空的胆量，冬眠过又怎样热爱会借我光，借给我向世界喊话的音量",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "别犹豫run and run and run 在空中飞行的姿态，别害怕jump and jump and jump 去感受失重的愉快",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "逆风中难免有阻力是命运给的偏爱，在尽头会有奇迹stand by me forever",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "一万个昼与夜够不够换一秒爆发，一万次的出发能不能换一次抵达",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "夏天过了你说想要远行，要旅行到什么地方，没说再见呢来日方长，真的不必太过感伤",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "夏天过了收到你的相片，又旅行到什么地方，感谢你的来信我的朋友，我会在这里，等你",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "经过狂欢的人群，看过无眠的灯火，愿意走完山海与星河，可是你，在哪里",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "夏天过了，还没你的消息，又旅行到什么地方，恨自己轻率又从容的道别，在你离开的时候",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "这个晚上一个人在房间，关上灯想拥抱黑暗，窗外街灯透过玻璃杯，干扰了我的视线",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "桌面上的波动，让思绪变得不纯洁，不要发来讯息哦拜托，不要理会我",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "拜托你别再想太多，我现在真的什么都不想说，我还有好多歌词要写，还有新番要补，拜托你别来烦我",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "看着街灯拉上了窗帘，把世界关在外面，打开手机看时间，却收到你的留言，不要叫我出去哦拜托，不要理会我",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "I wanna smile but what I do ? 我想微笑，但我在做什么？I wanna fast down the street in the BeiWaLu, 要快乐地在北洼路走走",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "I wanna smile but what I do ! 我想微笑，但我要做！I wanna putting down the teacher and build my rule, 要老师下台 规矩我来定",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "I wanna smile but what I do ? 我想微笑，但我要做？I wanna write song for country for rock and roll, 要给这个国家谱首摇滚乐",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "I wanna smile but what I do ! 我想微笑，但我要做！I wanna keep my glory and hang on the sword, 我要紧握这剑 留住荣耀",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "If I have to be in the hell, 如果我必须下地狱，Please take it easy and let me burn your soul! 请放松些 让我灼烧你的灵魂吧！",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "等一个自然而然的晴天，我想要带你去海边，去留住这个瞬间在来不及挽回之前，其实不需要深刻的语言，趁现在还有一点时间，就当是最后一次，再一次和我去冒险，不经意划过发尾的指尖，还有冰镇汽水的甜，猜不到你给谁写，带着海风的明信片，哦可不可以再专心一点，请你不要心不在焉，黄昏夕阳还有愿望没实现，能不能和你竭尽全力奔跑，向着海平线，余晖消逝之前都不算终点，曾经的关于以后所有的幻想已经太遥远，被我们丢在身后的时间。",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "这城市的车流和这地表的颤抖，像一颗石子落入地心之后泛起的温柔。暗涌，河水流过转角她的楼，被梦魇，轻声呓语唤醒身后的幼兽。失效感官焦灼只剩下，麻木愚钝无从感受，共同支撑全都瓦解。只是我们现在都，已忘记到底是，谁隐藏春秋，谁在大雨之后，把旗帜插在最高的楼。过去陈旧的还在坚守，内心已腐朽，摇摇欲坠不停退后，毁灭即拯救。夏日掠夺春秋，结局无法看透，眼看这情节开始变旧。所有的城池已经失守，最终无法占有。",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "无眠辗转，伴着人间破碎的旧梦，像繁星，退却后只剩下混沌的夜空。炙热，掩盖风声鹤唳的担忧，把所有失落无助反手推入，无尽的白昼。失效感官焦灼只剩下，麻木愚钝无从感受，共同支撑全都瓦解。只是我们现在都已经忘记到底是，谁隐藏春秋，谁在大雨之后，把旗帜插在最高的楼。过去的陈旧还在坚守，内心已腐朽，摇摇欲坠不停退后，毁灭即拯救。夏日掠夺春秋，结局无法看透，眼看这情节开始变旧。所有的城池早已失守，惶恐难以接受，缠绵往复不肯放手，最终无法占有。",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "最近一段时间我过得有点不堪，刚结束了持续的加班，昨天晚上喝酒到太晚，闹钟响了一万次才关，爬起来，浑浑噩噩发呆的早餐，挤上了这班地铁就在八点半，忙碌的人群你追我赶，戴上耳机什么都不管，一个疯狂的念头，让我不想继续，充实而又庸碌的循环，早了一秒打卡坐进格子间，称赞了前台新买的耳环，收到三张工作单之前，还有一点气定神闲，面对吧，面对无穷无尽的麻烦，没说过话的同事送来婚礼请柬，回绝的理由用尽只剩心烦，关系只不过是互相点赞，礼物只想送一封邮件，去寒暄，想要拒绝却没那么简单，你已经想了太久，可还是不想放手，何时才去寻找你所说的自由，望眼欲穿的生活，忙碌滋生的折磨，想透支所有亲手把一切打破，你已经想了太久，这次一定要放手，还要去寻找你一直说的自由，这不安分的念头，消失在醒来以后，怀念对未来还有期待的时候，不敢匆忙说再见就算已经下班，每一秒都不情愿的很明显，默念加薪把自己催眠，想要结束这场表演，不管怎么说，说了这么多，想想将要付出的代价，很难，深夜的胡思乱想总会导致失眠，望着黑暗过去在重演，关于远方未知的一切，会有什么等着实现，闭上眼，会有谁想过会留下遗憾。",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "虽然有点想念还有一点抱歉，但是也只能说一声再见，很久没有过这样的蝉鸣在耳边出现，所有回忆为你留在那天，我们站在时光交汇的分岔路口，在盲目而又理所当然中选择，再见吧那些不切实际的梦，那并不是你想要的人生。感谢这个夏天的理由，和你奔跑的午后，只有这次想要，为所有的瞬间停留，别害怕遥远的以后，能不能抓紧我的手，永远记得此刻风的温柔，闭上双眼还能想起熟悉的天空，也曾见证过最美的霓虹，在遥远的之后我们会在哪里相遇，有些问题不需要有答案，我们站在时光交汇的分岔路口，在盲目而又理所当然中选择，再见吧  那些不切实际的梦，那并不是你想要的人生。",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "彗星坠向深海，风筝落入长夜，在时间发现之前闭眼，偷一颗吻安眠，指尖呓语柔软，目光轻抚疲倦，寓言也沉溺在最后的夜晚，就让心跳代替回答，往事之后，或许有时光流转，再成为我们彼此和星辰，纠缠着遥远的涟漪，是温柔的枷锁，陪伴无声永恒的脉搏，让此刻随潮汐汇入银河，别害怕，一去不回的尘星也许会记得，守望着渺小夜空独自盛开的烛火，只刹那闪烁也炙热，起初和籁婉转，又有赤澄缠绵，拨动云层是温暖的手，穿梭不知疲倦，月光用浪花遮掩，群山悠然摇曳，风与飞鸟纵身甜蜜的搁浅，在闪耀如白昼的阒寂荒原。",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "把该做的都做了，世界都觉得很扯，他们暂时不能定义我。期末评论写了很多，可所有的完美答案，都只是参考选择。折纸做的飞机也能飞向银河，我会，让平凡的我就此绝版，闪耀着光芒出现。握紧拳，向嘲笑宣战，热血的笨蛋，已经闯了一万次的关，挣脱了引力，为你，这次一定逆转。",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "曾这样喜欢一个人，用无可救药的笨，明明只隔你十几公分，怎么跑完了青春。跑过走廊起哄的笑声，跑过等你的路灯，跑过那男生大喊等等，却追不上的车门。人海漂流，你的名字陪我狂奔，陪我做着梦。若海水逆流，若你在路的尽头，再告白一次如何，我，没有选择。",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    },
    {
        text: "奔向你，跨越星河，燃烧自己，换一场焰火。如果说，还要和你有一万次的错过，追一万零一次又如何。原谅我盲目执着，被回忆温柔折磨，熄灭的渺小泡沫，不挣脱，去坠落。别去管重蹈什么覆辙，就让我们拥有过。",
        source: "夏日入侵企画",
        type: "lyrics",
        likes: 0,
        comments: [],
        lastDrawn: null
    }
];

// 保存数据到localStorage
function saveMoodData() {
    localStorage.setItem('moodData', JSON.stringify(moodData));
}

let currentMood = null;
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let userLikes = JSON.parse(localStorage.getItem('userLikes')) || {};
let userComments = JSON.parse(localStorage.getItem('userComments')) || {};

// 显示登录模态框
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

// 更新当前用户信息
function updateCurrentUser() {
    currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
}

function saveToLocalStorage() {
    localStorage.setItem('userLikes', JSON.stringify(userLikes));
    localStorage.setItem('userComments', JSON.stringify(userComments));
}

function getRandomMood() {
    // 计算每个歌词的优先级分数
    // 越久没被抽到的优先级越高
    const now = new Date();
    const moodsWithPriority = moodData.map((mood, index) => {
        let priority = 100; // 基础分数
        
        if (mood.lastDrawn) {
            const lastDrawnTime = new Date(mood.lastDrawn);
            const timeDiff = now - lastDrawnTime;
            const hoursDiff = timeDiff / (1000 * 60 * 60);
            
            // 每小时增加10分，确保久未抽到的有更高优先级
            priority += hoursDiff * 10;
        }
        
        // 加上随机因子，保持随机性
        priority += Math.random() * 50;
        
        return { ...mood, index, priority };
    });
    
    // 按优先级排序，选择优先级最高的
    moodsWithPriority.sort((a, b) => b.priority - a.priority);
    
    let selectedMood = moodsWithPriority[0];
    
    // 处理歌词，只显示其中完整的一两句
    const originalText = selectedMood.text;
    
    // 首先尝试按结束标点符号分割完整的句子
    const fullSentences = originalText
        .split(/[。！？；\.\!\?\;]/)
        .map(s => s.trim())
        .filter(s => s.length > 0)
        .map(s => s + '。'); // 重新添加句号
    
    let displayText;
    if (fullSentences.length === 0) {
        // 如果没有找到完整句子，使用原始文本
        displayText = originalText;
    } else if (fullSentences.length <= 2) {
        // 如果歌词本身只有一两句完整句子，就显示完整的
        displayText = fullSentences.join('');
    } else {
        // 对于长句子，尝试在逗号处分割，避免句子过长
        const longSentence = fullSentences[Math.floor(Math.random() * fullSentences.length)];
        const commaSegments = longSentence.split('，').filter(s => s.trim().length > 0);
        
        if (commaSegments.length <= 2) {
            // 如果句子本身不长，就显示完整的
            displayText = longSentence;
        } else {
            // 随机选择2-4个逗号分割的部分，形成一个适中长度的句子
            const numSegments = Math.floor(Math.random() * 3) + 2; // 2-4个部分
            const maxStartIndex = Math.max(0, commaSegments.length - numSegments);
            const startIndex = Math.floor(Math.random() * (maxStartIndex + 1));
            const selectedSegments = commaSegments.slice(startIndex, startIndex + numSegments);
            
            // 连接选择的部分，以逗号结尾
            displayText = selectedSegments.join('，') + '，';
        }
    }
    
    // 创建一个新对象，包含处理后的歌词
    selectedMood = {
        ...selectedMood,
        text: displayText,
        originalText: originalText // 保存原始完整歌词
    };
    
    // 更新该便签的最后抽取时间
    moodData[selectedMood.index].lastDrawn = now.toISOString();
    saveMoodData();
    
    return { ...selectedMood, index: selectedMood.index };
}

function displayMood(mood) {
    currentMood = mood;
    const moodResult = document.getElementById('moodResult');
    const noteText = document.getElementById('noteText');
    const noteSource = document.getElementById('noteSource');
    const likeCount = document.getElementById('likeCount');
    const commentCount = document.getElementById('commentCount');
    const likeBtn = document.getElementById('likeBtn');

    noteText.textContent = mood.text;
    noteSource.textContent = `— ${mood.source}`;
    likeCount.textContent = mood.likes;
    commentCount.textContent = mood.comments.length;

    if (userLikes[mood.index]) {
        likeBtn.classList.add('liked');
    } else {
        likeBtn.classList.remove('liked');
    }

    moodResult.style.display = 'block';
    moodResult.scrollIntoView({ behavior: 'smooth', block: 'center' });

    loadComments(mood.index);
}

function handleShake() {
    const shakeButton = document.getElementById('shakeButton');
    const moodResult = document.getElementById('moodResult');
    
    shakeButton.classList.add('shaking');
    moodResult.style.display = 'none';
    
    setTimeout(() => {
        shakeButton.classList.remove('shaking');
        const mood = getRandomMood();
        displayMood(mood);
        updateHistoryDisplay();
    }, 800);
}

function handleLike() {
    // 更新当前用户信息
    updateCurrentUser();
    
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    if (!currentMood) return;
    
    const moodIndex = currentMood.index;
    const likeBtn = document.getElementById('likeBtn');
    const likeCount = document.getElementById('likeCount');
    
    if (userLikes[moodIndex]) {
        moodData[moodIndex].likes--;
        delete userLikes[moodIndex];
        likeBtn.classList.remove('liked');
    } else {
        moodData[moodIndex].likes++;
        userLikes[moodIndex] = true;
        likeBtn.classList.add('liked');
    }
    
    likeCount.textContent = moodData[moodIndex].likes;
    saveMoodData();
    saveToLocalStorage();
    updateHistoryDisplay();
}

function loadComments(moodIndex) {
    const commentsList = document.getElementById('commentsList');
    commentsList.innerHTML = '';
    
    const comments = moodData[moodIndex].comments;
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<p class="no-comments">暂无评论，快来抢沙发吧~</p>';
        return;
    }
    
    comments.forEach(comment => {
        const commentEl = document.createElement('div');
        commentEl.className = 'comment-item';
        commentEl.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${comment.author}</span>
                <span class="comment-time">${comment.time}</span>
            </div>
            <p class="comment-text">${comment.text}</p>
        `;
        commentsList.appendChild(commentEl);
    });
}

function handleSubmitComment() {
    if (!currentUser) {
        showLoginModal();
        return;
    }
    
    if (!currentMood) return;
    
    const commentInput = document.getElementById('commentInput');
    const text = commentInput.value.trim();
    
    if (!text) {
        alert('请输入评论内容');
        return;
    }
    
    const moodIndex = currentMood.index;
    const newComment = {
        author: currentUser.username,
        text: text,
        time: new Date().toLocaleString()
    };
    
    moodData[moodIndex].comments.push(newComment);
    commentInput.value = '';
    
    document.getElementById('commentCount').textContent = moodData[moodIndex].comments.length;
    
    saveMoodData();
    loadComments(moodIndex);
    updateHistoryDisplay();
}

function toggleComments() {
    const commentsSection = document.getElementById('commentsSection');
    const commentBtn = document.getElementById('commentBtn');

    if (commentsSection.style.display === 'none') {
        commentsSection.style.display = 'block';
        commentBtn.classList.add('active');
    } else {
        commentsSection.style.display = 'none';
        commentBtn.classList.remove('active');
    }
}

function handleShare() {
    if (!currentMood) return;

    const shareText = `${currentMood.text}\n\n— ${currentMood.source}\n\n来自「夏日入侵企画 · 粉丝情绪能量站」`;
    
    if (navigator.share) {
        navigator.share({
            title: '夏日入侵企画 · 粉丝情绪能量站',
            text: shareText
        }).catch(console.error);
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('已复制到剪贴板！');
        }).catch(() => {
            alert('复制失败，请手动复制');
        });
    }
}

let currentTab = 'hot'; // 当前选中的标签

function updateHistoryDisplay() {
    const historyGrid = document.getElementById('historyGrid');
    historyGrid.innerHTML = '';

    let displayMoods;
    
    if (currentTab === 'hot') {
        // 最热门：按点赞数排序，只显示有点赞或评论的便签
        displayMoods = [...moodData]
            .filter(mood => mood.likes > 0 || mood.comments.length > 0)
            .sort((a, b) => b.likes - a.likes)
            .slice(0, 10);
        
        // 如果没有互动，显示所有便签的前10个
        if (displayMoods.length === 0) {
            displayMoods = moodData.slice(0, 10);
        }
    } else {
        // 最近：按最后抽取时间排序
        displayMoods = [...moodData]
            .filter(mood => mood.lastDrawn !== null)
            .sort((a, b) => new Date(b.lastDrawn) - new Date(a.lastDrawn))
            .slice(0, 10);
        
        // 如果没有抽取记录，显示所有便签的前10个
        if (displayMoods.length === 0) {
            displayMoods = moodData.slice(0, 10);
        }
    }

    displayMoods.forEach((mood) => {
        const originalIndex = moodData.findIndex(m => m.text === mood.text);
        const card = document.createElement('div');
        card.className = 'history-card';
        card.innerHTML = `
            <p class="history-text">${mood.text}</p>
            <div class="history-stats">
                <span class="stat-item">❤️ ${mood.likes}</span>
                <span class="stat-item">💬 ${mood.comments.length}</span>
            </div>
        `;
        card.addEventListener('click', () => {
            displayMood({ ...mood, index: originalIndex });
        });
        historyGrid.appendChild(card);
    });
}

function switchTab(tab) {
    currentTab = tab;
    
    // 更新按钮样式
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.tab === tab) {
            btn.classList.add('active');
        }
    });
    
    // 更新标题文字
    const historyTitle = document.getElementById('historyTitle');
    if (tab === 'hot') {
        historyTitle.textContent = '📚 热门便签';
    } else {
        historyTitle.textContent = '📚 最近便签';
    }
    
    // 更新显示内容
    updateHistoryDisplay();
}

// 抽取心情便签
function drawMood() {
    const mood = getRandomMood();
    displayMood(mood);
    updateHistoryDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    const shakeButton = document.getElementById('shakeButton');
    const likeBtn = document.getElementById('likeBtn');
    const commentBtn = document.getElementById('commentBtn');
    const submitCommentBtn = document.getElementById('submitCommentBtn');
    const shareBtn = document.getElementById('shareBtn');

    shakeButton.addEventListener('click', drawMood);
    likeBtn.addEventListener('click', handleLike);
    commentBtn.addEventListener('click', toggleComments);
    submitCommentBtn.addEventListener('click', handleSubmitComment);
    shareBtn.addEventListener('click', handleShare);

    // 标签切换事件
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.dataset.tab);
        });
    });

    updateHistoryDisplay();
});