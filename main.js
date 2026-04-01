const phoneNumber = "5562999999999";
const leadForm = document.querySelector("#lead-form");
const formNote = document.querySelector("#form-note");

const openWhatsAppLead = (name, phone) => {
  const message = [
    "Oi! Quero entrar para a lista VIP do Empório Lá Biere.",
    `Nome: ${name}`,
    `WhatsApp: ${phone}`,
    "Quero receber promoções, eventos e também fazer minha reserva."
  ].join("\n");

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(leadForm);
  const name = String(formData.get("name") || "").trim();
  const phone = String(formData.get("phone") || "").trim();

  if (!name || !phone) {
    formNote.textContent = "Preencha nome e WhatsApp para continuar.";
    return;
  }

  formNote.textContent = "Abrindo sua mensagem no WhatsApp...";
  openWhatsAppLead(name, phone);
  leadForm.reset();
});
