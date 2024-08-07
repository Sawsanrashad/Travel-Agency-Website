import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import styles from "./Accordion.module.css";

export default function Accordion({
  toggle,
  title,
  body,
  className,
  bodyNoPadding,
  activeClass,
  headerClass,
  activeHeaderClass,
  indicatorClass,
}) {

  const [accordionOpened, setaccordionOpened] = useState(false);
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(300);

  useLayoutEffect(() => {
    if (!contentRef) return;
    setContentHeight(contentRef?.current?.scrollHeight);
  }, [contentRef, contentRef?.current?.scrollHeight]);

  useEffect(() => {
    setaccordionOpened(false);
  }, [toggle]);

  return (
    <div
      className={`${styles.accordion__item} ${accordionOpened ? styles["accordion__item--opened"] : ""
        } ${className ? className : ""} ${accordionOpened && activeClass ? activeClass : ""
        }`}
    >
      <div
        className={`${styles.accordion__title} ${headerClass || ""} ${accordionOpened && activeHeaderClass ? activeHeaderClass : ""
          }`}
        onClick={() => {
          setaccordionOpened(!accordionOpened);
        }}
      >
        {title}
        <div
          className={`${styles.accordion__indicator} ${!accordionOpened ? styles["accordion__indicator--opened"] : ""
            } ${indicatorClass ? indicatorClass : ""} shrink-0`}
        >
          {accordionOpened ? <FaMinus /> : <FaPlus />}
        </div>
      </div>
      <div
        className={`flex flex-col gap-3 ${styles.accordion__body} ${!accordionOpened ? styles["accordion__body--closed"] : ""
          } ${bodyNoPadding ? styles["accordion__body--no-padding"] : ""}`}
        style={{ height: contentHeight }}
        ref={contentRef}
      >
        <div className={styles.accordion__body__content}>{body}</div>
      </div>
    </div>
  );
}
