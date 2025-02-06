  /* ========== 파티 선택 ========== */
  function setupPartySelection() {
    const partyDivs = document.querySelectorAll(".party-member");
    
    partyDivs.forEach(div => {
      const index = parseInt(div.getAttribute("data-index"), 10);
      const nameSelect = div.querySelector(".party-name");
      const mainRevSelect = div.querySelector(".main-revelation");
      const subRevSelect = div.querySelector(".sub-revelation");
      const orderSelect = div.querySelector(".party-order");
      const ritualSelect = div.querySelector(".party-ritual");
      
      // 초기 원더 설정에 대한 비활성화 처리
      if (partyMembers[index].name === "원더") {
        ritualSelect.disabled = true;
        ritualSelect.value = "0";
        mainRevSelect.disabled = true;
        mainRevSelect.value = "";
        subRevSelect.disabled = true;
        subRevSelect.value = "";
        
        partyMembers[index].ritual = "0";
      }
      
      // 주 계시 옵션 설정
      if (mainRevSelect) {
        // 기존 옵션 초기화
        mainRevSelect.innerHTML = '<option value="">-</option>';
        
        // 주 계시 옵션 추가
        Object.keys(revelationData.main).forEach(rev => {
          const opt = document.createElement("option");
          opt.value = rev;
          opt.textContent = rev;
          mainRevSelect.appendChild(opt);
        });

        // 주 계시 변경 이벤트
        mainRevSelect.addEventListener("change", (e) => {
          const selectedMain = e.target.value;
          
          // 일월성진 드롭다운 활성화/비활성화
          if (selectedMain && revelationData.main[selectedMain]) {
            subRevSelect.disabled = false;
            
            // 일월성진 옵션 설정
            subRevSelect.innerHTML = '<option value="">-</option>';
            revelationData.main[selectedMain].forEach(subRev => {
              const opt = document.createElement("option");
              opt.value = subRev;
              opt.textContent = subRev;
              subRevSelect.appendChild(opt);
            });
          } else {
            subRevSelect.disabled = true;
            subRevSelect.innerHTML = '<option value="">-</option>';
          }
          
          // 파티 이미지 업데이트 추가
          updatePartyImages();
        });
        //일월성진 변경 시 
        subRevSelect.addEventListener("change", (e) => {
          // 파티 이미지 업데이트 추가
          updatePartyImages();
        });
      }

      if (nameSelect) {
        // input container 생성
        const inputContainer = document.createElement("div");
        inputContainer.className = "input-container";
        
        // input 요소 생성
        const input = document.createElement("input");
        input.setAttribute("list", `characters-${index}`);
        input.className = "party-name-input";
        input.value = partyMembers[index].name;
        input.placeholder = "선택 또는 입력";
        
        // datalist 생성
        const datalist = document.createElement("datalist");
        datalist.id = `characters-${index}`;
        
        // 캐릭터 옵션 추가
        const characterOptions = index === 4 ? characterList.supportParty : characterList.mainParty;
        characterOptions.forEach(char => {
          const option = document.createElement("option");
          option.value = char;
          datalist.appendChild(option);
        });
        
        // clear 버튼 생성
        const clearBtn = document.createElement("button");
        clearBtn.className = "clear-input";
        clearBtn.textContent = "×";
        clearBtn.addEventListener("click", () => {
          input.value = "";
          const oldName = partyMembers[index].name;
          partyMembers[index].name = "";
          
          // 해당 캐릭터의 자동 액션 삭제
          turns.forEach(turn => {
            turn.actions = turn.actions.filter(action => 
              action.type === 'manual' || action.character !== oldName
            );
          });
          
          updateAutoActions();
          updatePartyImages();
          renderTurns();
          input.focus();
        });
        
        // 요소들을 컨테이너에 추가
        inputContainer.appendChild(input);
        inputContainer.appendChild(clearBtn);
        
        // select를 새로운 input container로 교체
        nameSelect.parentNode.replaceChild(inputContainer, nameSelect);
        div.appendChild(datalist);
        
        // input 이벤트 리스너 수정
        input.addEventListener("change", (e) => {
          const oldName = partyMembers[index].name;
          const selectedName = e.target.value;
          const currentRitual = ritualSelect.value;
          partyMembers[index].name = selectedName;
          
          // 턴 데이터에서 해당 캐릭터 업데이트
          turns.forEach(turn => {
            turn.actions.forEach(action => {
              if (action.character === oldName) {
                action.character = selectedName || "";
              }
            });
          });
          
          // 원더일 경우 의식과 주 계시 비활성화
          if (selectedName === "원더") {
            ritualSelect.disabled = true;
            ritualSelect.value = "0";
            mainRevSelect.disabled = true;
            mainRevSelect.value = "";
            subRevSelect.disabled = true;
            subRevSelect.value = "";
            
            partyMembers[index].ritual = "0";
          } else {
            ritualSelect.disabled = false;
            mainRevSelect.disabled = false;
            
            // 캐릭터의 기본 계시 값 설정
            if (characterData[selectedName]) {
              const charData = characterData[selectedName];
              
              // 주 계시 설정
              if (charData.main_revelation) {
                mainRevSelect.value = charData.main_revelation;
                
                // 일월성진 옵션 설정
                if (revelationData.main[charData.main_revelation]) {
                  subRevSelect.disabled = false;
                  subRevSelect.innerHTML = '<option value="">-</option>';
                  revelationData.main[charData.main_revelation].forEach(subRev => {
                    const opt = document.createElement("option");
                    opt.value = subRev;
                    opt.textContent = subRev;
                    subRevSelect.appendChild(opt);
                  });
                  
                  // 일월성진 값 설정
                  if (charData.sub_revelation) {
                    subRevSelect.value = charData.sub_revelation;
                  }
                }
              }
            }
            
            // 새로 선택된 캐릭터의 의식 패턴이 있는지 확인
            if (ritualPatterns[selectedName]) {
              const pattern = findPatternForLevel(selectedName, currentRitual);
              if (pattern) {
                turns.forEach((turn, turnIndex) => {
                    // 해당 캐릭터의 기존 자동 액션 제거
                    turn.actions = turn.actions.filter(action => 
                      !(action.type === 'auto' && action.character === selectedName)
                    );
                    
                    // 해당 턴의 패턴이 있고 빈 배열이 아닌 경우에만 액션 추가
                    if (pattern[turnIndex] && pattern[turnIndex].length > 0) {
                      pattern[turnIndex].forEach(actionData => {
                        if (actionData.order === 0) {
                          turn.actions.unshift({
                            type: 'auto',
                            character: selectedName,
                            action: actionData.type,
                            wonderPersona: "",
                            memo: ""
                          });
                        } else {
                          turn.actions.push({
                            type: 'auto',
                            character: selectedName,
                            action: actionData.type,
                            wonderPersona: "",
                            memo: ""
                          });
                        }
                    });
                  }
                });
              }
            }
            else{
              updateAutoActions();
            }
          }
          //updateAutoActions();
          updatePartyImages();
          renderTurns();
        });

        // input 직접 입력 이벤트도 추가
        input.addEventListener("input", (e) => {
          const selectedName = e.target.value;
          const currentRitual = ritualSelect.value;
          partyMembers[index].name = selectedName;
          
          // 원더일 경우 의식과 계시 비활성화
          if (selectedName === "원더") {
            ritualSelect.disabled = true;
            ritualSelect.value = "0";
            mainRevSelect.disabled = true;
            mainRevSelect.value = "";
            subRevSelect.disabled = true;
            subRevSelect.value = "";
            
            partyMembers[index].ritual = "0";
          } else {
            ritualSelect.disabled = false;
            mainRevSelect.disabled = false;
            
            // 새로 선택된 캐릭터의 의식 패턴이 있는지 확인
            if (ritualPatterns[selectedName]) {
              const pattern = findPatternForLevel(selectedName, currentRitual);
              if (pattern) {
                turns.forEach((turn, turnIndex) => {
                    // 해당 캐릭터의 기존 자동 액션 제거
                    turn.actions = turn.actions.filter(action => 
                      !(action.type === 'auto' && action.character === selectedName)
                    );
                    
                    // 해당 턴의 패턴이 있고 빈 배열이 아닌 경우에만 액션 추가
                    if (pattern[turnIndex] && pattern[turnIndex].length > 0) {
                      pattern[turnIndex].forEach(actionData => {
                        if (actionData.order === 0) {
                          turn.actions.unshift({
                            type: 'auto',
                            character: selectedName,
                            action: actionData.type,
                            wonderPersona: "",
                            memo: ""
                          });
                        } else {
                          turn.actions.push({
                            type: 'auto',
                            character: selectedName,
                            action: actionData.type,
                            wonderPersona: "",
                            memo: ""
                          });
                        }
                    });
                  }
                });
              }
            }
          }
          
          updateAutoActions();
          updatePartyImages();
          renderTurns();
        });
      }

      // 순서 변경 시 이벤트
      orderSelect.addEventListener("change", (e) => {
        const newOrder = e.target.value;
        const oldOrder = partyMembers[index].order;
        
        // 다른 멤버의 순서 조정
        if (newOrder !== "-") {
          const swappedMember = partyMembers.find(pm => pm.index !== index && pm.order === newOrder);
          if (swappedMember) {
            swappedMember.order = oldOrder;
            const otherSelect = document.querySelector(
              `.party-member[data-index="${swappedMember.index}"] .party-order`
            );
            if (otherSelect) otherSelect.value = oldOrder;
          }
        }
        
        partyMembers[index].order = newOrder;
        
        // 턴 데이터의 순서 업데이트
        turns.forEach(turn => {
          // 1. 순서 변경이 불가한 액션들 분리
          const fixedActions = turn.actions.filter(action => 
            action.action === 'HIGHLIGHT' || 
            action.action === 'ONE MORE' ||
            partyMembers.find(pm => pm.name === action.character)?.index === 4
          );
          
          // 2. 순서 변경이 가능한 액션들 분리
          const sortableActions = turn.actions.filter(action => 
            !fixedActions.includes(action)
          );
          
          // 3. 파티 순서대로 정렬
          const sortedParty = partyMembers
            .filter(pm => pm.name !== "" && pm.index !== 4)  // 해명 괴도 제외
            .sort((a, b) => {
              if (a.order === "-") return 1;
              if (b.order === "-") return -1;
              return parseInt(a.order, 10) - parseInt(b.order, 10);
            });
          
          // 4. 순서 변경이 가능한 액션들을 파티 순서대로 재정렬
          const sortedActions = [];
          sortedParty.forEach(member => {
            // 해당 캐릭터의 모든 액션을 순서대로 가져옴
            const characterActions = sortableActions.filter(a => a.character === member.name);
            sortedActions.push(...characterActions);  // 연속된 행동 순서 유지
          });
          
          // 5. 최종 액션 배열 구성
          // 고정 액션들은 원래 위치 유지, 정렬된 액션들 추가
          const finalActions = [];
          turn.actions.forEach(action => {
            if (fixedActions.includes(action)) {
              finalActions.push(action);
            }
          });
          finalActions.push(...sortedActions);
          
          turn.actions = finalActions;
        });
        
        updatePartyImages();
        renderTurns();
      });

      // 의식 변경 이벤트 리스너 수정
      ritualSelect.addEventListener("change", (e) => {
        const newRitual = e.target.value;
        const characterName = partyMembers[index].name;
        partyMembers[index].ritual = newRitual;
        
        if (ritualPatterns[characterName]) {
          const pattern = findPatternForLevel(characterName, newRitual);
          if (pattern) {
            turns.forEach((turn, turnIndex) => {
              // 해당 캐릭터의 기존 자동 액션 제거
              turn.actions = turn.actions.filter(action => 
                !(action.type === 'auto' && action.character === characterName)
              );
              
              // 해당 턴의 패턴이 있고 빈 배열이 아닌 경우에만 액션 추가
              if (pattern[turnIndex] && pattern[turnIndex].length > 0) {
                pattern[turnIndex].forEach(actionData => {
                  if (actionData.order === 0) {
                    turn.actions.unshift({
                      type: 'auto',
                      character: characterName,
                      action: actionData.type,
                      wonderPersona: "",
                      memo: ""
                    });
                  } else {
                    turn.actions.push({
                      type: 'auto',
                      character: characterName,
                      action: actionData.type,
                      wonderPersona: "",
                      memo: ""
                    });
                  }
                });
              }
            });
            
            renderTurns();
          }
        }
        
        updatePartyImages();
      });
    });

  }
  