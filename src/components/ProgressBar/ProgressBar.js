import React from "react";

function ProgressBar({ progress, total, styles }) {
  const [width, setWidth] = React.useState(0);
  const progressRef = React.useRef();

  React.useEffect(() => {
    const updateWidth = () => {
      if (progressRef.current) {
        const styles = window.getComputedStyle(progressRef.current);
        setWidth(styles.maxWidth);
      }
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const widthNumber = parseFloat(width);

  const progressWidth = (progress / total) * widthNumber;

  return (
    <div className={styles.total}>
      <div
        className={styles.progress}
        ref={progressRef}
        style={{ width: `${progressWidth}px` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
