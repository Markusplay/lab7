const formData = {
    email: "",
    message: ""
};

const form = document.querySelector('.feedback-form');

function saveDataToLocalStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadDataFromLocalStorage() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        Object.assign(formData, JSON.parse(savedData));
        form.email.value = formData.email;
        form.message.value = formData.message;
    }
}

function validateForm() {
    if (!formData.email.trim() || !formData.message.trim()) {
        alert('Fill please all fields');
        return false;
    }
    return true;
}

function submitForm() {
    if (validateForm()) {
        console.log(formData);
        localStorage.removeItem('feedback-form-state');
        form.reset();
        Object.keys(formData).forEach(key => {
            formData[key] = "";
        });
    }
}

form.addEventListener('input', e => {
    if (e.target.name === 'email' || e.target.name === 'message') {
        formData[e.target.name] = e.target.value.trim();
        saveDataToLocalStorage();
    }
});

form.addEventListener('submit', e => {
    e.preventDefault();
    submitForm();
});

window.addEventListener('load', loadDataFromLocalStorage);
