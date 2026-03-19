"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

import styles from "@/components/EducationCylinder.module.css";

type EducationItem = {
  stage: string;
  institution: string;
  distinction: string;
  imageUrl: string;
};

type PanelStyle = CSSProperties & {
  "--panel-index": number;
  "--total-panels": number;
};

interface EducationCylinderProps {
  items: EducationItem[];
}

export function EducationCylinder({ items }: EducationCylinderProps) {
  return (
    <div className={styles.scene} aria-label="Educational excellence rotating 3D carousel">
      <div className={styles.cylinder}>
        {items.map((item, index) => {
          const panelStyle: PanelStyle = {
            "--panel-index": index,
            "--total-panels": items.length,
          };

          return (
            <article key={`${item.stage}-${item.institution}`} className={styles.panel} style={panelStyle}>
              <div className={styles.card}>
                <div className={styles.logoWrap}>
                  <Image
                    src={item.imageUrl}
                    alt={`${item.institution} logo`}
                    fill
                    className="object-contain p-2"
                    sizes="320px"
                  />
                </div>
                <div className={styles.content}>
                  <p className={styles.stage}>{item.stage}</p>
                  <h3 className={styles.institution}>{item.institution}</h3>
                  <p className={styles.distinction}>{item.distinction}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
