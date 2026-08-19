"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import styles from "./hero.module.css";

/**
 * Hero backdrop.
 *
 * The clip is a boomerang: the shot runs forward, then back to where it
 * started, so the file loops on itself with no cut. Measured on the source, the
 * jump from last frame to first was ten times a normal frame step; after the
 * boomerang it is 1.3 times — i.e. indistinguishable from ordinary motion. That
 * removes the need for any cross-fade, second decoder or opacity animation,
 * which is what was costing frames on the phone.
 *
 * Autoplay is allowed for a muted inline video but never guaranteed — iOS Low
 * Power Mode, Android Data Saver and a backgrounded tab all refuse. The poster
 * paints immediately as a background, and playback is retried on canplay, on
 * tab return, and on the visitor's first touch, which supplies the user gesture
 * those browsers are waiting for.
 *
 * Phones get a 854px cut of the same clip at a quarter of the weight.
 *
 * Data Saver, 2G and reduced motion stay on the poster and never fetch a video.
 */

const DESKTOP_FROM = "(min-width: 768px)";

export function HeroVideo({
  src,
  srcMobile,
  poster,
  posterMobile,
}: {
  src: string;
  srcMobile: string;
  poster: string;
  posterMobile: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playVideo, setPlayVideo] = useState(false);

  // Decided on the client, so what gets server-rendered is the poster.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    // On 2G the clip would arrive long after the visitor has scrolled past.
    const tooSlow = /(^|-)2g$/.test(connection?.effectiveType ?? "");

    if (!reduce && !connection?.saveData && !tooSlow) setPlayVideo(true);
  }, []);

  const resume = useCallback(() => {
    void ref.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (!playVideo) return;
    const video = ref.current;
    if (!video) return;

    if (video.readyState >= 3) resume();
    video.addEventListener("canplay", resume);
    document.addEventListener("visibilitychange", resume);
    window.addEventListener("pointerdown", resume);

    return () => {
      video.removeEventListener("canplay", resume);
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener("pointerdown", resume);
    };
  }, [playVideo, resume]);

  return (
    <div aria-hidden="true" className={cn(styles.plate, "absolute inset-0")}>
      {/* Poster as a picture, so the right weight loads per screen and it is
          on screen before the video is ready. */}
      <picture>
        <source media={DESKTOP_FROM} srcSet={poster} />
        <img src={posterMobile} alt="" className={styles.layer} />
      </picture>

      {playVideo ? (
        <video
          ref={ref}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          tabIndex={-1}
          disablePictureInPicture
          aria-hidden="true"
          className={styles.layer}
        >
          <source media={DESKTOP_FROM} src={src} type="video/mp4" />
          <source src={srcMobile} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
