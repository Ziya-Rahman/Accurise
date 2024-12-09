const modal = document.getElementById('service-modal');
const modalBody = document.getElementById('modal-body');

// Service descriptions for modal
const services = [
    {
        title: 'Accreditation Services',
        content: 'We provide NABH accreditation for hospitals, NABL accreditation for laboratories, and ISO certifications.'
    },
    {
        title: 'Consultancy Services',
        content: 'Our consultancy covers hospital planning, green initiatives, power audits, and installation services.'
    },
    {
        title: 'Human Resource Management',
        content: 'We specialize in healthcare recruitment, employee training, and satisfaction surveys.'
    },
    {
        title: 'Marketing and Branding',
        content: 'We provide marketing brochures, signboards, uniforms, and branding for healthcare organizations.'
    }
];

// Open Modal
function openModal(index) {
    const service = services[index - 1];
    modalBody.innerHTML = `
        <h2>${service.title}</h2>
        <p>${service.content}</p>
    `;
    modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
    modal.style.display = 'none';
}
