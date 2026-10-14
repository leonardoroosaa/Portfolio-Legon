import Image from "next/image";
import type { VisualAsset } from "@/data/assets";
export function Visual({
  asset,
  className = "",
  priority = false,
}: {
  asset: VisualAsset;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`visual ${className}`}>
      {asset.src ? (
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          priority={priority}
        />
      ) : (
        <>
          <div
            className={`architecture ${asset.variant || "panels"}`}
            aria-hidden="true"
          >
            <i />
            <i />
            <i />
            <i />
            <i />
            <div className="drawing-line" />
          </div>
          <span className="placeholder-label">
            COMPOSIÇÃO ILUSTRATIVA · FOTOGRAFIA PENDENTE
          </span>
        </>
      )}
      <span className="visual-caption">{asset.caption}</span>
    </div>
  );
}
