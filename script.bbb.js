function showMessage(response) {
    const userMessage = document.getElementById('userMessage');
    
    if (response === 'Yes') {
        userMessage.innerHTML = "Topper vul gelijk even deze datumprikker in!";
    } else if (response === 'No') {
        userMessage.innerHTML = "Verkeerde keuze swa, probeer het nog een keer.";
    }
}
