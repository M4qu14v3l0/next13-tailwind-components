'use client'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef , useEffect } from "react";

export default function CanvasAnimation() {



  const canvasRef = useRef(null);

  const images = []; 
  const imageSeq = { frame: 1 };

  const frameCount = 300;
  const contextRef = useRef(null)
  useEffect(() => {
    
    const canvas = canvasRef.current;
    contextRef.current = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", handleResize);

  const loadImages = () => {

    console.log('loadImages')
    return new Promise((resolve, reject) => {
      let loadedCount = 0;

      const onImageLoad = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          resolve();
          console.log('resolve')
        }
      };

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = () => console.log("Image loaded successfully");
        img.onload = onImageLoad;
        img.src = files(i);
        images.push(img);
      }
    });
  };

  const setupCanvas = async () => {
    await loadImages();
    render();
  };

  setupCanvas();

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#page>#canvas",
      pin: true,
      // markers:true,
      scroller: `#principal`,
    //   set start end according to preference
      start: `top top`,
      end: `600% top`,
    });

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.10,
        trigger: "#page>#canvas",
        start: "top top",
        end: "600%",
        scroller: "#principal",
        markers: {
          startColor: 'pink',
          endColor: 'red'
        }
      },
      onUpdate: render,
    });

    images[1].onload = render;

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.killAll()
    };
    
  }, []);

  const handleResize = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  };

  const files = (index) => {
    const data = `/facepics/male0001.png
    /facepics/male0002.png
    /facepics/male0003.png
    /facepics/male0004.png
    /facepics/male0005.png
    /facepics/male0006.png
    /facepics/male0007.png
    /facepics/male0008.png
    /facepics/male0009.png
    /facepics/male0010.png
    /facepics/male0011.png
    /facepics/male0012.png
    /facepics/male0013.png
    /facepics/male0014.png
    /facepics/male0015.png
    /facepics/male0016.png
    /facepics/male0017.png
    /facepics/male0018.png
    /facepics/male0019.png
    /facepics/male0020.png
    /facepics/male0021.png
    /facepics/male0022.png
    /facepics/male0023.png
    /facepics/male0024.png
    /facepics/male0025.png
    /facepics/male0026.png
    /facepics/male0027.png
    /facepics/male0028.png
    /facepics/male0029.png
    /facepics/male0030.png
    /facepics/male0031.png
    /facepics/male0032.png
    /facepics/male0033.png
    /facepics/male0034.png
    /facepics/male0035.png
    /facepics/male0036.png
    /facepics/male0037.png
    /facepics/male0038.png
    /facepics/male0039.png
    /facepics/male0040.png
    /facepics/male0041.png
    /facepics/male0042.png
    /facepics/male0043.png
    /facepics/male0044.png
    /facepics/male0045.png
    /facepics/male0046.png
    /facepics/male0047.png
    /facepics/male0048.png
    /facepics/male0049.png
    /facepics/male0050.png
    /facepics/male0051.png
    /facepics/male0052.png
    /facepics/male0053.png
    /facepics/male0054.png
    /facepics/male0055.png
    /facepics/male0056.png
    /facepics/male0057.png
    /facepics/male0058.png
    /facepics/male0059.png
    /facepics/male0060.png
    /facepics/male0061.png
    /facepics/male0062.png
    /facepics/male0063.png
    /facepics/male0064.png
    /facepics/male0065.png
    /facepics/male0066.png
    /facepics/male0067.png
    /facepics/male0068.png
    /facepics/male0069.png
    /facepics/male0070.png
    /facepics/male0071.png
    /facepics/male0072.png
    /facepics/male0073.png
    /facepics/male0074.png
    /facepics/male0075.png
    /facepics/male0076.png
    /facepics/male0077.png
    /facepics/male0078.png
    /facepics/male0079.png
    /facepics/male0080.png
    /facepics/male0081.png
    /facepics/male0082.png
    /facepics/male0083.png
    /facepics/male0084.png
    /facepics/male0085.png
    /facepics/male0086.png
    /facepics/male0087.png
    /facepics/male0088.png
    /facepics/male0089.png
    /facepics/male0090.png
    /facepics/male0091.png
    /facepics/male0092.png
    /facepics/male0093.png
    /facepics/male0094.png
    /facepics/male0095.png
    /facepics/male0096.png
    /facepics/male0097.png
    /facepics/male0098.png
    /facepics/male0099.png
    /facepics/male0100.png
    /facepics/male0101.png
    /facepics/male0102.png
    /facepics/male0103.png
    /facepics/male0104.png
    /facepics/male0105.png
    /facepics/male0106.png
    /facepics/male0107.png
    /facepics/male0108.png
    /facepics/male0109.png
    /facepics/male0110.png
    /facepics/male0111.png
    /facepics/male0112.png
    /facepics/male0113.png
    /facepics/male0114.png
    /facepics/male0115.png
    /facepics/male0116.png
    /facepics/male0117.png
    /facepics/male0118.png
    /facepics/male0119.png
    /facepics/male0120.png
    /facepics/male0121.png
    /facepics/male0122.png
    /facepics/male0123.png
    /facepics/male0124.png
    /facepics/male0125.png
    /facepics/male0126.png
    /facepics/male0127.png
    /facepics/male0128.png
    /facepics/male0129.png
    /facepics/male0130.png
    /facepics/male0131.png
    /facepics/male0132.png
    /facepics/male0133.png
    /facepics/male0134.png
    /facepics/male0135.png
    /facepics/male0136.png
    /facepics/male0137.png
    /facepics/male0138.png
    /facepics/male0139.png
    /facepics/male0140.png
    /facepics/male0141.png
    /facepics/male0142.png
    /facepics/male0143.png
    /facepics/male0144.png
    /facepics/male0145.png
    /facepics/male0146.png
    /facepics/male0147.png
    /facepics/male0148.png
    /facepics/male0149.png
    /facepics/male0150.png
    /facepics/male0151.png
    /facepics/male0152.png
    /facepics/male0153.png
    /facepics/male0154.png
    /facepics/male0155.png
    /facepics/male0156.png
    /facepics/male0157.png
    /facepics/male0158.png
    /facepics/male0159.png
    /facepics/male0160.png
    /facepics/male0161.png
    /facepics/male0162.png
    /facepics/male0163.png
    /facepics/male0164.png
    /facepics/male0165.png
    /facepics/male0166.png
    /facepics/male0167.png
    /facepics/male0168.png
    /facepics/male0169.png
    /facepics/male0170.png
    /facepics/male0171.png
    /facepics/male0172.png
    /facepics/male0173.png
    /facepics/male0174.png
    /facepics/male0175.png
    /facepics/male0176.png
    /facepics/male0177.png
    /facepics/male0178.png
    /facepics/male0179.png
    /facepics/male0180.png
    /facepics/male0181.png
    /facepics/male0182.png
    /facepics/male0183.png
    /facepics/male0184.png
    /facepics/male0185.png
    /facepics/male0186.png
    /facepics/male0187.png
    /facepics/male0188.png
    /facepics/male0189.png
    /facepics/male0190.png
    /facepics/male0191.png
    /facepics/male0192.png
    /facepics/male0193.png
    /facepics/male0194.png
    /facepics/male0195.png
    /facepics/male0196.png
    /facepics/male0197.png
    /facepics/male0198.png
    /facepics/male0199.png
    /facepics/male0200.png
    /facepics/male0201.png
    /facepics/male0202.png
    /facepics/male0203.png
    /facepics/male0204.png
    /facepics/male0205.png
    /facepics/male0206.png
    /facepics/male0207.png
    /facepics/male0208.png
    /facepics/male0209.png
    /facepics/male0210.png
    /facepics/male0211.png
    /facepics/male0212.png
    /facepics/male0213.png
    /facepics/male0214.png
    /facepics/male0215.png
    /facepics/male0216.png
    /facepics/male0217.png
    /facepics/male0218.png
    /facepics/male0219.png
    /facepics/male0220.png
    /facepics/male0221.png
    /facepics/male0222.png
    /facepics/male0223.png
    /facepics/male0224.png
    /facepics/male0225.png
    /facepics/male0226.png
    /facepics/male0227.png
    /facepics/male0228.png
    /facepics/male0229.png
    /facepics/male0230.png
    /facepics/male0231.png
    /facepics/male0232.png
    /facepics/male0233.png
    /facepics/male0234.png
    /facepics/male0235.png
    /facepics/male0236.png
    /facepics/male0237.png
    /facepics/male0238.png
    /facepics/male0239.png
    /facepics/male0240.png
    /facepics/male0241.png
    /facepics/male0242.png
    /facepics/male0243.png
    /facepics/male0244.png
    /facepics/male0245.png
    /facepics/male0246.png
    /facepics/male0247.png
    /facepics/male0248.png
    /facepics/male0249.png
    /facepics/male0250.png
    /facepics/male0251.png
    /facepics/male0252.png
    /facepics/male0253.png
    /facepics/male0254.png
    /facepics/male0255.png
    /facepics/male0256.png
    /facepics/male0257.png
    /facepics/male0258.png
    /facepics/male0259.png
    /facepics/male0260.png
    /facepics/male0261.png
    /facepics/male0262.png
    /facepics/male0263.png
    /facepics/male0264.png
    /facepics/male0265.png
    /facepics/male0266.png
    /facepics/male0267.png
    /facepics/male0268.png
    /facepics/male0269.png
    /facepics/male0270.png
    /facepics/male0271.png
    /facepics/male0272.png
    /facepics/male0273.png
    /facepics/male0274.png
    /facepics/male0275.png
    /facepics/male0276.png
    /facepics/male0277.png
    /facepics/male0278.png
    /facepics/male0279.png
    /facepics/male0280.png
    /facepics/male0281.png
    /facepics/male0282.png
    /facepics/male0283.png
    /facepics/male0284.png
    /facepics/male0285.png
    /facepics/male0286.png
    /facepics/male0287.png
    /facepics/male0288.png
    /facepics/male0289.png
    /facepics/male0290.png
    /facepics/male0291.png
    /facepics/male0292.png
    /facepics/male0293.png
    /facepics/male0294.png
    /facepics/male0295.png
    /facepics/male0296.png
    /facepics/male0297.png
    /facepics/male0298.png
    /facepics/male0299.png
    /facepics/male0300.png`
    ;
    return data.split("\n")[index];
  };

  const render = () => {
    scaleImage(images[imageSeq.frame], contextRef.current);
  };

  const scaleImage = (img, ctx) => {
    const canvas = ctx.canvas;
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  };

  
  return <div id="page" className="relative h-[100vh] w-[100vw]"><canvas ref={canvasRef} id='canvas' className="relative z-30 max-h-[100vh] max-w-[100vw]"></canvas></div>;
};