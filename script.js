// --- JavaScript 로직 시작 ---

// 데이터를 동적으로 로드하는 대신, JSON 파일 내용을 직접 포함
const procedures = [
  {
    "name": "올인원 프로그램(색소, 기미, 주근깨, 잡티, 점 등)",
    "category": "popular_Treatment",
    "detail": "- 클라리티(색소레이저) 루카스(색소레이저) 큐라스 하이브리드(색소레이저) 네오빔(여드름, 피지레이저) 제네시스(색소레이저) 퀀타(혈관, 홍조레이저)\n- 멀티(스킨부스터) 꿀광(스킨부스터) SBM팩(착붙팩, 퓨어빔하이드로겔마스크)\n- 스킨부스터는 특정기계가 아니라 조건에 맞게 피부의 수분, 탄력, 재생을 끌어올려주는 표현\n- 접수 시 올인원(베이직, 듀얼, ev, ss) 종류확인, (10-?, 5-?) 회차확인 필수\n- 3~4주 간격으로 다음예약잡기"
  },
  {
    "name": "리팟(흑자제거)",
    "category": "popular_Treatment",
    "detail": "- (5,10,15,20)mm 각(30,60,90,120)만원*부가세 별도*\n- 듀오덤 부착 설명(밀린 경우 더 크게 오려서 위에 덧붙혀주세요. 떨어진 경우 새거로 붙힌 후 병원으로 전화주세요)\n- 듀오덤제거는 3주 후로 예약잡기(시술하신 원장님으로)\n- (오일,폼)클렌저 사용 시 듀오덤 녹을 수 있음 계면활성제 없는 젤클 사용안내 *세안 시 살살 해주세요\n- 기미약 처방 확인 후 처방전 드리기\n- 주의사항 보내드리기"
  },
  {
    "name": "듀오덤제거",
    "category": "popular_Treatment",
    "detail": "- 접수 시 리팟 시술한 원장님으로 연결ex) 리팟듀오덤제거(시술h1)  h1/준식\n- 네모딕 출력 시 듀제- 마크뷰- 진료- 후 간호팀으로 연결\n- 3~6개월은 개선기능, 레티놀, 비타민 성분 들어간 화장품 절대 금지(색소반응 올라올 수 있음)\n- 재생성분(EGF, PDRN) 들어간거 사용해야합니다\n- 알코올 성분 없는 물로된 토너 사용\n- 계면활성제 없는 젤클로만 세안안내\n- CU크림은 맨나중에 바르고 수시로(3~4시간 간격) 발라주세요\n- 티크림, 주의사항, SBM팩 증정 티크림은 2주간만 발라주세요"
  },
  {
    "name": "점제거(어븀)",
    "category": "popular_Treatment",
    "detail": "- 듀오덤 10일정도는 붙이고 나중에 집에서 자가제거 해주세요\n- 피 고이거나,부풀오르면 교체해주세요(여드름 패치는 안돼요)\n- 재생연고 발라줘야되서 cu 연고 안내해주면서 3개월정도는 잘 발라주세요\n- 점 제거하고 나면 어븀으로 깍아내서 살이 파여있는 상태라서 연고랑 선크림 잘 발라주세요"
  },
  {
    "name": "ipl(엔텐스 펄스 라이트)",
    "category": "pigmentation_acne_redness",
    "detail": "- 여드름, 주근깨, 혈관 문제까지 다양하게 커버가능\n- 비교적 자극이 적으나 직후 관리중요.\n- 일시적인 가피, 붉어짐 같은 반응은 자연스러운 과정, 보습관리중요\n- 딱지 발생 시 인위적으로 떼어내는 행동금지\n- 레이저 후 특히 자외선 노출 시 색소 재발 할 수 있음 주의",
    "desk_guide": "IPL 시술 후에는 피부가 예민해져 있으므로, 3일간 사우나, 격한 운동은 피해주세요. 자외선 차단제는 필수이며, 재생 크림을 아침저녁으로 발라주시면 좋습니다."
  },
  {
    "name": "클라리티(색소레이저)",
    "category": "pigmentation_acne_redness",
    "detail": "-색소, 모공, 홍조 모세혈관 등 피부에 맞는 파장을 선택하여 사용하는 장비\n- 자동쿨링 기능이 탑재되어 비교적 적은 통증\n- 제모가능(+냉각기능)\n- 제네시스모드: 피부 속 열을 전달해 콜라겐 생성, 모공이나 피부결 개선\n- 토닝모드-색소침착, 기미, 잡티 강한 자극없이 피부톤을 점차 맑게 만들어주는 효과",
    "desk_guide": "클라리티 시술은 통증이 적은 편이나, 시술 부위가 붉어질 수 있습니다. 이는 1-2시간 내에 가라앉습니다. 시술 후 일주일간은 스크럽제 사용을 피해주세요."
  },
  {
    "name": "루카스(색소레이저)",
    "category": "pigmentation_acne_redness",
    "detail": "- 진피층 깊숙이 자리한 오타모반 같은 색소를 치료하는데 적합\n- 표피층 가까운 기미, 주근깨, 검버섯 같은 표재성색소를 개선하는데 사용\n- 피부 표면의 손상을 최소화하면서도 색소를 집중적으로 타켓팅\n- MLA기법은 피부표면의 콜라겐 재생을 활성화시키면서 모공, 흉터, 잔주름 등의 개선 효과를 볼 수 있는 레이저 기법\n- 피부안쪽에 미세한 구멍을 만들어 피부 속에 새로운 콜라겐을 형성시켜 피부가 재생",
    "desk_guide": "루카스 시술 후에는 가벼운 딱지가 생길 수 있으며, 자연스럽게 떨어지도록 두는 것이 중요합니다. 외출 시 자외선 차단에 특히 신경 써주세요."
  },
    {
    "name": "어븀야그레이저",
    "category": "pigmentation_acne_redness",
    "detail": "- CO2레이저보다 파괴깊이가 얕고 그만큼 열손상의 깊이도 얕은 편\n- 넓거나 깊은 점 여러 번 나눠서 섬세하게 치료 가능",
    "desk_guide": "어븀야그 레이저는 정교한 시술이 가능합니다. 시술 부위에 재생 테이프를 붙여드리며, 2-3일간 유지해주시는 것이 좋습니다."
  },
  {
    "name": "CO2",
    "category": "pigmentation_acne_redness",
    "detail": "- 점, 비립종, 쥐젖, 편평사마귀, 혈관종, 검버섯 등 각종 흉터 및 종양 제거가능\n- 재생테이프 제거 후 붉은색이 연분홍 색으로 점점 바뀌며 피부톤과 비슷하게 되어가는 회복 과정\n- 재생 기간 1~2개월 이상 소요\n- 작고 얕은 점 한번에 깔끔하게 치료",
    "desk_guide": "CO2 레이저 후에는 재생 테이프를 일주일간 부착해야 합니다. 테이프가 떨어진 경우, 병원에서 드린 여분으로 교체해주세요. 음주와 흡연은 일주일간 피해주세요."
  },
  {
    "name": "엑셀브이",
    "category": "pigmentation_acne_redness",
    "detail": "- 색소, 모공, 주름, 탄력, 미백에 효과적 특히 홍조성 색소혈관 피부질환에 93%이상 개선 가능\n- 사파이어 쿨링 컨트롤로 통증감소효과",
    "desk_guide": "엑셀브이 시술 후에는 홍조가 일시적으로 더 붉어 보일 수 있으나, 곧 진정됩니다. 보습 관리에 신경 써주시고, 외출 시에는 자외선 차단제를 꼼꼼히 발라주세요."
  },
  {
    "name": "유펄스프락셀",
    "category": "pigmentation_acne_redness",
    "detail": "- 피부 표면과 진피층에 작용해 흉터와 모공을 개선\n- 진피층 속 탄력섬유와 콜라겐 생성을 촉진해 탄력까지 개선\n- 출혈이나 딱지가 생기기 때문에 다운타임이 긴 편",
    "desk_guide": "프락셀 시술은 회복 기간이 필요합니다. 붉은 기와 붓기가 3-5일 지속될 수 있으며, 딱지는 자연 탈락되도록 합니다. 병원에서 안내해 드린 재생 관리를 잘 따라주세요."
  },
  {
    "name": "피코슈어",
    "category": "pigmentation_acne_redness",
    "detail": "- 짧은 시간에 높은 에너지를 전달하여 색소만 타켓 주변 조직에 미치는 영향을 줄임\n- 좁쌀 올라올 수 있는데 3~5회 지나면 괜찮아짐\n- 한 달 후 경과 나타날 수 있음\n- 피코 줌패스 모드: 잡티개선",
    "desk_guide": "피코 토닝 후에는 피부가 건조해질 수 있으니 수분 크림을 충분히 발라주세요. 드물게 좁쌀 여드름이 올라올 수 있으나, 일시적인 현상입니다."
  },
  {
    "name": "큐라스 하이브리드",
    "category": "pigmentation_acne_redness",
    "detail": "- 피부 손상을 줄이고 색소 타겟팅을 높여 다양한 색소질환을 효과적으로 치료\n- 난치성기미, 오타모반치료, 표피, 진피 전체색소 및 피부톤 개선\n- 콜라겐리모델링으로 탄력 개선 효과",
    "desk_guide": "큐라스 시술은 피부 자극이 적습니다. 시술 후 바로 일상생활이 가능하지만, 사우나나 찜질방은 3일 정도 피해주시는 것이 좋습니다."
  },
  {
    "name": "네오빔",
    "category": "pigmentation_acne_redness",
    "detail": "- 삼부진피에 선택적 열손상을 줘서 피지샘을 태우는 원리\n- 여드름과 피지 분비를 개선해주는 시술\n- A모드(냉각시스템)로 피부표면을 보호하고 자극과 통증 줄임\n- 염증성 병변감소, 기름기 감소, 진피 리모델링을 통한 흉터 개선 효과\n- 약한 부작용(1~2일간 홍반, 부종)",
    "desk_guide": "네오빔은 여드름 치료에 효과적입니다. 시술 후 유분이 줄어 건조함을 느낄 수 있으니, 오일프리 보습제를 사용해주세요. 압출 관리를 병행하면 더욱 좋습니다."
  },
  {
    "name": "리팟",
    "category": "pigmentation_acne_redness",
    "detail": "- 표피층에 존재하는 멜라닌 색소를 집중적으로 제거\n- 검버섯, 흑자 제거\n- VSLS기술을 활용하여 피부 손상을 최소화\n- 컨텍트 쿨링방식의 냉각기능으로 시술통증 최소화",
    "desk_guide": "리팟 시술 후에는 미세한 딱지가 생길 수 있습니다. 딱지가 떨어진 후에는 색소가 일시적으로 진해 보일 수 있으나, 점차 옅어지니 걱정하지 않으셔도 됩니다."
  },
  {
    "name": "포텐자",
    "category": "pores_scars",
    "detail": "- 미세 바늘이 피부에 침투하여 깊은 피부층에 표과적으로 고주파 에너지를 전달\n- 새로운 콜라겐 생성유도, 잔주름, 탄력, 얼굴흉터 개선, 모공축소에 도움",
    "desk_guide": "포텐자 시술 후에는 붉은 기와 미세한 바늘 자국이 1-2일 정도 보일 수 있습니다. 메이크업은 다음 날부터 가능하며, 재생 크림을 잘 발라주세요."
  },
  {
    "name": "큐어젯",
    "category": "pores_scars",
    "detail": "- 초당 1~20회 연속분사\n- 흉터 재생에 매우 효과적",
    "desk_guide": "큐어젯은 흉터 부위에 직접 약물을 주입하는 시술입니다. 시술 부위에 작은 멍이 들 수 있으며, 3-7일 내에 자연스럽게 사라집니다."
  },
  {
    "name": "쥬브젠",
    "category": "pores_scars",
    "detail": "- 자가진피재생술\n- 물리적 자극: 물리적으로 손상을 일으켜 상처조직을 생기도록 하는 방법\n- 화학적 자극: 이산화탄소가스를 주입하여 조직사이를 찢어 물리적 손상 및 화학적 손상을 만들어 상처 조직이 생기도록 하는 방법\n- 생물학적 자극: 조직수복용 생체 재료가 자극을 일으켜 상처 조직이 생기도록 하는 방법\n- 이산화탄소, 히알루론산을 교대로 주입하여 3가지 반을으로 콜라겐이 생성\n- 새 살이 돋거나 주름, 상처가 채워지는 효과",
    "desk_guide": "쥬브젠 시술 후에는 시술 부위가 약간 부어오를 수 있습니다. 이는 가스와 약물 주입으로 인한 자연스러운 현상이며, 2-3일 내에 가라앉습니다."
  },
  {
    "name": "인모드fx, 포마",
    "category": "lifting",
    "detail": "- fx: 진공로 피부를 당겨주어 지방층 깊은 곳에 고주파 에너지와 고전압 전기 자극 에너지 전달하여 과도하게 형성된 지방세포를 파괴\n- 포마: 표피와 진피층에 고주파 에너지를 전달해 콜라겐 생성을 촉진\n- 피부탄력개선, 잔주름개선, 피부질감개선",
    "desk_guide": "인모드 FX 시술 후에는 진공 압력으로 인해 붉은 자국이나 미세한 멍이 들 수 있습니다. 이는 3-7일 내에 사라지며, 컨실러로 커버 가능합니다. 포마는 자극이 거의 없습니다."
  },
  {
    "name": "슈링크",
    "category": "lifting",
    "detail": "- 고강도 집속 초음파(HIFU)를 이용해 피부 속 특정 깊이에 열응고점을 만들어 콜라겐 재생 및 리프팅 효과를 유도",
    "desk_guide": "슈링크 시술 후에는 턱 선이나 광대 주변에 약간의 뻐근함이 느껴질 수 있습니다. 이는 초음파 에너지가 잘 전달되었다는 신호이며, 1-2주 내에 사라집니다."
  },
  {
    "name": "올리지오",
    "category": "lifting",
    "detail": "- 피부에 고주파를 조사하여 발생된 열이 조직 응고를 유발하는 방법\n- 진동기능 및 쿨링시스템 탑재\n- 금속 악세서리 제거하고 심장박동기 있는 사람은 시술X\n- 진피층의 콜라겐을 활성화 인체에 무해한 전류와 함께 진피까지 전달된 열이 콜라겐을 변성\n- 얼굴에 달라 붙는 듯 한 타이트닝",
    "desk_guide": "올리지오 시술 전에는 반드시 금속성 악세사리를 모두 제거해야 합니다. 시술 후에는 바로 일상생활이 가능하며, 피부가 건조하지 않도록 보습에 신경 써주세요."
  },
  {
    "name": "울쎄라",
    "category": "lifting",
    "detail": "- 고강도 집속 초음파(HIFU)를 이용한 대표적인 리프팅 시술\n- 피부 속 깊은 층까지 에너지를 전달하여 콜라겐 재생시켜 처진 윤곽을 정리해주는 리프팅효과\n- 근막층 조직을 응고, 수축시켜 피부를 리프팅",
    "desk_guide": "울쎄라는 강력한 리프팅 시술로, 시술 후 며칠간 근육통과 유사한 느낌이 있을 수 있습니다. 딱딱한 음식 섭취는 3일 정도 피해주시는 것이 좋습니다."
  },
  {
    "name": "써마지",
    "category": "lifting",
    "detail": "- 고주파 에너지를 이용해 피부 진피층의 콜라겐을 수축시키고 재생을 촉진하여 탄력 증진 및 주름 개선에 효과적",
    "desk_guide": "써마지 시술 후에는 피부 속에서 콜라겐이 서서히 재생됩니다. 효과는 1-2개월에 걸쳐 나타나며, 시술 후 특별한 주의사항은 없으나 보습과 자외선 차단은 중요합니다."
  },
  {
    "name": "티타늄",
    "category": "lifting",
    "detail": "- 세 가지 파장의 레이저를 동시에 사용하여 피부 속 깊이 에너지를 전달, 강력한 리프팅 및 타이트닝 효과를 제공",
    "desk_guide": "티타늄 리프팅은 통증이 거의 없으며 즉각적인 효과를 기대할 수 있습니다. 시술 후 바로 메이크업이 가능하며, 중요한 약속 전에 받으시는 것을 추천합니다."
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const procedureList = document.getElementById('procedure-list');
    const modal = document.getElementById('desk-guide-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModalBtn = document.getElementById('modal-close-btn');

    // 1. 데이터로부터 HTML 목록 생성
    function createProcedureList(filteredProcedures) {
        procedureList.innerHTML = ''; // 기존 목록 초기화
        if (filteredProcedures.length === 0) {
            procedureList.innerHTML = '<p class="no-results">표시할 시술이 없습니다.</p>';
            return;
        }
        filteredProcedures.forEach(proc => {
            const item = document.createElement('div');
            item.className = 'accordion-item';
            item.dataset.category = proc.category;
            item.dataset.title = `${proc.name}`.toLowerCase();

            let detailsHtml = `<p class="detail-paragraph">${proc.detail}</p>`;
            
            const deskGuideButtonHtml = proc.desk_guide 
                ? `<button class="desk-guide-btn" data-name="${proc.name}">데스크 안내</button>`
                : '';

            item.innerHTML = `
                <div class="accordion-header">
                    <div class="procedure-title">
                        <h3>
                            ${proc.name}
                        </h3>
                        ${deskGuideButtonHtml}
                    </div>
                    <div class="accordion-icon">+</div>
                </div>
                <div class="accordion-content">
                    <div class="accordion-content-inner">
                        ${detailsHtml}
                    </div>
                </div>
            `;
            procedureList.appendChild(item);
        });
        
        addAccordionListeners();
        addDeskGuideButtonListeners();
    }

    // 2. 아코디언 기능
    function addAccordionListeners() {
        const accordionHeaders = document.querySelectorAll('.accordion-header');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const content = item.querySelector('.accordion-content');
                if (item.classList.contains('active')) {
                    content.style.maxHeight = null;
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            });
        });
    }

    // 3. 팝업 기능
    function showPopup(procedureName) {
        const procedure = procedures.find(p => p.name === procedureName);
        if (procedure && procedure.desk_guide) {
            modalTitle.textContent = `${procedure.name} - 데스크 안내`;
            modalBody.innerHTML = `<p>${procedure.desk_guide.replace(/\n/g, '<br>')}</p>`;
            modal.style.display = 'flex';
        }
    }

    function hidePopup() {
        modal.style.display = 'none';
    }

    function addDeskGuideButtonListeners() {
        const deskGuideButtons = document.querySelectorAll('.desk-guide-btn');
        deskGuideButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.stopPropagation();
                const procedureName = event.target.dataset.name;
                showPopup(procedureName);
            });
        });
    }

    // 4. 초기 목록 생성
    function initializeList() {
        const popularProcedures = procedures.filter(proc => proc.category === 'popular_Treatment');
        createProcedureList(popularProcedures);
    }

    // 5. 이벤트 리스너 연결
    closeModalBtn.addEventListener('click', hidePopup);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hidePopup();
        }
    });

    initializeList();
});

// --- JavaScript 로직 끝 ---
