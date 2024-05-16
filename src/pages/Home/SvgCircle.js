import React, { useState } from "react";
import { useSocket } from "../../shared/socket/SocketContext";

const SvgCircle = () => {
  const socket = useSocket();
  const [angle, setAngle] = useState(360);
  const [time, setTime] = useState();
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    const d = [
      "M",
      x,
      y,
      "L",
      start.x,
      start.y,
      "A",
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
      "Z",
    ].join(" ");

    return d;
  };

  const arcPath = describeArc(50, 50, 50, 0, angle);

  React.useEffect(() => {
    const handleOneMin = (onemin) => {
      // setOne_min_time(onemin);
      setAngle(onemin === 0 ? 360 : (onemin + 1) * 6);
      setTime(onemin);
    };
    socket.on("onemin", handleOneMin);
    return () => {
      socket.off("onemin", handleOneMin);
    };
  }, []);

  return (
    <div className="!w-full !h-full !flex !justify-center !items-center transform rotate-90">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          d={arcPath}
          fill={
            time + 1 <= 30 && time + 1 >= 10
              ? "yellow"
              : time + 1 <= 10
              ? "red"
              : "green"
          }
          stroke="black"
          strokeWidth="5"
        />
      </svg>
    </div>
  );
};

export default SvgCircle;
