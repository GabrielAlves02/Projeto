import imgLogo from "figma:asset/2426d286e3a3b69b0f41f01ce585d555fef496c5.png";
import img610680701184180899491901433055943093493467918N1 from "figma:asset/83e0f31466fca723701f67576942d2d9290d8996.png";
import img610680701184180899491901433055943093493467918N2 from "figma:asset/bab7717ad42eff676c47250b2942db346ab1fb89.png";
import img610680701184180899491901433055943093493467918N3 from "figma:asset/803333809a78a9815831bd98af467a71013c7210.png";
import img610680701184180899491901433055943093493467918N4 from "figma:asset/d7e4451c3fd5e9193ba4b51033ef4159a4e72c4e.png";
import img610680701184180899491901433055943093493467918N5 from "figma:asset/cf14d0de65c562d2d4c8bc5cd91b8250b915acab.png";
import imgWhatsAppImage20260202At09465712 from "figma:asset/ebd208048ea80395ccc59e8589a2f9f48a48b047.png";
import imgDesktop from "figma:asset/4e78fd365b851a32528e4d3d06060036a72e2be1.png";

function Desktop() {
  return <div className="absolute bg-black h-[720px] left-0 top-0 w-[1280px]" data-name="Desktop" />;
}

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[0_1.04%] items-center justify-center p-[10px] rounded-[333px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[333px]" />
      <p className="font-['Kaisei_Decol:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">Contato</p>
    </div>
  );
}

function Botao() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96px]" data-name="Botão">
      <div className="absolute bg-[#727045] border border-black border-solid inset-0 rounded-[333px]" />
      <Frame1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[126px] h-[80px] items-center justify-center left-[calc(50%-13.56px)] overflow-clip rounded-[100px] top-0 w-[2089.795px]">
      <div className="relative shrink-0 size-[37px]" data-name="logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[0.56%] max-w-none size-full top-[-0.93%]" src={imgLogo} />
        </div>
      </div>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[48px] whitespace-pre-wrap">Home</p>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[71px] whitespace-pre-wrap">Histórias</p>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[48px] whitespace-pre-wrap">Sobre</p>
      <Botao />
    </div>
  );
}

function Group13() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-13.56px)] top-0">
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[calc(50%-252.5px)] mt-[calc(50%-143.5px)] relative row-1">
      <div className="-translate-x-1/2 col-1 font-['Kaisei_Decol:Bold',sans-serif] h-[287px] leading-[normal] ml-[252.5px] mt-0 not-italic relative row-1 text-[14px] text-black text-center w-[505px] whitespace-pre-wrap">
        <p className="mb-0">
          Contratar o Junior foi, sem dúvida, um dos maiores acertos do nosso casamento. Desde o primeiro contato, ele se mostrou um profissional exemplar, mas foi na jornada que descobrimos seu verdadeiro diferencial. Ele esteve conosco em todos os momentos: viajou para nosso pré-wedding em Itaúnas, registrou a emoção do nosso casamento civil e brilhou no grande dia.
          <br aria-hidden="true" />
          <br aria-hidden="true" />O que mais nos encantou foi a forma como ele une técnica e humanidade. Sua educação e gentileza fizeram com que todos se sentissem confortáveis, e o resultado disso é visível em cada foto espontânea e cheia de vida. Recebemos muitos comentários dos convidados elogiando sua simpatia e seu jeito amoroso de trabalhar.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Fabiany & Aleks`}</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[35.56%_7.34%_30.69%_58.2%] items-center justify-center p-[10px]">
      <Group1 />
    </div>
  );
}

function Group12() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[496px] left-[calc(50%-292px)] top-[calc(50%+30px)] w-[372px]">
      <div className="-translate-x-1/2 absolute aspect-[548/731] bottom-0 left-1/2 top-0" data-name="610680701_18418089949190143_3055943093493467918_n 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N1} />
      </div>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N2} />
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N3} />
    </div>
  );
}

function Frame5() {
  return (
    <div className="-translate-x-1/2 absolute bg-black content-stretch flex items-center justify-center left-[calc(50%+0.5px)] opacity-40 px-[24px] py-[16px] rounded-[90px] top-[-60px]">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[90px]" />
      <p className="font-['Kaisei_Decol:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Conferir Ensaios</p>
    </div>
  );
}

function Desktop1() {
  return (
    <div className="absolute bg-white h-[720px] left-0 overflow-x-clip overflow-y-auto top-[2266px] w-[1280px]" data-name="Desktop">
      <Group13 />
      <Frame3 />
      <Group12 />
      <div className="-translate-x-1/2 absolute font-['Kaisei_Decol:Bold',sans-serif] h-[270px] leading-[normal] left-[640px] not-italic text-[100px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[-458px] w-[1280px] whitespace-pre-wrap">
        <p className="mb-0">{`Junior Brunow `}</p>
        <p className="mb-0">Fotógrafo</p>
        <p>&nbsp;</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[640px] text-[28px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[-150px]">
        {`Capturando histórias & eternizando sentimentos`}
        <br aria-hidden="true" />
        Casamentos diurnos e ensaios.
      </p>
      <Frame5 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute h-[496px] left-[760px] top-[142px] w-[372px]">
      <div className="-translate-y-1/2 absolute aspect-[548/731] left-0 right-0 top-[calc(50%-0.5px)]" data-name="610680701_18418089949190143_3055943093493467918_n 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N1} />
      </div>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N2} />
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N4} />
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[calc(50%-252.5px)] mt-[calc(50%-143.5px)] relative row-1">
      <div className="-translate-x-1/2 col-1 font-['Kaisei_Decol:Bold',sans-serif] h-[287px] leading-[normal] ml-[252.5px] mt-0 not-italic relative row-1 text-[14px] text-black text-center w-[505px] whitespace-pre-wrap">
        <p className="mb-0">
          Contratar o Junior foi, sem dúvida, um dos maiores acertos do nosso casamento. Desde o primeiro contato, ele se mostrou um profissional exemplar, mas foi na jornada que descobrimos seu verdadeiro diferencial. Ele esteve conosco em todos os momentos: viajou para nosso pré-wedding em Itaúnas, registrou a emoção do nosso casamento civil e brilhou no grande dia.
          <br aria-hidden="true" />
          <br aria-hidden="true" />O que mais nos encantou foi a forma como ele une técnica e humanidade. Sua educação e gentileza fizeram com que todos se sentissem confortáveis, e o resultado disso é visível em cada foto espontânea e cheia de vida. Recebemos muitos comentários dos convidados elogiando sua simpatia e seu jeito amoroso de trabalhar.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Fabiany & Aleks`}</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[35.56%_50.94%_30.69%_14.61%] items-center justify-center p-[10px]">
      <Group2 />
    </div>
  );
}

function Group5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[calc(50%-252.5px)] mt-[calc(50%-143.5px)] relative row-1">
      <div className="-translate-x-1/2 col-1 font-['Kaisei_Decol:Bold',sans-serif] h-[287px] leading-[normal] ml-[252.5px] mt-0 not-italic relative row-1 text-[14px] text-black text-center w-[505px] whitespace-pre-wrap">
        <p className="mb-0">
          Contratar o Junior foi, sem dúvida, um dos maiores acertos do nosso casamento. Desde o primeiro contato, ele se mostrou um profissional exemplar, mas foi na jornada que descobrimos seu verdadeiro diferencial. Ele esteve conosco em todos os momentos: viajou para nosso pré-wedding em Itaúnas, registrou a emoção do nosso casamento civil e brilhou no grande dia.
          <br aria-hidden="true" />
          <br aria-hidden="true" />O que mais nos encantou foi a forma como ele une técnica e humanidade. Sua educação e gentileza fizeram com que todos se sentissem confortáveis, e o resultado disso é visível em cada foto espontânea e cheia de vida. Recebemos muitos comentários dos convidados elogiando sua simpatia e seu jeito amoroso de trabalhar.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Fabiany & Aleks`}</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[35.56%_-90.31%_30.69%_155.86%] items-center justify-center p-[10px]">
      <Group4 />
    </div>
  );
}

function Group14() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[496px] left-[calc(50%+958px)] top-[calc(50%+30px)] w-[372px]">
      <div className="-translate-x-1/2 absolute aspect-[548/731] bottom-0 left-1/2 top-0" data-name="610680701_18418089949190143_3055943093493467918_n 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N1} />
      </div>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N2} />
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N3} />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[0_1.04%] items-center justify-center p-[10px] rounded-[333px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[333px]" />
      <p className="font-['Kaisei_Decol:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">Contato</p>
    </div>
  );
}

function Botao1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96px]" data-name="Botão">
      <div className="absolute bg-[#727045] border border-black border-solid inset-0 rounded-[333px]" />
      <Frame7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[126px] h-[80px] items-center justify-center left-[calc(50%-13.56px)] overflow-clip rounded-[100px] top-0 w-[2089.795px]">
      <div className="relative shrink-0 size-[37px]" data-name="logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[0.56%] max-w-none size-full top-[-0.93%]" src={imgLogo} />
        </div>
      </div>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[48px] whitespace-pre-wrap">Home</p>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[71px] whitespace-pre-wrap">Histórias</p>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[48px] whitespace-pre-wrap">Sobre</p>
      <Botao1 />
    </div>
  );
}

function Group15() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-13.56px)] top-0">
      <Frame2 />
    </div>
  );
}

function Desktop2() {
  return (
    <div className="absolute bg-white h-[720px] left-0 overflow-x-clip overflow-y-auto top-[3088px] w-[1280px]" data-name="Desktop">
      <Group10 />
      <Frame4 />
      <Frame6 />
      <Group14 />
      <Group15 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute h-[496px] left-[162px] top-[142px] w-[372px]">
      <div className="-translate-y-1/2 absolute aspect-[548/731] left-0 right-0 top-[calc(50%-0.5px)]" data-name="610680701_18418089949190143_3055943093493467918_n 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N1} />
      </div>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N2} />
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N5} />
    </div>
  );
}

function Group7() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[calc(50%-252.5px)] mt-[calc(50%-143.5px)] relative row-1">
      <div className="-translate-x-1/2 col-1 font-['Kaisei_Decol:Bold',sans-serif] h-[287px] leading-[normal] ml-[252.5px] mt-0 not-italic relative row-1 text-[14px] text-black text-center w-[505px] whitespace-pre-wrap">
        <p className="mb-0">
          Contratar o Junior foi, sem dúvida, um dos maiores acertos do nosso casamento. Desde o primeiro contato, ele se mostrou um profissional exemplar, mas foi na jornada que descobrimos seu verdadeiro diferencial. Ele esteve conosco em todos os momentos: viajou para nosso pré-wedding em Itaúnas, registrou a emoção do nosso casamento civil e brilhou no grande dia.
          <br aria-hidden="true" />
          <br aria-hidden="true" />O que mais nos encantou foi a forma como ele une técnica e humanidade. Sua educação e gentileza fizeram com que todos se sentissem confortáveis, e o resultado disso é visível em cada foto espontânea e cheia de vida. Recebemos muitos comentários dos convidados elogiando sua simpatia e seu jeito amoroso de trabalhar.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Fabiany & Aleks`}</p>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[35.56%_7.34%_30.69%_58.2%] items-center justify-center p-[10px]">
      <Group6 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute h-[496px] left-[-460px] top-[142px] w-[372px]">
      <div className="-translate-y-1/2 absolute aspect-[548/731] left-0 right-0 top-[calc(50%-0.5px)]" data-name="610680701_18418089949190143_3055943093493467918_n 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N1} />
      </div>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N2} />
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img610680701184180899491901433055943093493467918N4} />
    </div>
  );
}

function Group9() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] ml-[calc(50%-252.5px)] mt-[calc(50%-143.5px)] relative row-1">
      <div className="-translate-x-1/2 col-1 font-['Kaisei_Decol:Bold',sans-serif] h-[287px] leading-[normal] ml-[252.5px] mt-0 not-italic relative row-1 text-[14px] text-black text-center w-[505px] whitespace-pre-wrap">
        <p className="mb-0">
          Contratar o Junior foi, sem dúvida, um dos maiores acertos do nosso casamento. Desde o primeiro contato, ele se mostrou um profissional exemplar, mas foi na jornada que descobrimos seu verdadeiro diferencial. Ele esteve conosco em todos os momentos: viajou para nosso pré-wedding em Itaúnas, registrou a emoção do nosso casamento civil e brilhou no grande dia.
          <br aria-hidden="true" />
          <br aria-hidden="true" />O que mais nos encantou foi a forma como ele une técnica e humanidade. Sua educação e gentileza fizeram com que todos se sentissem confortáveis, e o resultado disso é visível em cada foto espontânea e cheia de vida. Recebemos muitos comentários dos convidados elogiando sua simpatia e seu jeito amoroso de trabalhar.
        </p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Fabiany & Aleks`}</p>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <Group9 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[35.56%_146.25%_30.69%_-80.7%] items-center justify-center p-[10px]">
      <Group8 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[0_1.04%] items-center justify-center p-[10px] rounded-[333px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[333px]" />
      <p className="font-['Kaisei_Decol:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">Contato</p>
    </div>
  );
}

function Botao2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96px]" data-name="Botão">
      <div className="absolute bg-[#727045] border border-black border-solid inset-0 rounded-[333px]" />
      <Frame11 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[126px] h-[80px] items-center justify-center left-[calc(50%-13.56px)] overflow-clip rounded-[100px] top-0 w-[2089.795px]">
      <div className="relative shrink-0 size-[37px]" data-name="logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[0.56%] max-w-none size-full top-[-0.93%]" src={imgLogo} />
        </div>
      </div>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[48px] whitespace-pre-wrap">Home</p>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[71px] whitespace-pre-wrap">Histórias</p>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[48px] whitespace-pre-wrap">Sobre</p>
      <Botao2 />
    </div>
  );
}

function Group18() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-13.56px)] top-0">
      <Frame10 />
    </div>
  );
}

function Desktop3() {
  return (
    <div className="absolute bg-white h-[720px] left-0 overflow-x-clip overflow-y-auto top-[3910px] w-[1280px]" data-name="Desktop">
      <Group17 />
      <Frame8 />
      <Group11 />
      <Frame9 />
      <Group18 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 absolute bg-black content-stretch flex items-center justify-center left-[calc(50%+0.5px)] opacity-40 px-[24px] py-[16px] rounded-[90px] top-[540px]">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[90px]" />
      <p className="font-['Kaisei_Decol:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Conferir Ensaios</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[0_1.04%] items-center justify-center p-[10px] rounded-[333px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[333px]" />
      <p className="font-['Kaisei_Decol:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">Contato</p>
    </div>
  );
}

function Botao3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96px]" data-name="Botão">
      <div className="absolute bg-[#727045] border border-black border-solid inset-0 rounded-[333px]" />
      <Frame14 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[126px] h-[80px] items-center justify-center left-[calc(50%-13.56px)] overflow-clip rounded-[100px] top-0 w-[2089.795px]">
      <div className="relative shrink-0 size-[37px]" data-name="logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[0.56%] max-w-none size-full top-[-0.93%]" src={imgLogo} />
        </div>
      </div>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[48px] whitespace-pre-wrap">Home</p>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[71px] whitespace-pre-wrap">Histórias</p>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[48px] whitespace-pre-wrap">Sobre</p>
      <Botao3 />
    </div>
  );
}

function Group19() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-13.56px)] top-0">
      <Frame13 />
    </div>
  );
}

function Desktop4() {
  return (
    <div className="absolute bg-white h-[720px] left-0 overflow-x-clip overflow-y-auto top-[1488px] w-[1280px]" data-name="Desktop">
      <div className="absolute h-[1522px] left-[-15px] top-[-433px] w-[1330px]" data-name="WhatsApp Image 2026-02-02 at 09.46.57 (1) 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgWhatsAppImage20260202At09465712} />
      </div>
      <div className="-translate-x-1/2 absolute font-['Kaisei_Decol:Bold',sans-serif] h-[270px] leading-[normal] left-[640px] not-italic text-[100px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[142px] w-[1280px] whitespace-pre-wrap">
        <p className="mb-0">{`Junior Brunow `}</p>
        <p className="mb-0">Fotógrafo</p>
        <p>&nbsp;</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[640px] text-[28px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[450px]">
        {`Capturando histórias & eternizando sentimentos`}
        <br aria-hidden="true" />
        Casamentos diurnos e ensaios.
      </p>
      <Frame12 />
      <Group19 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="-translate-x-1/2 absolute bg-black content-stretch flex items-center justify-center left-[calc(50%+10.5px)] opacity-40 px-[24px] py-[16px] rounded-[90px] top-[840px]">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[90px]" />
      <p className="font-['Kaisei_Decol:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white">Conferir Ensaios</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-white content-stretch flex inset-[0_1.04%] items-center justify-center p-[10px] rounded-[333px]">
      <div aria-hidden="true" className="absolute border-[0.5px] border-black border-solid inset-0 pointer-events-none rounded-[333px]" />
      <p className="font-['Kaisei_Decol:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black text-center">Contato</p>
    </div>
  );
}

function Botao4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[96px]" data-name="Botão">
      <div className="absolute bg-[#727045] border border-black border-solid inset-0 rounded-[333px]" />
      <Frame17 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex gap-[126px] h-[80px] items-center justify-center left-[calc(50%-13.56px)] overflow-clip rounded-[100px] top-0 w-[2089.795px]">
      <div className="relative shrink-0 size-[37px]" data-name="logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-[0.56%] max-w-none size-full top-[-0.93%]" src={imgLogo} />
        </div>
      </div>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[48px] whitespace-pre-wrap">Home</p>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[71px] whitespace-pre-wrap">Histórias</p>
      <p className="font-['Kaisei_Decol:Regular',sans-serif] h-[20px] leading-[normal] not-italic relative shrink-0 text-[#727045] text-[14px] w-[48px] whitespace-pre-wrap">Sobre</p>
      <Botao4 />
    </div>
  );
}

function Group20() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-13.56px)] top-0">
      <Frame16 />
    </div>
  );
}

function Desktop5() {
  return (
    <div className="absolute h-[720px] left-0 overflow-x-clip overflow-y-auto top-[744px] w-[1280px]" data-name="Desktop">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[107.14%] left-0 max-w-none top-0 w-full" src={imgDesktop} />
      </div>
      <div className="absolute h-[1523px] left-[-15px] top-[-423px] w-[1330.721px]" data-name="WhatsApp Image 2026-02-02 at 09.46.57 (1) 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover opacity-0 pointer-events-none size-full" src={imgWhatsAppImage20260202At09465712} />
      </div>
      <div className="-translate-x-1/2 absolute font-['Kaisei_Decol:Bold',sans-serif] h-[270px] leading-[normal] left-[640px] not-italic text-[100px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[-448px] w-[1280px] whitespace-pre-wrap">
        <p className="mb-0">{`Junior Brunow `}</p>
        <p className="mb-0">Fotógrafo</p>
        <p>&nbsp;</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] left-[-410px] text-[28px] text-center text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] text-white top-[450px]">
        {`Capturando histórias & eternizando sentimentos`}
        <br aria-hidden="true" />
        Casamentos diurnos e ensaios.
      </p>
      <Frame15 />
      <Group20 />
    </div>
  );
}

export default function Group16() {
  return (
    <div className="relative size-full">
      <Desktop />
      <Desktop1 />
      <Desktop2 />
      <Desktop3 />
      <Desktop4 />
      <Desktop5 />
    </div>
  );
}