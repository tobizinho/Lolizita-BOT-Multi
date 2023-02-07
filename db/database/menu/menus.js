/* Olá! Lolizita-BOT é um bot voltado a Administração do seu grupo. Porém, com muitos comandos! Caso de Erro, contate o Criador Oficial da Lolizita-BOT */

const fs = require("fs");
const chalk = require('chalk')

//menu 
exports.menu = (prefix, hr, me) => {
return `
╭━━ ⪩
▢ ⚠︎ | Info
▢ ╭═══⊷
▢ ⌁ 令 Prefixo:「${prefix}」
▢ ⌁ 令 Hora: ${hr}
▢ ⌁ 令 Nome: ${me?.name || "-"}
▢ ╰═══⊷
▢
▢ ⚠︎ Comandos.
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Perfil
▢ ⌁ 令 ${prefix}Ia「Texto」
▢ ⌁ 令 ${prefix}Nick「Texto」
▢ ⌁ 令 ${prefix}Play「Titulo」
▢ ⌁ 令 ${prefix}Attp1「Texto」
▢ ⌁ 令 ${prefix}Togif「Sticker」
▢ ⌁ 令 ${prefix}Playlist「Titulo」
▢ ⌁ 令 ${prefix}Toimg「Sticker」
▢ ⌁ 令 ${prefix}Animeia「Imagem」
▢ ⌁ 令 ${prefix}Rename「Sticker」
▢ ⌁ 令 ${prefix}Xvideosplay「Link」 
▢ ⌁ 令 ${prefix}Emojimix「😭+😘」
▢ ⌁ 令 ${prefix}Audiomeme「Nome」 
▢ ╰═══⊷
▢
▢ ⚠︎ Menus
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Grupo
▢ ⌁ 令 ${prefix}Logos
▢ ⌁ 令 ${prefix}Jogos
▢ ⌁ 令 ${prefix}Criador
▢ ⌁ 令 ${prefix}Animes
▢ ⌁ 令 ${prefix}Download
▢ ⌁ 令 ${prefix}Consultas
▢ ⌁ 令 ${prefix}Pesquisas
▢ ⌁ 令 ${prefix}Figurinhas
▢ ╰═══⊷
╰━━━ ⪨`
}

//download 
exports.download = (prefix, hr, me) => {
return `
╭━━ ⪩
▢ ❗️⃟ きιᥒf᥆ d᥆ b᥆tき⃟❗
▢ ╭═══⊷
▢ ⌁ 令 Prefixo:「${prefix}」
▢ ⌁ 令 Hora: ${hr}
▢ ⌁ 令 Nome: ${me?.name || "-"}
▢ ╰═══⊷
▢
▢ 〘 ρᥣᥲᥡᥱr᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Play「Nome」 
▢ ⌁ 令 ${prefix}Playvid「Nome」 
▢ ⌁ 令 ${prefix}Audiomeme「Nome」 
▢ ⌁ 令 ${prefix}Ytmp3「Link」 
▢ ⌁ 令 ${prefix}Ytmp4「Link」 
▢ ⌁ 令 ${prefix}Xnxxplay「Link」 
▢ ⌁ 令 ${prefix}Xvideosplay「Link」 
▢ ⌁ 令 ${prefix}Twitter「Link」  
▢ ⌁ 令 ${prefix}Tiktok「Link」  
▢ ╰═══⊷
╰━━━ ⪨`;
}

//grupo 
exports.grupo = (prefix, hr, me) => {
return `
╭━━ ⪩
▢ ❗️⃟ きιᥒf᥆ d᥆ b᥆tき⃟❗
▢ ╭═══⊷
▢ ⌁ 令 Prefixo:「${prefix}」
▢ ⌁ 令 Hora: ${hr}
▢ ⌁ 令 Nome: ${me?.name || "-"}
▢ ╰═══⊷
▢
▢ 〘 bᥲᥒιr 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Kick「Msg」
▢ ⌁ 令 ${prefix}Banir「@Tag」
▢ ╰═══⊷
▢
▢ 〘 ρr᥆꧑᥆᥎ᥱr 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Promote「Msg」
▢ ⌁ 令 ${prefix}Promover「@Tag」
▢ ╰═══⊷
▢
▢ 〘 rᥱbᥲι᥊ᥲr 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Demote「Msg」
▢ ⌁ 令 ${prefix}Rebaixar「@Tag」
▢ ╰═══⊷
▢
▢ 〘 ᥲdιᥴι᥆ᥒᥲr 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Add「Msg」
▢ ⌁ 令 ${prefix}Reviver「Numero」
▢ ╰═══⊷
▢
▢ 〘 ᥲbrιr/fᥱᥴhᥲr 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Abrir
▢ ⌁ 令 ${prefix}Group
▢ ⌁ 令 ${prefix}Fechar
▢ ╰═══⊷
▢
▢ 〘 ᥴ᥆ᥒtᥲd᥆r 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Ativos
▢ ⌁ 令 ${prefix}Inativos
▢ ⌁ 令 ${prefix}Banghost
▢ ⌁ 令 ${prefix}Notifyghosts
▢ ╰═══⊷
▢
▢ 〘 Aᥒtι᥉/Oᥙtr᥆᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Simih「On/Off」
▢ ⌁ 令 ${prefix}Antilink「On/Off」
▢ ⌁ 令 ${prefix}Antifake「On/Off」
▢ ⌁ 令 ${prefix}Welcome「On/Off」
▢ ⌁ 令 ${prefix}Viewonce「On/Off」
▢ ⌁ 令 ${prefix}Addwelcome「Text」
▢ ⌁ 令 ${prefix}exitwelcome「Text」
▢ ⌁ 令 ${prefix}Addlistnegra「@Tag」
▢ ⌁ 令 ${prefix}Remlistnegra「@Tag」
▢ ╰═══⊷
▢
▢ 〘 ᥆ᥙtr᥆᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Link
▢ ⌁ 令 ${prefix}Listadm
▢ ⌁ 令 ${prefix}Perfil
▢ ⌁ 令 ${prefix}Listnegra
▢ ⌁ 令 ${prefix}Addafk「Texto」
▢ ⌁ 令 ${prefix}Perfil「@Tag」
▢ ⌁ 令 ${prefix}Tagall「Texto」
▢ ⌁ 令 ${prefix}Setprefix「Text」
▢ ⌁ 令 ${prefix}Hidetag「Texto」
▢ ⌁ 令 ${prefix}Setdesc「Texto」
▢ ⌁ 令 ${prefix}Setnome「Texto」
▢ ╰═══⊷
╰━━━ ⪨`
}

//logos 
exports.logos = (prefix, hr, me) => {
return `
╭━━ ⪩
▢ ❗️⃟ きιᥒf᥆ d᥆ b᥆tき⃟❗
▢ ╭═══⊷
▢ ⌁ 令 Prefixo:「${prefix}」
▢ ⌁ 令 Hora: ${hr}
▢ ⌁ 令 Nome: ${me?.name || "-"}
▢ ╰═══⊷
▢
▢ 〘 ᥱfᥱιt᥆᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Gay「Foto」
▢ ⌁ 令 ${prefix}Rip「Foto」
▢ ⌁ 令 ${prefix}Trash「Foto」
▢ ⌁ 令 ${prefix}Poutine「Foto」
▢ ⌁ 令 ${prefix}Beautiful「Foto」
▢ ⌁ 令 ${prefix}Delete「Foto」
▢ ⌁ 令 ${prefix}Bobross「Foto」
▢ ⌁ 令 ${prefix}Hitler「Foto」
▢ ⌁ 令 ${prefix}Notpoutine「Foto」
▢ ⌁ 令 ${prefix}Wasted「Foto」
▢ ⌁ 令 ${prefix}Komunis「Foto」
▢ ⌁ 令 ${prefix}Triggered「Foto」
▢ ⌁ 令 ${prefix}Bolsonaro「Foto」
▢ ⌁ 令 ${prefix}Cinza「Foto」
▢ ⌁ 令 ${prefix}Embacado「Foto」
▢ ⌁ 令 ${prefix}Invert「Foto」
▢ ⌁ 令 ${prefix}Facepalm「Foto」
▢ ⌁ 令 ${prefix}Tumulo「Foto」
▢ ⌁ 令 ${prefix}Preso「Foto」
▢ ⌁ 令 ${prefix}Wanted「Foto」
▢ ⌁ 令 ${prefix}Rotate「Foto」
▢ ⌁ 令 ${prefix}Patrick「Foto」
▢ ⌁ 令 ${prefix}Sepia「Foto」
▢ ⌁ 令 ${prefix}Hacker「Foto」
▢ ⌁ 令 ${prefix}Hacker2「Foto」
▢ ╰═══⊷
▢
▢ 〘 ᥣ᥆g᥆᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Lava「Texto」
▢ ⌁ 令 ${prefix}Berry「Texto」
▢ ⌁ 令 ${prefix}Toxic「Texto」
▢ ⌁ 令 ${prefix}Snow「Texto」
▢ ⌁ 令 ${prefix}Blood「Texto」
▢ ⌁ 令 ${prefix}3dbox「Texto」
▢ ⌁ 令 ${prefix}Matrix「Texto」
▢ ⌁ 令 ${prefix}3dglue「Texto」
▢ ⌁ 令 ${prefix}Metallic「Texto」
▢ ⌁ 令 ${prefix}Thunder「Texto」
▢ ⌁ 令 ${prefix}Artpaper「Texto」
▢ ⌁ 令 ${prefix}Thunder2「Texto」
▢ ⌁ 令 ${prefix}Neonlight「Texto」
▢ ⌁ 令 ${prefix}Neonlight「Texto」
▢ ⌁ 令 ${prefix}1917style「Texto」
▢ ⌁ 令 ${prefix}Chocolate「Texto」
▢ ⌁ 令 ${prefix}Black-pink「Texto」
▢ ⌁ 令 ${prefix}Christmas「Texto」
▢ ⌁ 令 ${prefix}Embossed「Texto」
▢ ⌁ 令 ${prefix}Luxurygold「Texto」
▢ ⌁ 令 ${prefix}Drop-water「Texto」
▢ ⌁ 令 ${prefix}Magmahot「Texto」
▢ ⌁ 令 ${prefix}3d-gradient「Texto」
▢ ⌁ 令 ${prefix}Harrypotter「Texto」
▢ ⌁ 令 ${prefix}Sandwriting「Texto」
▢ ⌁ 令 ${prefix}Greenhorror「Texto」
▢ ⌁ 令 ${prefix}Horrorblood「Texto」
▢ ⌁ 令 ${prefix}Bearmascot「Texto」
▢ ⌁ 令 ${prefix}Transformer「Texto」
▢ ⌁ 令 ${prefix}Sandsummer「Texto」
▢ ⌁ 令 ${prefix}Realisticcloud「Texto」
▢ ⌁ 令 ${prefix}Xmascards3d「Texto」
▢ ⌁ 令 ${prefix}Futuristicneon「Texto」
▢ ⌁ 令 ${prefix}Sciencefiction「Texto」
▢ ⌁ 令 ${prefix}Natural-leaves「Texto」
▢ ⌁ 令 ${prefix}Summerysand「Texto」
▢ ⌁ 令 ${prefix}Sandengraved「Texto」
▢ ⌁ 令 ${prefix}Metaldarkgold「Texto」
▢ ⌁ 令 ${prefix}Captainamerica「Texto」
▢ ⌁ 令 ${prefix}Neondevilwings「Texto」
▢ ⌁ 令 ${prefix}Impressiveglitch「Texto」
▢ ⌁ 令 ${prefix}Wonderfulgraffiti「Texto」
▢ ╰═══⊷
╰━━━ ⪨`
}

//jogos 
exports.jogos = (prefix, hr, me) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ 令 Prefixo:「${prefix}」
▢ ⌁ 令 Hora: ${hr}
▢ ⌁ 令 Nome: ${me?.name || "-"}
▢ ╰═══⊷
▢
▢ 〘 ᥴᥲ᥉h 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Cash
▢ ⌁ 令 ${prefix}Rankcash
▢ ⌁ 令 ${prefix}Roubar「@Tag」
▢ ⌁ 令 ${prefix}Usercash「@Tag」
▢ ⌁ 令 ${prefix}Transferir「@Tag|Quantia」
▢ ╰══⊷
▢
▢ 〘 j᥆g᥆᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Dado
▢ ⌁ 令 ${prefix}Slot
▢ ⌁ 令 ${prefix}Roleta
▢ ⌁ 令 ${prefix}Tagme
▢ ⌁ 令 ${prefix}Cassino
▢ ⌁ 令 ${prefix}Caracoroa
▢ ⌁ 令 ${prefix}roletarussa
▢ ⌁ 令 ${prefix}Sn「Text」
▢ ⌁ 令 ${prefix}Nick「Texto」
▢ ⌁ 令 ${prefix}Corno「@Tag」
▢ ⌁ 令 ${prefix}Amongus「@Tag」
▢ ╰═══⊷
▢
▢ 〘 ρ᥆rᥴᥱᥒtᥲgᥱ꧑ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Feio
▢ ⌁ 令 ${prefix}Lixo
▢ ⌁ 令 ${prefix}Gado
▢ ⌁ 令 ${prefix}Burro
▢ ⌁ 令 ${prefix}Gordo
▢ ⌁ 令 ${prefix}Pobre
▢ ⌁ 令 ${prefix}Bonito
▢ ⌁ 令 ${prefix}Macaco
▢ ⌁ 令 ${prefix}Gostoso
▢ ╰═══⊷
╰━━━ ⪨`
}

//criador 
exports.criador = (prefix, hr, me) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ 令 Prefixo:「${prefix}」
▢ ⌁ 令 Hora: ${hr}
▢ ⌁ 令 Nome: ${me?.name || "-"}
▢ ╰═══⊷
▢
▢ 〘 ᥴrιᥲd᥆r 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Mek
▢ ⌁ 令 ${prefix}Eval
▢ ⌁ 令 ${prefix}Sair
▢ ⌁ 令 ${prefix}Ping
▢ ⌁ 令 ${prefix}Prem
▢ ⌁ 令 ${prefix}Entrar
▢ ⌁ 令 ${prefix}Antipv
▢ ⌁ 令 ${prefix}Reiniciar
▢ ⌁ 令 ${prefix}Addpremium
▢ ⌁ 令 ${prefix}Divu「Text」
▢ ⌁ 令 ${prefix}Setprefix「Text」
▢ ⌁ 令 ${prefix}Addban「@Tag」
▢ ⌁ 令 ${prefix}Remban「@Tag」
▢ ⌁ 令 ${prefix}Crash「@Membro」
▢ ⌁ 令 ${prefix}Bangroup「On/Off」
▢ ⌁ 令 ${prefix}Divulgar「Link+Texto」
▢ ╰═══⊷
╰━━━ ⪨`
}

//animes 
exports.animes = (prefix, hr, me) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ 令 Prefixo:「${prefix}」
▢ ⌁ 令 Hora: ${hr}
▢ ⌁ 令 Nome: ${me?.name || "-"}
▢ ╰═══⊷
▢
▢ 〘 ᥲᥒι꧑ᥱ᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Akame
▢ ⌁ 令 ${prefix}Tatsumi
▢ ⌁ 令 ${prefix}Najenda
▢ ⌁ 令 ${prefix}Kurome
▢ ⌁ 令 ${prefix}Bulat
▢ ⌁ 令 ${prefix}Leone
▢ ⌁ 令 ${prefix}Mine
▢ ⌁ 令 ${prefix}Chelsea
▢ ⌁ 令 ${prefix}Loli
▢ ⌁ 令 ${prefix}Zoro
▢ ⌁ 令 ${prefix}Luffy
▢ ⌁ 令 ${prefix}Oden
▢ ⌁ 令 ${prefix}Nami
▢ ⌁ 令 ${prefix}Jinbe
▢ ⌁ 令 ${prefix}Kaido
▢ ⌁ 令 ${prefix}Robin
▢ ⌁ 令 ${prefix}Usopp
▢ ⌁ 令 ${prefix}Franky
▢ ⌁ 令 ${prefix}Yamato
▢ ⌁ 令 ${prefix}Esdeath
▢ ╰═══⊷
▢
▢ 〘 hᥱᥒtᥲι᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Ero
▢ ⌁ 令 ${prefix}Yuri
▢ ⌁ 令 ${prefix}Ass
▢ ⌁ 令 ${prefix}Foot
▢ ⌁ 令 ${prefix}Orgy
▢ ⌁ 令 ${prefix}Jahy
▢ ⌁ 令 ${prefix}Bdsm
▢ ⌁ 令 ${prefix}Pussy
▢ ⌁ 令 ${prefix}Hentai
▢ ⌁ 令 ${prefix}Thighs
▢ ⌁ 令 ${prefix}Panties
▢ ⌁ 令 ${prefix}Ahegao
▢ ⌁ 令 ${prefix}Blowjob
▢ ⌁ 令 ${prefix}Cuckold
▢ ⌁ 令 ${prefix}Nsfwloli
▢ ⌁ 令 ${prefix}Femdom
▢ ⌁ 令 ${prefix}Sfwneko
▢ ⌁ 令 ${prefix}Tentacles
▢ ⌁ 令 ${prefix}Nsfwneko
▢ ⌁ 令 ${prefix}Masturbation
▢ ╰═══⊷
╰━━━ ⪨`
}

//figurinhas 
exports.figurinhas = (prefix, hr, me) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ 令 Prefixo:「${prefix}」
▢ ⌁ 令 Hora: ${hr}
▢ ⌁ 令 Nome: ${me?.name || "-"}
▢ ╰═══⊷
▢
▢ 〘 fιgᥙrιᥒhᥲ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}F「Foto/Gif」
▢ ⌁ 令 ${prefix}stickertake「Nome|Autor」
▢ ╰═══⊷
▢
▢ 〘 ᥉tιᥴkᥱr 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Attp「Texto」
▢ ⌁ 令 ${prefix}Attp1「Texto」
▢ ⌁ 令 ${prefix}Attp2「Texto」
▢ ⌁ 令 ${prefix}Attp3「Texto」
▢ ⌁ 令 ${prefix}Attp4「Texto」
▢ ⌁ 令 ${prefix}Attp5「Texto」
▢ ⌁ 令 ${prefix}Attp6「Texto」
▢ ⌁ 令 ${prefix}Togif「Sticker」
▢ ⌁ 令 ${prefix}Toimg「Sticker」
▢ ⌁ 令 ${prefix}Tourl「Imagem」
▢ ⌁ 令 ${prefix}Emojimix「😭+😘」
▢ ⌁ 令 ${prefix}Rename「Sticker」
▢ ╰═══⊷
╰━━━ ⪨`
}

//consultas 
exports.consultas = (prefix, hr, me) => {
return `
╭━━ ⪩
▢ き⃟❗️ɪɴғᴏ ᴅᴏ ʙᴏᴛ❗⃟ き
▢ ╭═══⊷
▢ ⌁ 令 Prefixo:「${prefix}」
▢ ⌁ 令 Hora: ${hr}
▢ ⌁ 令 Nome: ${me?.name || "-"}
▢ ╰═══⊷
▢
▢ 〘 ᥴ᥆ᥒ᥉ᥙᥣtᥲ᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Cpf
▢ ⌁ 令 ${prefix}Cpf1
▢ ⌁ 令 ${prefix}Cpf2
▢ ⌁ 令 ${prefix}Tell
▢ ⌁ 令 ${prefix}Cnpj
▢ ⌁ 令 ${prefix}Nome
▢ ⌁ 令 ${prefix}Placa
▢ ⌁ 令 ${prefix}Ip「Codigo」
▢ ⌁ 令 ${prefix}Cep「Codigo」
▢ ⌁ 令 ${prefix}DDD「Codigo」
▢ ⌁ 令 ${prefix}Banco「Codigo」
▢ ╰═══⊷
╰━━━ ⪨`
}

exports.ping = (prefix, nameBot, latensi, process) => {
return `
╭━━ ⪩
▢ ❗️⃟ きιᥒf᥆ d᥆ b᥆tき⃟❗
▢ ╭═══⊷
▢ ⌁ 令 Prefix:「${prefix}」
▢ ⌁ 令 Nome:「${nameBot}」
▢ ⌁ 令 Ping:「${latensi.toFixed(4)}」
▢ ⌁ 令 Plataforma:「${process.platform}」
▢ ╰═══⊷
╰━━━ ⪨`
};

exports.infoStore = (archive) => {
 return `╭━━ ⪩
▢ ╭═══⊷
▢ ⌁ Erros registrados: *${archive.registerError.value.length}*
▢ ⌁ Grupos alugados: *${archive.groupDays.value.length}*
▢ ⌁ Grupos com prefix alterado: *${archive.changePrefix.value.length}*
▢ ╰═══⊷
╰━━━ ⪨`;
}

/*
▢ ⌁ Grupos registrados no store: *${archive.store.value.chats.filter(a => a.id.includes("@g.us")).length}*

▢ ⌁ Pessoas registrados no store: *${archive.store.value.chats.filter(a => a.id.includes("@s.whatsapp.net")).length}
*/

exports.search = (prefix, hr, me) => {
return `╭━━ ⪩
▢ ⚠︎ | Info
▢ ╭═══⊷
▢ ⌁ 令 Prefixo:「${prefix}」
▢ ⌁ 令 Hora: ${hr}
▢ ⌁ 令 Nome: ${me?.name || "-"}
▢ ╰═══⊷
▢
▢ 〘 Pᥱ᥉qᥙι᥉ᥲ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Ia「Nome」
▢ ⌁ 令 ${prefix}Live「Nome」
▢ ⌁ 令 ${prefix}Filme「Nome」
▢ ⌁ 令 ${prefix}Uptodown「Nome」
▢ ⌁ 令 ${prefix}Hentaistube「Nome」
▢ ⌁ 令 ${prefix}Googleimage「Nome」
▢ ⌁ 令 ${prefix}Mercadolivre「Nome」
▢ ╰═══⊷
╰━━━ ⪨`;
};

exports.groupStatus = (getGroupMessageTotal, from, participants, ghosts, idMembers, isAntiLink, isWelcome, isViewOnce, isAntiFake, isSimih) => {
return `╭━━ ⪩
▢ ⚠︎ Status
▢ ╭═══⊷
▢ ⌁ Mensagens: ${getGroupMessageTotal(from)}
▢ ⌁ Membros: ${participants.map((obj) => obj.id).length}
▢ ⌁ Membros Ativos: ${idMembers.length + 1}
▢ ⌁ Membros inativos: ${ghosts.length}
▢ ╰═══⊷
▢
▢ ⚠︎ Funções 
▢ ╭═══⊷
▢ ⌁ Simih: ${isSimih ? 'Ativo': 'Desativado'}
▢ ⌁ Anti link: ${isAntiLink ? 'Ativo': 'Desativado'}
▢ ⌁ Anti fake: ${isAntiFake ? 'Ativo': 'Desativado'}
▢ ⌁ View once: ${isViewOnce ? 'Ativo': 'Desativado'}
▢ ⌁ Bem vindo: ${isWelcome ? 'Ativo': 'Desativado'}
▢ ╰═══⊷
╰━━━ ⪨`;
};

exports.allOptions = (prefix, is) => {
 return `
╭━━ ⪩
▢ ⚠︎ | Info
▢ ╭═══⊷
▢ ⌁ 令 Prefixo:「${prefix}」
▢ ⌁ 令 Nome: ${is.nameBot}
▢ ╰═══⊷
▢
▢ 〘 d᥆ᥕᥒᥣ᥆ᥲd᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Play「Nome」 
▢ ⌁ 令 ${prefix}Playvid「Nome」 
▢ ⌁ 令 ${prefix}Audiomeme「Nome」 
▢ ⌁ 令 ${prefix}Ytmp3「Link」 
▢ ⌁ 令 ${prefix}Ytmp4「Link」 
▢ ⌁ 令 ${prefix}Xnxxplay「Link」 
▢ ⌁ 令 ${prefix}Xvideosplay「Link」 
▢ ⌁ 令 ${prefix}Twitter「Link」  
▢ ⌁ 令 ${prefix}Tiktok「Link」  
╰━━━ ⪨
▢
▢ 〘 ᥲd꧑ιᥒ/grᥙρ᥆᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Kick「Msg」
▢ ⌁ 令 ${prefix}Banir「@Tag」
▢ ⌁ 令 ${prefix}Promote「Msg」
▢ ⌁ 令 ${prefix}Promover「@Tag」
▢ ⌁ 令 ${prefix}Demote「Msg」
▢ ⌁ 令 ${prefix}Rebaixar「@Tag」
▢ ⌁ 令 ${prefix}Add「Msg」
▢ ⌁ 令 ${prefix}Reviver「Numero」
▢ ⌁ 令 ${prefix}Abrir
▢ ⌁ 令 ${prefix}Group
▢ ⌁ 令 ${prefix}Fechar
▢ ⌁ 令 ${prefix}Ativos
▢ ⌁ 令 ${prefix}Inativos
▢ ⌁ 令 ${prefix}Banghost
▢ ⌁ 令 ${prefix}Notifyghosts
▢ ⌁ 令 ${prefix}Simih「On/Off」
▢ ⌁ 令 ${prefix}Antilink「On/Off」
▢ ⌁ 令 ${prefix}Antifake「On/Off」
▢ ⌁ 令 ${prefix}Welcome「On/Off」
▢ ⌁ 令 ${prefix}Viewonce「On/Off」
▢ ⌁ 令 ${prefix}Addwelcome「Text」
▢ ⌁ 令 ${prefix}exitwelcome「Text」
▢ ⌁ 令 ${prefix}Addlistnegra「@Tag」
▢ ⌁ 令 ${prefix}Remlistnegra「@Tag」
▢ ⌁ 令 ${prefix}Link
▢ ⌁ 令 ${prefix}Listadm
▢ ⌁ 令 ${prefix}Perfil
▢ ⌁ 令 ${prefix}Listnegra
▢ ⌁ 令 ${prefix}Addafk「Texto」
▢ ⌁ 令 ${prefix}Perfil「@Tag」
▢ ⌁ 令 ${prefix}Tagall「Texto」
▢ ⌁ 令 ${prefix}Setprefix「Text」
▢ ⌁ 令 ${prefix}Hidetag「Texto」
▢ ⌁ 令 ${prefix}Setdesc「Texto」
▢ ⌁ 令 ${prefix}Setnome「Texto」
▢ ╰═══⊷
▢
▢ 〘 ᥣ᥆g᥆᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Gay「Foto」
▢ ⌁ 令 ${prefix}Rip「Foto」
▢ ⌁ 令 ${prefix}Trash「Foto」
▢ ⌁ 令 ${prefix}Poutine「Foto」
▢ ⌁ 令 ${prefix}Beautiful「Foto」
▢ ⌁ 令 ${prefix}Delete「Foto」
▢ ⌁ 令 ${prefix}Bobross「Foto」
▢ ⌁ 令 ${prefix}Hitler「Foto」
▢ ⌁ 令 ${prefix}Notpoutine「Foto」
▢ ⌁ 令 ${prefix}Wasted「Foto」
▢ ⌁ 令 ${prefix}Komunis「Foto」
▢ ⌁ 令 ${prefix}Triggered「Foto」
▢ ⌁ 令 ${prefix}Bolsonaro「Foto」
▢ ⌁ 令 ${prefix}Cinza「Foto」
▢ ⌁ 令 ${prefix}Embacado「Foto」
▢ ⌁ 令 ${prefix}Invert「Foto」
▢ ⌁ 令 ${prefix}Facepalm「Foto」
▢ ⌁ 令 ${prefix}Tumulo「Foto」
▢ ⌁ 令 ${prefix}Preso「Foto」
▢ ⌁ 令 ${prefix}Wanted「Foto」
▢ ⌁ 令 ${prefix}Rotate「Foto」
▢ ⌁ 令 ${prefix}Patrick「Foto」
▢ ⌁ 令 ${prefix}Sepia「Foto」
▢ ⌁ 令 ${prefix}Hacker「Foto」
▢ ⌁ 令 ${prefix}Hacker2「Foto」
▢ ⌁ 令 ${prefix}Lava「Texto」
▢ ⌁ 令 ${prefix}Berry「Texto」
▢ ⌁ 令 ${prefix}Toxic「Texto」
▢ ⌁ 令 ${prefix}Snow「Texto」
▢ ⌁ 令 ${prefix}Blood「Texto」
▢ ⌁ 令 ${prefix}3dbox「Texto」
▢ ⌁ 令 ${prefix}Matrix「Texto」
▢ ⌁ 令 ${prefix}3dglue「Texto」
▢ ⌁ 令 ${prefix}Metallic「Texto」
▢ ⌁ 令 ${prefix}Thunder「Texto」
▢ ⌁ 令 ${prefix}Artpaper「Texto」
▢ ⌁ 令 ${prefix}Thunder2「Texto」
▢ ⌁ 令 ${prefix}Neonlight「Texto」
▢ ⌁ 令 ${prefix}Neonlight「Texto」
▢ ⌁ 令 ${prefix}1917style「Texto」
▢ ⌁ 令 ${prefix}Chocolate「Texto」
▢ ⌁ 令 ${prefix}Black-pink「Texto」
▢ ⌁ 令 ${prefix}Christmas「Texto」
▢ ⌁ 令 ${prefix}Embossed「Texto」
▢ ⌁ 令 ${prefix}Luxurygold「Texto」
▢ ⌁ 令 ${prefix}Drop-water「Texto」
▢ ⌁ 令 ${prefix}Magmahot「Texto」
▢ ⌁ 令 ${prefix}3d-gradient「Texto」
▢ ⌁ 令 ${prefix}Harrypotter「Texto」
▢ ⌁ 令 ${prefix}Sandwriting「Texto」
▢ ⌁ 令 ${prefix}Greenhorror「Texto」
▢ ⌁ 令 ${prefix}Horrorblood「Texto」
▢ ⌁ 令 ${prefix}Bearmascot「Texto」
▢ ⌁ 令 ${prefix}Transformer「Texto」
▢ ⌁ 令 ${prefix}Sandsummer「Texto」
▢ ⌁ 令 ${prefix}Realisticcloud「Texto」
▢ ⌁ 令 ${prefix}Xmascards3d「Texto」
▢ ⌁ 令 ${prefix}Futuristicneon「Texto」
▢ ⌁ 令 ${prefix}Sciencefiction「Texto」
▢ ⌁ 令 ${prefix}Natural-leaves「Texto」
▢ ⌁ 令 ${prefix}Summerysand「Texto」
▢ ⌁ 令 ${prefix}Sandengraved「Texto」
▢ ⌁ 令 ${prefix}Metaldarkgold「Texto」
▢ ⌁ 令 ${prefix}Captainamerica「Texto」
▢ ⌁ 令 ${prefix}Neondevilwings「Texto」
▢ ⌁ 令 ${prefix}Impressiveglitch「Texto」
▢ ⌁ 令 ${prefix}Wonderfulgraffiti「Texto」
▢ ╰═══⊷
▢
▢ 〘 j᥆g᥆᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Cash
▢ ⌁ 令 ${prefix}Rankcash
▢ ⌁ 令 ${prefix}Roubar「@Tag」
▢ ⌁ 令 ${prefix}Usercash「@Tag」
▢ ⌁ 令 ${prefix}Transferir「@Tag|Quantia」
▢ ⌁ 令 ${prefix}Dado
▢ ⌁ 令 ${prefix}Slot
▢ ⌁ 令 ${prefix}Roleta
▢ ⌁ 令 ${prefix}Tagme
▢ ⌁ 令 ${prefix}Cassino
▢ ⌁ 令 ${prefix}Caracoroa
▢ ⌁ 令 ${prefix}roletarussa
▢ ⌁ 令 ${prefix}Sn「Text」
▢ ⌁ 令 ${prefix}Nick「Texto」
▢ ⌁ 令 ${prefix}Corno「@Tag」
▢ ⌁ 令 ${prefix}Amongus「@Tag」
▢ ⌁ 令 ${prefix}Feio
▢ ⌁ 令 ${prefix}Lixo
▢ ⌁ 令 ${prefix}Gado
▢ ⌁ 令 ${prefix}Burro
▢ ⌁ 令 ${prefix}Gordo
▢ ⌁ 令 ${prefix}Pobre
▢ ⌁ 令 ${prefix}Bonito
▢ ⌁ 令 ${prefix}Macaco
▢ ⌁ 令 ${prefix}Gostoso
▢ ╰═══⊷
▢
▢ 〘 ᥲᥒι꧑ᥱ᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Akame
▢ ⌁ 令 ${prefix}Tatsumi
▢ ⌁ 令 ${prefix}Najenda
▢ ⌁ 令 ${prefix}Kurome
▢ ⌁ 令 ${prefix}Bulat
▢ ⌁ 令 ${prefix}Leone
▢ ⌁ 令 ${prefix}Mine
▢ ⌁ 令 ${prefix}Chelsea
▢ ⌁ 令 ${prefix}Loli
▢ ⌁ 令 ${prefix}Zoro
▢ ⌁ 令 ${prefix}Luffy
▢ ⌁ 令 ${prefix}Oden
▢ ⌁ 令 ${prefix}Nami
▢ ⌁ 令 ${prefix}Jinbe
▢ ⌁ 令 ${prefix}Kaido
▢ ⌁ 令 ${prefix}Robin
▢ ⌁ 令 ${prefix}Usopp
▢ ⌁ 令 ${prefix}Franky
▢ ⌁ 令 ${prefix}Yamato
▢ ⌁ 令 ${prefix}Esdeath
▢ ⌁ 令 ${prefix}Ero
▢ ⌁ 令 ${prefix}Yuri
▢ ⌁ 令 ${prefix}Ass
▢ ⌁ 令 ${prefix}Foot
▢ ⌁ 令 ${prefix}Orgy
▢ ⌁ 令 ${prefix}Jahy
▢ ⌁ 令 ${prefix}Bdsm
▢ ⌁ 令 ${prefix}Pussy
▢ ⌁ 令 ${prefix}Hentai
▢ ⌁ 令 ${prefix}Thighs
▢ ⌁ 令 ${prefix}Panties
▢ ⌁ 令 ${prefix}Ahegao
▢ ⌁ 令 ${prefix}Blowjob
▢ ⌁ 令 ${prefix}Cuckold
▢ ⌁ 令 ${prefix}Nsfwloli
▢ ⌁ 令 ${prefix}Femdom
▢ ⌁ 令 ${prefix}Sfwneko
▢ ⌁ 令 ${prefix}Tentacles
▢ ⌁ 令 ${prefix}Nsfwneko
▢ ⌁ 令 ${prefix}Masturbation
▢ ╰═══⊷
▢
▢ 〘 fιgᥙrιᥒhᥲ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}F「Foto/Gif」
▢ ⌁ 令 ${prefix}stickertake「Nome|Autor」
▢ ⌁ 令 ${prefix}Attp「Texto」
▢ ⌁ 令 ${prefix}Attp1「Texto」
▢ ⌁ 令 ${prefix}Attp2「Texto」
▢ ⌁ 令 ${prefix}Attp3「Texto」
▢ ⌁ 令 ${prefix}Attp4「Texto」
▢ ⌁ 令 ${prefix}Attp5「Texto」
▢ ⌁ 令 ${prefix}Attp6「Texto」
▢ ⌁ 令 ${prefix}Togif「Sticker」
▢ ⌁ 令 ${prefix}Toimg「Sticker」
▢ ⌁ 令 ${prefix}Tourl「Imagem」
▢ ⌁ 令 ${prefix}Emojimix「😭+😘」
▢ ⌁ 令 ${prefix}Rename「Sticker」
▢ ╰━━━ ⪨
▢
▢ 〘 ᥴ᥆ᥒ᥉ᥙᥣtᥲ᥉ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Cpf
▢ ⌁ 令 ${prefix}Cpf1
▢ ⌁ 令 ${prefix}Cpf2
▢ ⌁ 令 ${prefix}Tell
▢ ⌁ 令 ${prefix}Cnpj
▢ ⌁ 令 ${prefix}Nome
▢ ⌁ 令 ${prefix}Placa
▢ ⌁ 令 ${prefix}Ip「Codigo」
▢ ⌁ 令 ${prefix}Cep「Codigo」
▢ ⌁ 令 ${prefix}DDD「Codigo」
▢ ⌁ 令 ${prefix}Banco「Codigo」
▢ ╰━━━ ⪨
▢
▢ 〘 Pᥱ᥉qᥙι᥉ᥲ 〙
▢ ╭═══⊷
▢ ⌁ 令 ${prefix}Ia「Nome」
▢ ⌁ 令 ${prefix}Live「Nome」
▢ ⌁ 令 ${prefix}Filme「Nome」
▢ ⌁ 令 ${prefix}Uptodown「Nome」
▢ ⌁ 令 ${prefix}Hentaistube「Nome」
▢ ⌁ 令 ${prefix}Googleimage「Nome」
▢ ⌁ 令 ${prefix}Mercadolivre「Nome」
▢ ╰═══⊷
╰━━━ ⪨`;
}