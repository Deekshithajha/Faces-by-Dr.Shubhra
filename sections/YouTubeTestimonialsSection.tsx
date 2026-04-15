import Image from "next/image";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { youtubeTestimonials } from "@/data/youtubeTestimonials";
import styles from "@/sections/YouTubeTestimonialsSection.module.css";

export function YouTubeTestimonialsSection() {
  const videos = youtubeTestimonials.map((item) => ({
    ...item,
    thumbnail: `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`,
    youtubeUrl: `https://www.youtube.com/watch?v=${item.videoId}`,
  }));
  const loopedVideos = [...videos, ...videos];

  return (
    <section className="py-20 md:py-24 lg:py-28">
      <Container>
        <SectionHeading
          label="What Our Clients Say"
          title="Real patient stories from our YouTube channel"
          description="Watch first-hand experiences from patients who trusted Dr. Shubhra Goel and FACES for their treatment journey."
          align="center"
        />

        <div className={styles.scene}>
          <div className={styles.track}>
            {loopedVideos.map((video, index) => (
              <a
                key={`${video.id}-${index}`}
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className={styles.card}
                aria-label={`Watch what our clients say: ${video.title}`}
              >
                <div className={styles.frame}>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover"
                    sizes="288px"
                  />
                  <div className={styles.overlay} />
                  <span className={styles.play}>
                    <span className="ml-0.5">▶</span>
                  </span>
                </div>

                <div className={styles.body}>
                  <h3 className={styles.title}>{video.title}</h3>
                  <p className={styles.meta}>{video.patientName}</p>
                  <span className={styles.tag}>{video.treatment}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
