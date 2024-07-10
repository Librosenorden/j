import {HfInference} from '@huggingface/inference'

const inference = new HfInference("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");


// Create a text-generation pipeline


for await (const chunk of inference.chatCompletionStream({
	model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
	messages: [{ role: "user", content: "Puedes hablar español?" }],
	max_tokens: 5000,
})) {
	process.stdout.write(chunk.choices[0]?.delta?.content || "");
}

function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();
    var userSelect = document.getElementById("user-select");
    var user = userSelect.value;
    
    if (message) {
        var chatMessages = document.getElementById("chat-messages");
        
        // Crear un nuevo elemento de mensaje
        var messageElement = document.createElement("div");
        messageElement.className = "chat-message";
        messageElement.classList.add(user === "Usuario 1" ? "user1" : "user2");
        messageElement.innerText = user + ": " + message;
        
        // Agregar el mensaje a la lista de mensajes
        chatMessages.appendChild(messageElement);
        
        // Limpiar el campo de entrada
        messageInput.value = "";
        
        // Hacer scroll hacia el último mensaje
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

document.getElementById("message-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
