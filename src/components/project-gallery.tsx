"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import type { VisualAsset } from "@/data/assets";
import { Visual } from "./visual";
export function ProjectGallery({ images }: { images: VisualAsset[] }) {
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const isOpen = active !== null;
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    const modal = dialog.current;
    const opener = trigger.current;
    modal?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal?.close();
      document.body.style.overflow = previous;
      opener?.focus();
    };
  }, [isOpen]);
  function step(amount: number) {
    setActive((i) =>
      i === null ? null : (i + amount + images.length) % images.length,
    );
  }
  return (
    <>
      <div className="gallery-grid">
        {images.map((image, i) => (
          <button
            key={i}
            className="gallery-trigger"
            onClick={(e) => {
              trigger.current = e.currentTarget;
              setActive(i);
            }}
            aria-label={`Ampliar imagem ${i + 1}: ${image.caption}`}
          >
            <Visual asset={image} />
            <span>
              <Maximize2 size={18} /> Ampliar{" "}
              {image.src ? "fotografia" : "composição provisória"}
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-labelledby="gallery-title"
        onCancel={() => setActive(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        <div className="lightbox-top">
          <p id="gallery-title">
            Galeria · {(active ?? 0) + 1} / {images.length}
          </p>
          <button onClick={() => setActive(null)} aria-label="Fechar galeria">
            <X />
          </button>
        </div>
        {active !== null && <Visual asset={images[active]} />}
        <div className="lightbox-controls">
          <button
            onClick={() => step(-1)}
            aria-label="Imagem anterior"
            disabled={images.length < 2}
          >
            <ChevronLeft />
          </button>
          <p>{active !== null && images[active].caption}</p>
          <button
            onClick={() => step(1)}
            aria-label="Imagem seguinte"
            disabled={images.length < 2}
          >
            <ChevronRight />
          </button>
        </div>
      </dialog>
    </>
  );
}
