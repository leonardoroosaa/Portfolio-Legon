"use client";
import { useState } from "react";
import { services } from "@/data/services";
export function ContactForm({
  initialService = "",
}: {
  initialService?: string;
}) {
  const [checked, setChecked] = useState(false);
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setChecked(true);
      }}
    >
      <div className="form-notice" id="form-notice">
        <strong>Formulário em preparação</strong>
        <p>
          O envio ainda não está integrado. Pode testar os campos, mas nenhum
          dado será enviado ou guardado. Para pedir orçamento, utilize o
          telefone.
        </p>
      </div>
      <div className="form-grid">
        <label>
          Nome *
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            placeholder="O seu nome"
          />
        </label>
        <label>
          Empresa
          <input
            name="company"
            autoComplete="organization"
            placeholder="Nome da empresa (opcional)"
          />
        </label>
        <label>
          E-mail *
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="O seu e-mail"
          />
        </label>
        <label>
          Telefone
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            pattern="[+0-9 ()-]{6,20}"
            placeholder="Contacto (opcional)"
          />
        </label>
        <label>
          Tipo de serviço *
          <select name="service" required defaultValue={initialService}>
            <option value="" disabled>
              Selecione uma especialidade
            </option>
            {services.map((s) => (
              <option value={s.slug} key={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="outro">Outro / A definir</option>
          </select>
        </label>
        <label>
          Localização da obra *
          <input name="location" required placeholder="Localidade e país" />
        </label>
      </div>
      <label>
        Mensagem *
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="Conte-nos o que pretende executar."
        />
      </label>
      <label className="consent">
        <input name="consent" type="checkbox" required />
        <span>
          Compreendo que este formulário é uma demonstração local e que os dados
          não são enviados. O consentimento para tratamento de dados será
          definido antes da ativação do envio.
        </span>
      </label>
      <button
        type="submit"
        className="button secondary"
        aria-describedby="form-notice"
      >
        Validar campos · sem envio
      </button>
      {checked && (
        <p role="status" className="validation-message">
          Campos validados localmente. A mensagem não foi enviada. Contacte a
          LEGON por telefone.
        </p>
      )}
    </form>
  );
}
