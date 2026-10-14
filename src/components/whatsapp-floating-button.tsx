import { company } from "@/data/company";
export function WhatsAppFloatingButton() {
  if (!company.whatsappUrl) return null;
  return (
    <a
      href={company.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp"
      aria-label="Contactar a LEGON pelo WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        width="28"
        height="28"
        aria-hidden="true"
      >
        <path d="M16 3a13 13 0 0 0-11.3 19.4L3 29l6.8-1.8A13 13 0 1 0 16 3Zm0 24a11 11 0 0 1-5.6-1.5l-.4-.2-4 1 1-3.9-.3-.5A11 11 0 1 1 16 27Zm6-8.2c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-1.8-.9-3-2-3.8-3.6-.2-.3 0-.5.1-.6l.7-.9c.1-.2.1-.4 0-.6l-1-2.4c-.2-.5-.4-.4-.7-.4h-.6c-.2 0-.5.1-.7.4-.8.8-1.2 1.7-1.1 2.8 0 1.6 1.2 3.2 1.4 3.4.2.2 2.4 3.7 5.8 5.1 2 .8 2.8.8 3.8.6.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.3.2-1.5-.1-.2-.3-.3-.6-.5Z" />
      </svg>
    </a>
  );
}
