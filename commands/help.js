const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    const embed = new Discord.MessageEmbed().setColor('BLUE').setTitle('HELP!').addFields(
        {name:'\\level', value:`레벨을 표시해줍니다.`},
        {name:'\\invite', value:`이 봇 초대 링크를 표시합니다.`},
        {name:'\\ping', value:`ping입니다.`},
        {name:'\\vote', value:`투표가 가능합니다. \`\`\`\\vote 제목 값1\`\`\`의 형태로 투표가 가능하며 최대 10가지 나올 수 있습니다.`},
        {name:'\\vote \\open', value:`개표합니다. 투표 메세지의 id를 입력하여 사용할 수 있으며 메세지와 같은 채널에서만 가능합니다.`}
    );
    msg.channel.send(embed);
};
exports.name = "help";