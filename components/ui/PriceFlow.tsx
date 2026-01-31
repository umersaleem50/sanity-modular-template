import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface PriceFlowProps {
  value: number;
  className?: string;
}

function PriceFlow({ value, className = "" }: PriceFlowProps) {
  const preValueRef = useRef(value);
  const [prevValue, setPrevValue] = useState(value);

  const prevTensRef = useRef<HTMLSpanElement>(null);
  const nextTensRef = useRef<HTMLSpanElement>(null);
  const prevOnesRef = useRef<HTMLSpanElement>(null);
  const nextOnesRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const previous = preValueRef.current;
    if (value !== prevValue) {
      const prevTens = prevTensRef.current;
      const nextTens = nextTensRef.current;
      const prevOnes = prevOnesRef.current;
      const nextOnes = nextOnesRef.current;

      if (
        prevTens &&
        nextTens &&
        Math.floor(value / 10) !== Math.floor(prevValue / 10)
      ) {
        if (Math.floor(value / 10) > Math.floor(prevValue / 10)) {
          prevTens.classList.add("slide-out-up");
          nextTens.classList.add("slide-in-up");
        } else {
          prevTens.classList.add("slide-out-down");
          nextTens.classList.add("slide-in-down");
        }

        const handleTensAnimationEnd = () => {
          prevTens.classList.remove("slide-out-up", "slide-out-down");
          nextTens.classList.remove("slide-in-up", "slide-in-down");
          prevTens.removeEventListener("animationend", handleTensAnimationEnd);
        };

        prevTens.addEventListener("animationend", handleTensAnimationEnd);
      }

      if (prevOnes && nextOnes && value % 10 !== prevValue % 10) {
        setTimeout(() => {
          if (value % 10 > prevValue % 10) {
            prevOnes.classList.add("slide-out-up");
            nextOnes.classList.add("slide-in-up");
          } else {
            prevOnes.classList.add("slide-out-down");
            nextOnes.classList.add("slide-in-down");
          }

          const handleOnesAnimationEnd = () => {
            prevOnes.classList.remove("slide-out-up", "slide-out-down");
            nextOnes.classList.remove("slide-in-up", "slide-in-down");
            prevOnes.removeEventListener(
              "animationend",
              handleOnesAnimationEnd,
            );
          };

          prevOnes.addEventListener("animationend", handleOnesAnimationEnd);
        }, 50);
      }

      preValueRef.current = value;
      setPrevValue(previous);
    }
  }, [value, prevValue]);
  const formatValue = (val: number) => val.toString().padStart(2, "0");
  const prevFormatted = formatValue(prevValue);
  const currentFormatted = formatValue(value);

  return (
    <span className={cn("relative inline-flex items-center", className)}>
      <span className="relative inline-block overflow-hidden">
        <span
          className="absolute inset-0 flex items-center justify-center"
          ref={prevTensRef}
          style={{ transform: "translateY(-100%)" }}
        >
          {prevFormatted[0]}
        </span>
        <span
          className="flex items-center justify-center"
          ref={nextTensRef}
          style={{ transform: "translateY(0%)" }}
        >
          {currentFormatted[0]}
        </span>
      </span>
      <span className="relative inline-block overflow-hidden">
        <span
          className="absolute inset-0 flex items-center justify-center"
          ref={prevOnesRef}
          style={{ transform: "translateY(-100%)" }}
        >
          {prevFormatted[1]}
        </span>
        <span
          className="flex items-center justify-center"
          ref={nextOnesRef}
          style={{ transform: "translateY(0%)" }}
        >
          {currentFormatted[1]}
        </span>
      </span>
    </span>
  );
}

export default PriceFlow;
