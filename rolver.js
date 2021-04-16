const member = message.mentions.members.first();

        if (!member) {
            return message.channel.send('Lütfen bir kişi belirtin!')
        }

        const role = message.mentions.roles.first();

        if (member.roles.cache.has(role)) {
            return message.channel.send('Belirttiğiniz rol kişide zaten bulunuyor!')
        }

        if (!role) {
            return message.channel.send('Lütfen bir rol belirtin!')
        }

        member.roles.add(role)
        message.channel.send(`(${member} & \`${member.id}\`) adlı kişiye başarıyla rolü verildi!`)
