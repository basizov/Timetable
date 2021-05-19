import React from 'react';

interface IProps {
  className?: string;
  width?: number;
  height?: number;
  spanWidth?: number;
  spanHeight?: number;
  backgroundColor?: string;
  count?: number;
  startAnimationDelay?: number;
}

const Loading: React.FC<IProps> = ({
  className = '',
  width = 25,
  height = 25,
  spanWidth = 5,
  spanHeight = 5,
  backgroundColor="#003554",
  count = 12,
  startAnimationDelay = -1
}) => {
  const spans = Array.from(Array(count).keys())

  return (
    <div
      className={`loading ${className}`}
      style={{
        width: width,
        height: height,
      }}>
        {spans.map((key) => (
          <span key={key}>
            <style>
              {`.loading span::before {
                  width: ${spanWidth}px;
                  height: ${spanHeight}px;
                  background: ${backgroundColor};
                }
                .loading span:nth-child(${key + 1}) {
                  animation-delay: ${startAnimationDelay - (startAnimationDelay / count * key)}s;
                  transform: rotate(${360 / count * (key + 1)}deg)
                }
                .loading {
                  transform: translate(-50%, -50%)
                }`}
            </style>
          </span>
        ))}
    </div>
  );
};

export default  Loading;