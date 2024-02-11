import { Button } from '@mui/material';
import './Home.css';
import { useState } from 'react';
import Images from 'utils/Images';

const NoImages = [Images.youSure, Images.sadBear];
const NoText = ['Are you sure?', 'Why not?'];
const YesButtonHeights = ['auto', 100, 150, 200, 300, 500, 750, 1000];
const YesFontHeights = [
  '1rem',
  '1.5rem',
  '2rem',
  '3rem',
  '5rem',
  '7.5rem',
  '10rem',
  '15rem'
];

function Home() {
  const [status, setStatus] = useState<'yes' | 'no' | null>(null);
  const [clickCount, setClickCount] = useState({
    yes: 0,
    no: 0
  });

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      {!status && (
        <img
          alt="Sending Love"
          src={Images.sendingLove}
          className="w-[300px]"
        />
      )}
      {status === 'no' && (
        <>
          <img
            alt="No Love"
            src={
              NoImages[
                clickCount.no < NoImages.length
                  ? clickCount.no
                  : NoImages.length - 1
              ]
            }
            className="h-[200px]"
          />
          <p className="mb-[5px] mt-[10px] font-[ValentineCute] text-2xl tracking-wide">
            {
              NoText[
                clickCount.no < NoText.length
                  ? clickCount.no
                  : NoText.length - 1
              ]
            }
          </p>
        </>
      )}
      {status === 'yes' && (
        <>
          <img alt="Yes Love" src={Images.kaylaLove} className="h-[200px]" />
          <p className="mb-[20px] mt-[10px] font-[ValentineCute] text-2xl tracking-wide text-red-500">
            Love you too!
          </p>
        </>
      )}
      {status !== 'yes' && (
        <p className="mb-[20px] mt-[10px] font-[ValentineCute] text-2xl tracking-wide text-red-500">
          Will you be my Valentine?
        </p>
      )}
      <div className="flex w-full flex-col items-center justify-between gap-y-[15px] text-white">
        <Button
          className="rounded-[5px] bg-green-400 p-[15px] font-[ValentineCute] text-white"
          style={{
            height:
              clickCount.no >= 0
                ? YesButtonHeights[
                    clickCount.no < YesButtonHeights.length
                      ? clickCount.no
                      : YesButtonHeights.length - 1
                  ]
                : 'auto',
            width:
              clickCount.no >= 0
                ? YesButtonHeights[
                    clickCount.no < YesButtonHeights.length
                      ? clickCount.no
                      : YesButtonHeights.length - 1
                  ]
                : 'auto',
            fontSize:
              clickCount.no >= 0
                ? YesFontHeights[
                    clickCount.no < YesFontHeights.length
                      ? clickCount.no
                      : YesFontHeights.length - 1
                  ]
                : 'auto'
          }}
          onClick={() => {
            setStatus('yes');

            setClickCount((prev) => ({ ...prev, yes: prev.yes + 1 }));
          }}
        >
          YES
        </Button>

        <Button
          onClick={() => {
            setStatus('no');

            setClickCount((prev) => ({ ...prev, no: prev.no + 1 }));
          }}
          className="rounded-[5px] bg-red-300 p-[15px] font-[ValentineCute] text-white"
        >
          NO
        </Button>

        {/* <div id="wrapper"> */}
        {/*  <div id="pulsingheart" /> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Home;
