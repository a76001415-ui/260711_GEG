"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// 1세대 포켓몬 151마리 한글 번역 딕셔너리
const pokemonNamesKo: { [key: string]: string } = {
  bulbasaur: "이상해씨",
  ivysaur: "이상해풀",
  venusaur: "이상해꽃",
  charmander: "파이리",
  charmeleon: "리자드",
  charizard: "리자몽",
  squirtle: "꼬부기",
  wartortle: "어니부기",
  blastoise: "거북왕",
  caterpie: "캐터피",
  metapod: "단데기",
  butterfree: "버터플",
  weedle: "뿔충이",
  kakuna: "딱충이",
  beedrill: "독침붕",
  pidgey: "구구",
  pidgeotto: "피죤",
  pidgeot: "피죤투",
  rattata: "꼬렛",
  raticate: "레트라",
  spearow: "깨비참",
  fearow: "깨비드릴조",
  ekans: "아보",
  arbok: "아보크",
  pikachu: "피카츄",
  raichu: "라이츄",
  sandshrew: "모래두지",
  sandslash: "고지",
  "nidoran-f": "니드런♀",
  nidorina: "니드리나",
  nidoqueen: "니드퀸",
  "nidoran-m": "니드런♂",
  nidorino: "니드리노",
  nidoking: "니드킹",
  clefairy: "삐삐",
  clefable: "픽시",
  vulpix: "식스테일",
  ninetales: "나인테일",
  jigglypuff: "푸린",
  wigglytuff: "푸크린",
  zubat: "주뱃",
  golbat: "골뱃",
  oddish: "뚜벅초",
  gloom: "냄새꼬",
  vileplume: "라플레시아",
  paras: "파라스",
  parasect: "파라섹트",
  venonat: "콘팡",
  venomoth: "도나리",
  diglett: "디그다",
  dugtrio: "닥트리오",
  meowth: "나옹",
  persian: "페르시온",
  psyduck: "고라파덕",
  golduck: "골덕",
  mankey: "망키",
  primeape: "성원숭",
  growlithe: "가디",
  arcanine: "윈디",
  poliwag: "발챙이",
  poliwhirl: "슈륙챙이",
  poliwrath: "강챙이",
  abra: "캐이시",
  kadabra: "윤겔라",
  alakazam: "후딘",
  machop: "알통몬",
  machoke: "근육몬",
  machamp: "괴력몬",
  bellsprout: "모다피",
  weepinbell: "우츠동",
  victreebel: "우츠보트",
  tentacool: "왕눈해",
  tentacruel: "독파리",
  geodude: "꼬마돌",
  graveler: "데구리",
  golem: "딱구리",
  ponyta: "포니타",
  rapidash: "날쌩마",
  slowpoke: "야돈",
  slowbro: "야도란",
  magnemite: "코일",
  magneton: "레어코일",
  farfetchd: "파오리",
  doduo: "두두",
  dodrio: "두트리오",
  seel: "쥬쥬",
  dewgong: "쥬레곤",
  grimer: "질퍽이",
  muk: "질뻐기",
  shellder: "셀러",
  cloyster: "파르셀",
  gastly: "고스",
  haunter: "고우스트",
  gengar: "팬텀",
  onix: "롱스톤",
  drowzee: "슬리프",
  hypno: "슬리퍼",
  krabby: "크랩",
  kingler: "킹크랩",
  voltorb: "찌리리공",
  electrode: "붐볼",
  exeggcute: "아라리",
  exeggutor: "나시",
  cubone: "탕구리",
  marowak: "텅구리",
  hitmonlee: "시라소몬",
  hitmonchan: "홍수몬",
  lickitung: "내루미",
  koffing: "또가스",
  weezing: "또도가스",
  rhyhorn: "뿔카노",
  rhydon: "코뿌리",
  chansey: "럭키",
  tangela: "덩쿠리",
  kangaskhan: "캥카",
  horsea: "쏘드라",
  seadra: "시드라",
  goldeen: "콘치",
  seaking: "왕콘치",
  staryu: "별가사리",
  starmie: "아쿠스타",
  "mr-mime": "마임맨",
  scyther: "스라크",
  jynx: "루주라",
  electabuzz: "에레브",
  magmar: "마그마",
  pinsir: "쁘사이저",
  tauros: "켄타로스",
  magikarp: "잉어킹",
  gyarados: "갸라도스",
  lapras: "라프라스",
  ditto: "메타몽",
  eevee: "이브이",
  vaporeon: "샤미드",
  jolteon: "쥬피썬더",
  flareon: "부스터",
  porygon: "폴리곤",
  omanyte: "암나이트",
  omastar: "암스타",
  kabuto: "투구",
  kabutops: "투구푸스",
  aerodactyl: "프테라",
  snorlax: "잠만보",
  articuno: "프리져",
  zapdos: "썬더",
  moltres: "파이어",
  dratini: "미뇽",
  dragonair: "신뇽",
  dragonite: "망나뇽",
  mewtwo: "뮤츠",
  mew: "뮤",
};

// 포켓몬 타입 번역 및 테마
const typeTranslations: { [key: string]: { name: string; color: string; bg: string } } = {
  normal: { name: "노멀", color: "text-slate-600 border-slate-300", bg: "bg-slate-100" },
  fire: { name: "불꽃", color: "text-red-500 border-red-300", bg: "bg-red-50" },
  water: { name: "물", color: "text-blue-500 border-blue-300", bg: "bg-blue-50" },
  grass: { name: "풀", color: "text-green-600 border-green-300", bg: "bg-green-50" },
  electric: { name: "전기", color: "text-yellow-600 border-yellow-300", bg: "bg-yellow-50" },
  ice: { name: "얼음", color: "text-cyan-500 border-cyan-300", bg: "bg-cyan-50" },
  fighting: { name: "격투", color: "text-orange-700 border-orange-400", bg: "bg-orange-50" },
  poison: { name: "독", color: "text-purple-600 border-purple-300", bg: "bg-purple-50" },
  ground: { name: "땅", color: "text-amber-700 border-amber-400", bg: "bg-amber-50" },
  flying: { name: "비행", color: "text-indigo-500 border-indigo-300", bg: "bg-indigo-50" },
  psychic: { name: "에스퍼", color: "text-pink-500 border-pink-300", bg: "bg-pink-50" },
  bug: { name: "벌레", color: "text-lime-600 border-lime-300", bg: "bg-lime-50" },
  rock: { name: "바위", color: "text-yellow-800 border-yellow-500", bg: "bg-yellow-50" },
  ghost: { name: "고스트", color: "text-violet-600 border-violet-300", bg: "bg-violet-50" },
  dragon: { name: "드래곤", color: "text-indigo-700 border-indigo-400", bg: "bg-indigo-50" },
  steel: { name: "강철", color: "text-zinc-500 border-zinc-300", bg: "bg-zinc-100" },
  fairy: { name: "페어리", color: "text-pink-400 border-pink-200", bg: "bg-pink-50/50" },
  dark: { name: "악", color: "text-stone-700 border-stone-400", bg: "bg-stone-100" },
};

interface PokemonBase {
  name: string;
  url: string;
}

interface PokemonDetail {
  id: number;
  name: string;
  koreanName: string;
  image: string;
  types: string[];
  height: number;
  weight: number;
  stats: { name: string; value: number }[];
}

export default function Dogam() {
  const [allPokemon, setAllPokemon] = useState<PokemonBase[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<PokemonBase[]>([]);
  const [displayedPokemon, setDisplayedPokemon] = useState<PokemonDetail[]>([]);
  
  const [selectedType, setSelectedType] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [detailsLoading, setDetailsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // 모달 상태
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalLoading, setModalLoading] = useState<boolean>(false);

  const itemsPerPage = 24;

  // 1. 초기 151마리 목록 로드
  useEffect(() => {
    const fetchAllList = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        if (!res.ok) throw new Error("포켓몬 목록을 불러오는 데 실패했습니다.");
        const data = await res.json();
        setAllPokemon(data.results);
        setFilteredPokemon(data.results);
      } catch (err: any) {
        setError(err.message || "연결 상태가 좋지 않습니다. 잠시 후 다시 시도해 주세요.");
      } finally {
        setLoading(false);
      }
    };
    fetchAllList();
  }, []);

  // 2. 타입 필터링 또는 전체 목록 변경 시 페이징 계산
  useEffect(() => {
    const handleFilter = async () => {
      try {
        setLoading(true);
        setError(null);
        setCurrentPage(1);

        if (selectedType === "all") {
          setFilteredPokemon(allPokemon);
        } else {
          const res = await fetch(`https://pokeapi.co/api/v2/type/${selectedType}`);
          if (!res.ok) throw new Error("타입 정보 조회 중 오류가 발생했습니다.");
          const data = await res.json();
          
          // 151번 이하의 포켓몬만 골라내기
          const typePokemon = data.pokemon
            .map((item: any) => item.pokemon)
            .filter((p: any) => {
              const id = parseInt(p.url.split("/")[6]);
              return id <= 151;
            });
          setFilteredPokemon(typePokemon);
        }
      } catch (err: any) {
        setError(err.message || "데이터 조회 실패");
      } finally {
        setLoading(false);
      }
    };

    if (allPokemon.length > 0) {
      handleFilter();
    }
  }, [selectedType, allPokemon]);

  // 3. 현재 페이지에 해당하는 포켓몬들의 상세 정보 로드
  useEffect(() => {
    const loadPageDetails = async () => {
      if (filteredPokemon.length === 0) {
        setDisplayedPokemon([]);
        setTotalPages(1);
        return;
      }

      const total = Math.ceil(filteredPokemon.length / itemsPerPage);
      setTotalPages(total);

      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, filteredPokemon.length);
      const pageList = filteredPokemon.slice(startIndex, endIndex);

      try {
        setDetailsLoading(true);
        setError(null);

        const detailsPromises = pageList.map(async (p) => {
          const idStr = p.url.split("/")[6];
          const id = parseInt(idStr);
          
          // 포켓몬 상세 정보 가져오기
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
          if (!res.ok) throw new Error("상세 정보 조회 오류");
          const d = await res.json();

          // 공식 고화질 일러스트 우선 적용
          const image = d.sprites.other["official-artwork"].front_default || d.sprites.front_default;
          const types = d.types.map((t: any) => t.type.name);

          // 능력치 매핑
          const statsMap = d.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat,
          }));

          return {
            id,
            name: p.name,
            koreanName: pokemonNamesKo[p.name] || p.name.toUpperCase(),
            image,
            types,
            height: d.height,
            weight: d.weight,
            stats: statsMap,
          };
        });

        const results = await Promise.all(detailsPromises);
        setDisplayedPokemon(results);
      } catch (err: any) {
        setError("일부 포켓몬 상세 정보를 가져오지 못했습니다. 다시 시도해 주세요.");
      } finally {
        setDetailsLoading(false);
      }
    };

    loadPageDetails();
  }, [filteredPokemon, currentPage]);

  // 4. 모달 상세 정보 상세 조회
  const handleCardClick = async (pokemon: PokemonDetail) => {
    try {
      setModalOpen(true);
      setModalLoading(true);
      setSelectedPokemon(pokemon);

      // 이미 로컬 정보가 풍부하므로, 혹시 추가 스펙(특성 한글명 등)이 필요한 경우 여기서 추가 호출이 가능합니다.
      // 여기서는 즉시 모달 로딩을 풀고 상세 데이터를 표시합니다.
      setModalLoading(false);
    } catch (err) {
      setModalLoading(false);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const formatId = (id: number) => {
    return `#${String(id).padStart(4, "0")}`;
  };

  const statNameKo = (name: string) => {
    const stats: { [key: string]: string } = {
      hp: "체력",
      attack: "공격",
      defense: "방어",
      "special-attack": "특수공격",
      "special-defense": "특수방어",
      speed: "스피드",
    };
    return stats[name] || name;
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50/20 text-slate-800 select-none pb-12">
      
      {/* Background Decorations */}
      <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-yellow-100/30 blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-[40%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/30 blur-[100px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:28px_28px] opacity-30 pointer-events-none z-0" />

      {/* Header */}
      <header className="relative w-full max-w-7xl mx-auto px-6 py-5 flex items-center justify-between z-50">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-yellow-400 p-[2px] shadow-md flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
              <div className="w-full h-1/2 bg-red-500 border-b border-slate-800" />
              <div className="absolute w-3 h-3 bg-white border border-slate-800 rounded-full z-10" />
            </div>
          </div>
          <span className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
            포켓몬 탐험대
          </span>
        </a>
        <a
          href="/"
          className="px-6 py-2.5 text-sm font-black rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          홈으로 돌아가기
        </a>
      </header>

      {/* Main Container */}
      <main className="relative flex-1 w-full max-w-7xl mx-auto px-6 py-4 z-10 flex flex-col gap-8">
        
        {/* Title */}
        <div className="text-center md:text-left animate-[fade-in_0.8s_ease-out_forwards]">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            포켓몬 <span className="text-blue-600 bg-yellow-100 border border-yellow-300 px-3 py-1 rounded-2xl rotate-[-1deg] inline-block shadow-sm">도감</span>
          </h1>
          <p className="text-slate-500 text-sm sm:text-base font-semibold mt-3">
            1세대 포켓몬 151마리의 능력치와 상세 정보를 한눈에 만나보세요!
          </p>
        </div>

        {/* Type Filter Buttons */}
        <div className="flex flex-col gap-3.5 bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-slate-200/60 shadow-sm animate-[fade-in_0.8s_ease-out_0.2s_forwards] opacity-0">
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">
            타입별 필터
          </span>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-4 py-2 rounded-xl text-xs font-black border transition-all duration-300 cursor-pointer ${
                selectedType === "all"
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 scale-105"
                  : "bg-white hover:bg-slate-50 text-slate-600 border-slate-200"
              }`}
            >
              전체보기
            </button>
            {Object.keys(typeTranslations).map((typeKey) => {
              const type = typeTranslations[typeKey];
              const isSelected = selectedType === typeKey;
              return (
                <button
                  key={typeKey}
                  onClick={() => setSelectedType(typeKey)}
                  className={`px-3 py-2 rounded-xl text-xs font-black border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? `${type.bg} ${type.color} border-current shadow-md scale-105 font-black`
                      : "bg-white hover:bg-slate-50 text-slate-500 border-slate-200/80"
                  }`}
                >
                  {type.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading Spinner */}
        {(loading || detailsLoading) && displayedPokemon.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
            <p className="text-slate-500 font-bold text-sm">신나는 포켓몬 데이터를 로딩 중입니다...</p>
          </div>
        ) : error ? (
          /* Error State */
          <div className="flex-1 flex flex-col items-center justify-center py-20 gap-5 text-center">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center border-2 border-red-200">
              <span className="text-red-500 font-black text-3xl">!</span>
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-900">데이터를 가져오지 못했습니다</h2>
              <p className="text-slate-500 text-sm mt-1.5">{error}</p>
            </div>
            <button
              onClick={() => {
                setError(null);
                setAllPokemon([]);
                setSelectedType("all");
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-black shadow-md transition-all cursor-pointer border-b-4 border-blue-800 active:scale-95"
            >
              다시 시도하기
            </button>
          </div>
        ) : (
          /* Card Grid Content */
          <div className="flex flex-col gap-8 animate-[fade-in_0.8s_ease-out_0.3s_forwards] opacity-0">
            {displayedPokemon.length === 0 ? (
              <div className="text-center py-20 bg-white/50 border border-slate-200/60 rounded-3xl">
                <p className="text-slate-400 font-bold">선택하신 조건의 포켓몬이 존재하지 않습니다.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayedPokemon.map((pokemon) => {
                  const firstType = pokemon.types[0];
                  const firstTypeTheme = typeTranslations[firstType] || { bg: "bg-slate-50", color: "text-slate-500 border-slate-200" };
                  
                  return (
                    <div
                      key={pokemon.id}
                      onClick={() => handleCardClick(pokemon)}
                      className="group bg-white rounded-3xl p-5 border-2 border-slate-100 hover:border-blue-300 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col items-center relative overflow-hidden"
                    >
                      {/* Top-right card index */}
                      <span className="absolute top-4 right-5 text-xs font-black text-slate-300 tracking-wider">
                        {formatId(pokemon.id)}
                      </span>

                      {/* Image card block */}
                      <div className={`w-32 h-32 rounded-2xl flex items-center justify-center mb-4 transition-colors duration-500 relative ${firstTypeTheme.bg}`}>
                        <div className="relative w-24 h-24">
                          <Image
                            src={pokemon.image}
                            alt={pokemon.koreanName}
                            fill
                            sizes="96px"
                            className="object-contain transform group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Info text */}
                      <h3 className="text-lg font-black text-slate-800 group-hover:text-blue-600 transition-colors">
                        {pokemon.koreanName}
                      </h3>

                      {/* Types */}
                      <div className="flex gap-1.5 mt-3">
                        {pokemon.types.map((typeKey) => {
                          const type = typeTranslations[typeKey] || { name: typeKey, bg: "bg-slate-100", color: "text-slate-500" };
                          return (
                            <span
                              key={typeKey}
                              className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black border uppercase tracking-wider ${type.bg} ${type.color}`}
                            >
                              {type.name}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-6 mt-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1 || detailsLoading}
                  className={`px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-1 cursor-pointer border transition-all ${
                    currentPage === 1 || detailsLoading
                      ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                      : "bg-white hover:bg-slate-50 text-blue-600 border-slate-200 hover:scale-105 active:scale-95 shadow-sm"
                  }`}
                >
                  ◀ 이전
                </button>
                <span className="text-sm font-black text-slate-500">
                  {currentPage} / {totalPages} 페이지
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages || detailsLoading}
                  className={`px-6 py-3 rounded-2xl font-black text-sm flex items-center gap-1 cursor-pointer border transition-all ${
                    currentPage === totalPages || detailsLoading
                      ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
                      : "bg-white hover:bg-slate-50 text-blue-600 border-slate-200 hover:scale-105 active:scale-95 shadow-sm"
                  }`}
                >
                  다음 ▶
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="relative w-full max-w-7xl mx-auto px-6 py-4 text-center text-xs font-semibold text-slate-400 z-10 mt-12">
        &copy; {new Date().getFullYear()} 포켓몬 탐험대. All Rights Reserved.
      </footer>

      {/* Details Modal overlay */}
      {modalOpen && selectedPokemon && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fade-in_0.2s_ease-out_forwards]">
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white rounded-[36px] overflow-hidden shadow-2xl border-4 border-yellow-300 relative flex flex-col max-h-[90vh] animate-[fade-in_0.3s_ease-out_forwards]"
          >
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold transition-colors cursor-pointer z-10 active:scale-95"
            >
              ✕
            </button>

            {modalLoading ? (
              <div className="py-24 flex flex-col items-center justify-center gap-3">
                <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
                <p className="text-slate-500 font-bold text-xs">상세 능력을 분석하는 중...</p>
              </div>
            ) : (
              <div className="overflow-y-auto">
                {/* Modal Header details background */}
                <div className={`p-8 pb-4 flex flex-col items-center relative ${typeTranslations[selectedPokemon.types[0]]?.bg || "bg-slate-50"}`}>
                  <span className="absolute top-4 left-6 text-xs font-black text-slate-400/80 tracking-wider">
                    {formatId(selectedPokemon.id)}
                  </span>
                  
                  {/* Large Modal Image */}
                  <div className="relative w-36 h-36 mt-4">
                    <Image
                      src={selectedPokemon.image}
                      alt={selectedPokemon.koreanName}
                      fill
                      sizes="144px"
                      priority
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Modal Body */}
                <div className="px-6 py-6 flex flex-col gap-5">
                  {/* Title & Type Badges */}
                  <div className="text-center">
                    <h2 className="text-2xl font-black text-slate-900">{selectedPokemon.koreanName}</h2>
                    <div className="flex justify-center gap-1.5 mt-2">
                      {selectedPokemon.types.map((typeKey) => {
                        const type = typeTranslations[typeKey] || { name: typeKey, bg: "bg-slate-100", color: "text-slate-500" };
                        return (
                          <span
                            key={typeKey}
                            className={`px-3 py-1 rounded-lg text-xs font-black border uppercase tracking-wider ${type.bg} ${type.color}`}
                          >
                            {type.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Height & Weight */}
                  <div className="grid grid-cols-2 gap-4 bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                    <div className="text-center">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">신장 (키)</span>
                      <span className="text-base font-black text-slate-800 mt-1 block">{(selectedPokemon.height / 10).toFixed(1)} m</span>
                    </div>
                    <div className="text-center border-l border-slate-200">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">몸무게 (체중)</span>
                      <span className="text-base font-black text-slate-800 mt-1 block">{(selectedPokemon.weight / 10).toFixed(1)} kg</span>
                    </div>
                  </div>

                  {/* Stats bar chart */}
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest pl-1">
                      기본 능력치 (Base Stats)
                    </h4>
                    <div className="flex flex-col gap-2.5 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                      {selectedPokemon.stats.map((stat) => {
                        // 능력치 백분율 (160을 Max치로 산정)
                        const maxVal = 160;
                        const percentage = Math.min((stat.value / maxVal) * 100, 100);
                        
                        // 타입별 색상
                        const barColor = stat.name === "hp" ? "bg-red-500" :
                                         stat.name === "attack" ? "bg-orange-400" :
                                         stat.name === "defense" ? "bg-blue-400" :
                                         stat.name.startsWith("special") ? "bg-purple-400" : "bg-green-400";
                        
                        return (
                          <div key={stat.name} className="flex items-center text-xs">
                            <span className="w-16 font-extrabold text-slate-500">{statNameKo(stat.name)}</span>
                            <span className="w-8 font-black text-slate-800 text-right pr-2.5">{stat.value}</span>
                            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${barColor}`}
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
