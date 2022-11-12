       const copyTextEN = (text) => {
            const preTextEN = "I'm interested in your items, add me."
			const ouTextEN = " "
            const copyTextEN = document.createElement('textArea')

            copyTextEN.value = preTextEN
            document.body.appendChild(copyTextEN)

            copyTextEN.select()
            copyTextEN.setSelectionRange(0, 99999)

            document.execCommand('copy')
            document.body.removeChild(copyTextEN)
			
        }
		
		const copyTextCN = (text) => {
            const preTextCN = "我对你的东西感兴趣 加我吧"
			const ouTextCN = " "
            const copyTextCN = document.createElement('textArea')

            copyTextCN.value = preTextCN
            document.body.appendChild(copyTextCN)

            copyTextCN.select()
            copyTextCN.setSelectionRange(0, 99999)

            document.execCommand('copy')
            document.body.removeChild(copyTextCN)
			
        }
		
		const copyTextRU = (text) => {
            const preTextRU = "Мне интересны ваши вещи, добавляйте меня."
			const ouTextRU = " "
            const copyTextRU = document.createElement('textArea')

            copyTextRU.value = preTextRU
            document.body.appendChild(copyTextRU)

            copyTextRU.select()
            copyTextRU.setSelectionRange(0, 99999)

            document.execCommand('copy')
            document.body.removeChild(copyTextRU)
			
        }