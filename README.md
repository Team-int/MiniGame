# MiniGame
 
## 설정
app.js가 있는 폴더 내에 setting.json 파일이 있어야 작동할 수 있습니다. 
```
{
    "token": "토큰을 여기에 입력하세요."
}
```

### 토큰
토큰입니다. 이것은 디스코드 봇을 사용하기 때문에 봇 토큰이 필수적입니다. "token" 으로 지정해 주어야 봇 토큰으로 인식할 수 있습니다.

## 명령어
자유롭게 추가하실 수 있습니다. 당연하게도요.
### 추가 방식
commands 폴더 내에 넣으셔야 합니다.
```
const Discord = require('discord.js');

exports.run = (client, msg, args) => {
    //명령어 내용
};
exports.name = "명령어 이름";
```
예시는 [commands][./commands/ping.js] 에 있습니다.