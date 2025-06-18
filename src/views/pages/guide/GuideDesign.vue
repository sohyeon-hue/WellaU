<template>
    <div class="guide-wrapper">
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">INPUT</h2>
            <!-- area -->
            <div class="area-box">
                <h3>기본 INPUT</h3>
                <div class="view">
                    <a-input v-model:value="basicTextField" class="wellau-input" placeholder="입력하세요" :allowClear="true" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>기본 INPUT DISABLED</h3>
                <div class="view">
                    <a-input v-model:value="basicTextField" class="wellau-input" placeholder="입력하세요" :allowClear="true" disabled />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SMALL INPUT</h3>
                <div class="view">
                    <a-input v-model:value="basicTextField" class="wellau-input small-size" placeholder="입력하세요" :allowClear="true" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SMALL INPUT DISABLED</h3>
                <div class="view">
                    <a-input v-model:value="basicTextField" class="wellau-input small-size" placeholder="입력하세요" :allowClear="true" disabled />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>비밀번호 INPUT</h3>
                <div class="view">
                    <a-input-password v-model:value="passwordTextField" class="wellau-input" placeholder="비밀번호" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>비밀번호 INPUT DISABLED</h3>
                <div class="view">
                    <a-input-password v-model:value="passwordTextField" class="wellau-input" placeholder="비밀번호" disabled />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SMALL SIZE 비밀번호 INPUT</h3>
                <div class="view">
                    <a-input-password v-model:value="passwordTextField" class="wellau-input small-size" placeholder="비밀번호" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SMALL SIZE 비밀번호 INPUT DISABLED</h3>
                <div class="view">
                    <a-input-password v-model:value="passwordTextField" class="wellau-input small-size" placeholder="비밀번호" disabled />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT 하단 시간</h3>
                <div class="view">
                    <div class="check-code-input-box"><!-- 241211 disabled 시 disabled 클래스 추가해 주세요 -->
                        <a-input class="wellau-input" placeholder="인증코드 입력" :disabled="false" />
                        <span>1분 1초</span>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT 하단 시간 & 입력제한</h3>
                <div class="view">
                    <div class="check-code-input-box"><!-- 241211 disabled 시 disabled 클래스 추가해 주세요 -->
                        <MaxInput v-model:value="maxValue" :maxlength="maxlength" :placeholder="maxInputPlaceholder" :disabled="false" @input="maxInputEvent" @enterEv="maxInputEnterEvent" />
                        <span>{{time.m}}분 {{time.s}}초</span>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT 상단 텍스트1</h3>
                <div class="view">
                    <p class="content-text-info">신규 비밀번호를 입력해 주세요</p>
                    <a-input-password class="wellau-input" placeholder="신규 비밀번호" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT 상단 텍스트2</h3>
                <div class="view">
                    <div class="setting-box-top">
                        <div class="top">
                            <p  class="content-text-info">그룹명 설정</p>
                            <a-input v-model:value="textFieldName" class="wellau-input" placeholder="그룹명" />
                        </div>
                        <div class="both">
                            <p  class="content-text-info">그룹원 설정</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT SEARCH</h3>
                <div class="view">
                    <SearchInput v-model:value="searchTextField" :placeholder="searchPlaceholder" @input="searchInputEv" @enter="searchEnterEv" @searchIcon="searchIconEv" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT SEARCH DISABLEd</h3>
                <div class="view">
                    <SearchInput v-model:value="searchTextField" :placeholder="searchPlaceholder" @input="searchInputEv" @enter="searchEnterEv" @searchIcon="searchIconEv" disabled />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>검색</h3>
                <div class="view">
                    <div class="search-info-text-box" style="padding-top:20rem;">
                        <span>근접 알림을 사용할 인원을 선택해주세요.</span>
                        <SearchInput v-model:value="textField" placeholder="검색" />
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>CHECKBOX</h3>
                <div class="view">
                    <div class="checkbox-list">
                        <div class="total">
                            <a-checkbox v-model:checked="allCheck.checked" class="wellau-checkbox sizeBig" :disabled="allCheck.dis" @change="allCheckChangeEv">전체동의</a-checkbox>
                        </div>
                        <ul class="list">
                            <li>
                                <a-checkbox v-model:checked="check[0].checked" class="wellau-checkbox" :disabled="check[0].dis"  @change="checkChangeEv">[필수] 서비스 이용약관 동의</a-checkbox>
                            </li>
                            <li>
                                <a-checkbox v-model:checked="check[1].checked" class="wellau-checkbox" :disabled="check[1].dis"  @change="checkChangeEv">[필수] 위치기반 서비스 이용약관 동의</a-checkbox>
                            </li>
                            <li>
                                <a-checkbox v-model:checked="check[2].checked" class="wellau-checkbox" :disabled="check[2].dis"  @change="checkChangeEv">[필수] 개인정보 처리방침 동의</a-checkbox>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>RADIO</h3>
                <div class="view">
                    <div class="radio-list-style-box">
                        <a-radio-group v-model:value="radio" @change="radioChange" class="wellau-radio-group">
                            <a-radio class="wellau-radio" :value="0">긴급 상황입니다.</a-radio>
                            <a-radio class="wellau-radio" :value="1">010-000-0000 번호로 연락 주세요.</a-radio>
                            <a-radio class="wellau-radio" :value="2">다쳤어요, 도움이 필요해요.</a-radio>
                            <a-radio class="wellau-radio" :value="3"><div class="click-dummy-box" v-if="radio !== 3"></div><MaxInput v-model:value="radioTextField" :maxlength="10" placeholder="10자 이내" :disabled="radioTextFieldDisabled" @input="radioTextFieldInput" @enterEv="radioTextFieldEnter" ref="radioInputRef" inputSmall /><!-- 241212 inputSmall 추가 --></a-radio>
                            
                        </a-radio-group>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SET(하나인경우 + 타이틀)</h3>
                <div class="view">
                    <p  class="content-text-info">성별을 선택해주세요</p>
                    <div class="sleect-set">
                        <div class="wrapper-select-set">
                            <div class="wrapper-select-set-list">
                                <a-select v-model:value="selectSex" :showArrow="false" class="wellau-select" placeholder="성별" :options="optionsSex"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SETSELECT SET(세개인경우)</h3>
                <div class="view">
                <div class="sleect-set">
                    <div class="wrapper-select-set">
                        <div class="wrapper-select-set-list">
                            <a-select v-model:value="selectYear" :showArrow="false" class="wellau-select" placeholder="년" :options="optionsYear" @change="setDate"/>
                        </div>
                        <div class="wrapper-select-set-list">
                            <a-select v-model:value="selectMonth" :showArrow="false" class="wellau-select" placeholder="월" :options="optionsMonth" @change="setDate"/>
                        </div>
                        <div class="wrapper-select-set-list">
                            <a-select v-model:value="selectDate" :showArrow="false" class="wellau-select" placeholder="일" :options="optionsDate"/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SETSELECT SET(세개인경우 + 타이틀)</h3>
                <div class="view">
                    <p  class="content-text-info">생일을 입력해주세요</p>
                    <div class="sleect-set">
                        <div class="wrapper-select-set">
                            <div class="wrapper-select-set-list">
                                <a-select v-model:value="selectYear" :showArrow="false" class="wellau-select" placeholder="년" :options="optionsYear" @change="setDate"/>
                            </div>
                            <div class="wrapper-select-set-list">
                                <a-select v-model:value="selectMonth" :showArrow="false" class="wellau-select" placeholder="월" :options="optionsMonth" @change="setDate"/>
                            </div>
                            <div class="wrapper-select-set-list">
                                <a-select v-model:value="selectDate" :showArrow="false" class="wellau-select" placeholder="일" :options="optionsDate"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SLIDER</h3>
                <div class="view">
                    <div class="slider-box positionNone">
                        <a-slider v-model:value="inputValue1" :min="1" :max="20" :tip-formatter="null" class="wellau-slider" />
                        <div class="unit">
                            <span class="l">1km</span>
                            <span class="r">5km</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SLIDER</h3>
                <div class="view">
                    <div class="title-info-style" style="margin-top:30rem;">
                        <div class="l">
                            <div class="tit">근접 알림 범위 설정</div>
                            <div class="info">근접 알림 범위는 최대 5km 까지 가능해요.</div>
                        </div>
                    </div>
                    <div class="slider-box positionNone">
                        <a-slider v-model:value="inputValue1" :min="1" :max="20" :tip-formatter="null" class="wellau-slider" />
                        <div class="unit">
                            <span class="l">1km</span>
                            <span class="r">5km</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SLIDER</h3>
                <div class="view">
                    <div class="title-info-style" style="margin-top:30rem;">
                        <div class="l">
                            <div class="tit">근접 알림 범위 설정</div>
                            <div class="info">근접 알림 범위는 최대 5km 까지 가능해요.</div>
                        </div>
                    </div>
                    <div class="slider-box positionNone">
                        <a-slider v-model:value="inputValue1" :min="1" :max="20" :tip-formatter="null" class="wellau-slider" />
                        <div class="unit">
                            <span class="l">1km</span>
                            <span class="r">5km</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">BUTTON</h2>
            <!-- area -->
            <div class="area-box">
                <h3>기본 버튼</h3>
                <div class="view">
                    <a-button class="wellau-btn">버튼</a-button>
                    <a-button class="wellau-btn" disabled>버튼</a-button>
                    <a-button class="wellau-btn small-size">버튼</a-button>
                    <a-button class="wellau-btn small-size" disabled>버튼</a-button>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>PRIMARY 버튼</h3>
                <div class="view">
                    <a-button type="primary" class="wellau-btn">버튼</a-button>
                    <a-button type="primary" class="wellau-btn" disabled>버튼</a-button>
                    <a-button type="primary" class="wellau-btn small-size">버튼</a-button>
                    <a-button type="primary" class="wellau-btn small-size" disabled>버튼</a-button>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>버튼 set 타입1-1</h3>
                <div class="view">
                    <div class="btn-set">
                        <a-button class="wellau-btn">그룹 참여하기</a-button>
                        <a-button class="wellau-btn">새로운 그룹 생성하기</a-button>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>버튼 set 타입1-2</h3>
                <div class="view">
                    <div class="btn-set">
                        <a-button class="wellau-btn small-size">버튼1</a-button>
                        <a-button type="primary" class="wellau-btn">버튼2</a-button>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>버튼 set 타입2</h3>
                <div class="view">
                    <div class="btn-set horizontal">
                        <a-button class="wellau-btn">계속하기</a-button>
                        <a-button class="wellau-btn">공유하기</a-button>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>하단 텍스트가 있는경우 1</h3>
                <div class="view">
                    <div class="btn-set">
                        <a-button class="wellau-btn">계속하기</a-button>
                    </div>
                    <div class="btn-info-text-both">
                        가입 코드를 전송합니다.
                    </div>
                </div>
            </div>
            <div class="area-box">
                <h3>하단 텍스트가 있는경우 2</h3>
                <div class="view">
                    <div class="btn-set">
                        <a-button class="wellau-btn">계속하기</a-button>
                    </div>
                    <div class="btn-info-text-both color-black">
                        가입 코드를 전송합니다.
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>그룹원 추가 버튼</h3>
                <div class="view">
                     <a-button class="wellau-btn addGroupPersonBtn">+ 그룹원 추가 하기</a-button>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>그룹원 추가 버튼 - PRIMARY</h3>
                <div class="view">
                     <a-button type="primary" class="wellau-btn addGroupPersonBtn">+ 그룹원 추가 하기</a-button>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>ICON BUTTON BOX</h3>
                <div class="view">
                    <IconButtonBox icon="sharing" />
                    <IconButtonBox icon="record" />
                    <IconButtonBox icon="search" />
                    <IconButtonBox icon="alert" />
                    <IconButtonBox icon="tell" />
                    <IconButtonBox icon="text" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>ICON BUTTON BOX - DISABLED</h3>
                <div class="view">
                    <IconButtonBox icon="sharing" disabled />
                    <IconButtonBox icon="record" disabled />
                    <IconButtonBox icon="search" disabled />
                    <IconButtonBox icon="alert" disabled />
                    <IconButtonBox icon="tell" disabled />
                    <IconButtonBox icon="text" disabled />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>ICON BUTTON BOX - 버튼SET(2개인 경우)</h3>
                <div class="view">
                    <div class="btn-set horizontal sb">
                        <IconButtonBox icon="sharing" />
                        <IconButtonBox icon="record" />
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>ICON BUTTON BOX - 버튼SET(4개인 경우)</h3>
                <div class="view">
                    <div class="btn-set horizontal sb">
                        <IconButtonBox icon="tell" />
                        <IconButtonBox icon="text" />
                        <IconButtonBox icon="sharing" />
                        <IconButtonBox icon="record" />
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>ICON BUTTON</h3>
                <div class="view">
                    <IconButton icon="phone" :disabled="true" @click="iconButtonClick" />
                    <!-- <IconButton icon="text" @click="iconButtonClick" /> -->
                    <IconButton icon="sharing" @click="iconButtonClick" />
                </div>
            </div>
        </div>
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">DUMMY INPUT</h2>
            <!-- area -->
            <div class="area-box">
                <h3>DUMMY 프로필 DATE</h3>
                <div class="view">
                    <div class="mark-time-box">
                        <i class="mark-circle">
                            <!-- <img :src="img.src" :alt="img.alt" v-if="img.src !== '' && img.src !== null && img.src !== undefined" /> -->
                        </i>
                        <div class="date">
                            2024년 09월 13일<i></i>
                        </div>
                        <div class="time">
                            13시<i></i>
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>DUMMY TIME PICKER </h3>
                <div class="view">
                    <div class="time-picker-area">
                        <div class="to">
                            <span class="ampm">오전</span><span class="h">9</span>:<span class="m">00</span>
                        </div>
                        <i>~</i>
                        <div class="from">
                            <span class="ampm">오후</span><span class="h">18</span>:<span class="m">00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">TITLE</h2>
            <!-- area -->
            <div class="area-box">
                <h3>타이틀 타입1</h3>
                <div class="view">
                    <div class="title-wrappper">
                        <h2 class="title">
                            아래 그룹이 맞나요?<br />
                            입장 전 그룹원들에게 공개할 내 정보를 선택하세요
                        </h2>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>타이틀 타입2</h3>
                <div class="view">
                    <div class="title-both-line">
                        계정 세부 정보
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>타이틀 타입3</h3>
                <div class="view">
                    <div class="title-center-type">SOS</div>
                </div>
            </div>
        </div>
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">INFO TEXT</h2>
            <!-- area -->
            <div class="area-box">
                <h3>제목 안내 스타일1-1</h3>
                <div class="view">
                    <div class="title-info-style">
                        <div class="l">
                            <div class="tit">내 프로필 공개</div>
                            <div class="info">그룹원에게 내 프로필 사진을 공개합니다.  비활성 시 기본 프로필 아이콘이 노출됩니다.</div>
                        </div>
                    </div>
                    <div class="title-info-style">
                        <div class="l">
                            <div class="tit">내 프로필 공개</div>
                            <div class="info">그룹원에게 내 프로필 사진을 공개합니다.  비활성 시 기본 프로필 아이콘이 노출됩니다.</div>
                        </div>
                        <div class="r"><a-switch class="wellau-switch big-size" v-model:checked="infoTextSwitch" /></div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>제목 안내 스타일1-2</h3>
                <div class="view">
                    <div class="blue-bg-box">
                        <div class="title-info-style">
                            <div class="l">
                                <div class="tit">내 프로필 공개</div>
                                <div class="info">그룹원에게 내 프로필 사진을 공개합니다.  비활성 시 기본 프로필 아이콘이 노출됩니다.</div>
                            </div>
                            <div class="r"><a-switch v-model:checked="termsChecked1" class="wellau-switch big-size" /></div>
                        </div>
                        <div class="title-info-style">
                            <div class="l">
                                <div class="tit">내 연락처 공개</div>
                                <div class="info">그룹원에게 내 연락처를 공개합니다. 비활성 시 그룹장을 제외한 그룹원에게 연락처가 노출되지 않으며 통화연결이 되지 않습니다.</div>
                            </div>
                            <div class="r"><a-switch v-model:checked="termsChecked2" class="wellau-switch big-size" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>제목 안내 스타일1-3</h3>
                <div class="view">
                    <div class="setting-box-top">
                        <div class="top">
                            <div class="title-info-style">
                                <div class="l">
                                    <div class="tit">비활동 감지 기능 설정</div>
                                    <div class="info">사용자가 하루동안 일정거리 이상 이동하지 않을 경우 그룹원에게 푸시가 발송돼요.</div>
                                </div>
                                <div class="r"><a-switch class="wellau-switch big-size" /></div>
                            </div>
                        </div>
                        <div class="both">
                            <div class="title-info-style">
                                <div class="l">
                                    <div class="tit">전체 선택</div>
                                </div>
                                <div class="r"><a-switch class="wellau-switch big-size" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- area -->
            <div class="area-box">
                <h3>제목 안내 스타일1-4</h3>
                <div class="view">
                    <div class="title-info-style">
                        <div class="l">
                            <div class="tit">대상</div>
                            <div class="info big">김응삼</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>제목 안내 스타일2(가운데정럴)</h3>
                <div class="view">
                    <div class="both-text-info">
                        <b>전송할 메시지가 있을 시 선택하세요</b><br />
                        (현재 해당 그룹 연락처 미공개 상태입니다)
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>링크 스타일</h3>
                <div class="view">
                    <div class="link-box-area-arrow">
                        <div class="tit">휴대폰</div>
                        <div class="info">010-0000-1111</div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT 스타일</h3>
                <div class="view">
                    <div class="list-input-box">
                        <div class="tit">서비스 알림 받기</div>
                        <div class="input">
                            <a-switch v-model:checked="serviceAlert" class="wellau-switch big-size" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>아이콘 스타일</h3>
                <div class="view">
                    <div class="icon-title-info-box icon-map"><!-- icon-map icon-bell icon-img icon-camera -->
                        <div class="con">
                            <div class="tit">위치 권한(필수)</div>
                            <div class="info">위치 권한은 그룹 내 위치 공유, 안심존 알림, 근접 알림에 필요해요.</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>안심존 목록</h3>
                <div class="view">
                    <SafeZoneList v-for="(l,index) in 3" :key="'list_'+index" name="홍길동" nickname="집근처" address="서울시 송파구 장지동 59-83" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>주소</h3>
                <div class="view">   
                    <ul class="address-search-list">
                        <li v-for="(list,index) in 3" :key="'address_'+index">
                            <div class="t">
                                서울시 용산구 한강대로 23 (한강로3가)
                            </div>
                            <div class="b">
                                서울시 용산구 한강로3번 40-19
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>라벨이 작은 리스트</h3>
                <div class="view">
                    <div class="label-text-box">
                        <dl>
                            <dt>대상</dt>
                            <dd>대상</dd>
                        </dl>
                        <dl>
                            <dt>이름</dt>
                            <dd>집근처</dd>
                        </dl>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>라벨 입력 값</h3>
                <div class="view">
                    <div class="label-text-area">
                        <div class="label">그룹명</div>
                        <div class="text">홍길동 가족방</div>
                    </div>
                    <div class="label-text-area">
                        <div class="label">그룹장</div>
                        <div class="text">홍길동</div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>내정보 계정 세부 정보</h3>
                <div class="view">
                    <div class="myProfile-info-box">
                        <div class="title-both-line">
                            계정 세부 정보
                        </div>
                        <div class="link-box-area-arrow">
                            <div class="tit">휴대폰</div>
                            <div class="info">010-0000-1111</div>
                        </div>
                        <div class="link-box-area-arrow">
                            <div class="tit">생년월일</div>
                            <div class="info">2000-01-01</div>
                        </div>
                        <div class="link-box-area-arrow">
                            <div class="tit">비밀번호 변경</div>
                            <div class="info">********</div>
                        </div>
                        <div class="title-both-line">
                            알림 설정
                        </div>
                        <div class="list-input-box">
                            <div class="tit">서비스 알림 받기</div>
                            <div class="input">
                                <a-switch v-model:checked="serviceAlert" class="wellau-switch big-size" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">PROFILE</h2>
            <!-- area -->
            <div class="area-box">
                <h3>Default</h3>
                <div class="view">
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :battery="60" king birthday bg></ProfileBox>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>Default</h3>
                <div class="view">
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>이름만</h3>
                <div class="view">
                    <ProfileBox name="홍길동" :img="img1" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>오른쪽 체크박스1</h3>
                <div class="view">
                    <ProfileBox name="홍길동" :img="img1">
                        <template #rightArea>
                            <a-switch class="wellau-switch big-size" v-model:checked="switchChecked" />
                        </template>
                    </ProfileBox>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>오른쪽 체크박스2</h3>
                <div class="view">
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1">
                        <template #rightArea>
                            <a-switch class="wellau-switch big-size" v-model:checked="switchChecked" />
                        </template>
                    </ProfileBox>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>오른쪽 아이콘1</h3>
                <div class="view">
                    <ProfileBox name="김응삼" conText="위치 공유 중">
                        <template #rightArea>
                            <IconButton icon="sharing" />
                        </template>
                    </ProfileBox>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>오른쪽 아이콘1</h3>
                <div class="view">
                    <ProfileBox name="김응삼">
                        <template #rightArea>
                            <IconButton icon="group" />
                            <IconButton icon="minus" />
                        </template>
                    </ProfileBox>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>베터리1</h3>
                <div class="view">
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1" :battery="75" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>베터리2</h3>
                <div class="view">
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1" :battery="75" by2 />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>내정보 </h3>
                <div class="view">
                    <div class="profile-phto-box">
                        <div class="photo">
                            <div class="circle">
                            </div>
                            <i class="edit-icon"></i>
                        </div>
                        <div class="name">
                            홍길동<i class="edit-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">ETC</h2>
            <!-- area -->
            <div class="area-box">
                <h3>TIMER CIRCLE1</h3>
                <div class="view">
                    <CounterBox :angle="60" code="DKE3FE" date="1일 23:36:58" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>TIMER CIRCLE1</h3>
                <div class="view">
                    <div class="number-info-box">
                        <div class="title-center-type-info">그룹원에게 내 위치를 전송합니다.</div>
                        <div class="counter-circle">
                            <TimeCircle :num="TimeCircleNum" :time="TimeCircleTime" @timeout="TimeCircleTimeout" :infoText="TimeCircleInfoText" ref="timer" @click="TimeCircleClickStop" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>STEP BOX</h3>
                <div class="view">
                    <StepBox :list="stepList" :step="stepStep" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>MAP MARK PIN</h3>
                <div class="view">
                    <MapMarkPin :index="1" :checked="true" />
                    <MapMarkPin :index="2" :checked="false" />
                    <MapMarkPin :index="3" :checked="false" />
                    <MapMarkPin :index="4" :checked="false" />
                    <MapMarkPin :index="5" :checked="false" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>Select</h3>
                <div>listSelectBoxValue : {{listSelectBoxValue}}</div>
                <div class="view">
                    <ListSelectBox v-model:value="listSelectBoxValue" title="그룹을 선택해주세요." buttonText="+ 그룹 만들기" :list="listSelectBoxList" @listClick="listSelectBoxListClick" @btnClick="listSelectBoxBtnClick" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>이용약관 TEXT BOX</h3>
                <div class="view">
                    <div class="bg-gray-info-box">
                        <div class="bg-gray-info-box-scroll">
                            여러분을 환영합니다.<br />
                            WellaU 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 WellaU 서비스의 이용과 관련하여 WellaU 서비스를 제공하는 블루칩씨앤에스와 이를 이용하는 WellaU 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 WellaU 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.<br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SOS 안내</h3>
                <div class="view">
                    <div class="state-ingo-message-box">
                        전송할 메세지를 선택할 수 있습니다
                    </div>
                    <div class="state-ingo-message-box alert">
                        현재 해당 그룹 연락처 미공개 상태입니다
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SOS 안내</h3>
                <div class="view">
                    <div class="sos-center-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">
                            <path d="M7.98094 9.29897C7.19031 8.75395 6.11937 8.9749 5.5875 9.79243C5.05562 10.61 5.27125 11.7 6.06906 12.245L9.51906 14.6018C10.3097 15.1469 11.3806 14.9259 11.9125 14.1084C12.4444 13.2909 12.2288 12.2008 11.4309 11.6558L7.98094 9.29897ZM45.9309 12.245C46.7216 11.7 46.9372 10.6026 46.4125 9.79243C45.8878 8.98227 44.8097 8.76132 44.0191 9.29897L40.5691 11.6558C39.7784 12.2008 39.5628 13.2982 40.0875 14.1084C40.6122 14.9185 41.6903 15.1395 42.4809 14.6018L45.9309 12.245ZM4.725 20.7885C3.76906 20.7885 3 21.5766 3 22.5561C3 23.5357 3.76906 24.3238 4.725 24.3238H9.325C10.2809 24.3238 11.05 23.5357 11.05 22.5561C11.05 21.5766 10.2809 20.7885 9.325 20.7885H4.725ZM42.675 20.7885C41.7191 20.7885 40.95 21.5766 40.95 22.5561C40.95 23.5357 41.7191 24.3238 42.675 24.3238H47.275C48.2309 24.3238 49 23.5357 49 22.5561C49 21.5766 48.2309 20.7885 47.275 20.7885H42.675ZM26 9.00436C19.6462 9.00436 14.5 14.2778 14.5 20.7885V32.5727H37.5V20.7885C37.5 14.2778 32.3538 9.00436 26 9.00436ZM20.25 20.7885C20.25 21.4366 19.7325 21.9669 19.1 21.9669C18.4675 21.9669 17.95 21.4366 17.95 20.7885C17.95 16.2295 21.5509 12.5396 26 12.5396C26.6325 12.5396 27.15 13.0699 27.15 13.718C27.15 14.3662 26.6325 14.8964 26 14.8964C22.8231 14.8964 20.25 17.5331 20.25 20.7885ZM9.9 37.2863V39.6432C9.9 40.9468 10.9278 42 12.2 42H39.8C41.0722 42 42.1 40.9468 42.1 39.6432V37.2863C42.1 35.9827 41.0722 34.9295 39.8 34.9295H12.2C10.9278 34.9295 9.9 35.9827 9.9 37.2863Z" fill="#FF3B2E"/>
                        </svg>
                        <div class="big-alert-text-box">
                            000-0000-0000<br />
                            번호로 연락 주세요.
                        </div>
                        <div class="both-text-info">
                            그룹원에게 내 위치를 전달했습니다.<br />
                            SOS를 취소하고 싶을 경우 취소 버튼을 눌러주세요.
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>ACCORDION</h3>
                <div class="view">
                    <AccordionBox v-model:open="accordionOpen" :list="accordionList" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>팝업 상세 안내</h3>
                <div class="view">
                    <p class="popup-content">
                        <span class="popup-content-tit">운영시간</span><br />
                        <span class="popup-content-info">월~일 : 10:30 - 22:00</span><br />
                        <br />
                        캠핑데이POP-UP Coming soon<br />
                        <br />
                        뜨거운 인기와 함께 바캉스를 가는 친구들!<br />
                        선선한 가을바람이 불어올 10월, 더욱 특별한 캠핑이 준비되어 있다고 하는데..!!<br />
                        <br />
                        성수동에서 11월 18일에 만나요!<br />
                        <br />
                        <span class="popup-content-tit">주소</span><br />
                        <span class="popup-content-info">서울시 성동구 아차산로 77길</span>
                    </p>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>Modal Select</h3>
                <div>
                    listSelectBoxValue : {{listSelectBoxValue}}<br />
                    <a-button class="wellau-btn small-size" @click="modalOpen">OPEN</a-button>
                </div>
                <div class="view">
                    <!-- modal -->
                    <ModalBox v-model:modalShow="modalShow" :padding="0">
                        <ListSelectBox v-model:value="listSelectBoxValue" title="그룹을 선택해주세요." buttonText="+ 그룹 만들기" :outLine="false" :list="listSelectBoxList" @listClick="listSelectBoxListClick" @btnClick="listSelectBoxBtnClick" />
                    </ModalBox>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>기본 MODAL</h3>
                <div>
                    <a-button class="wellau-btn small-size" @click="aModalOpen(0)">권한 횽</a-button>
                    <a-button class="wellau-btn small-size" @click="aModalOpen(1)">위치 권한 허용</a-button>
                    <a-button class="wellau-btn small-size" @click="aModalOpen(2)">등록된 이름 일치하지 않음</a-button>
                </div>
                <div class="view">
                    <a-modal v-model:open="aModalShow[0]" title="" class="wellau-modal" style="width:240rem;">
                        <p class="modal-title align-center">권한 허용</p>
                        <p class="modal-content">
                            WellaU를 이용하기 위해서 <br />
                            필수 권한이 필요해요. <br />
                            앱 설정 > 권한에서 필수 권한을  <br />
                            허용으로 선택해주세요.
                        </p>
                        <template #footer>
                            <div class="btn-set horizontal">
                                <a-button @click="aModalClose(0)">설정으로 이동</a-button>
                            </div>
                        </template>
                    </a-modal>
                    <a-modal v-model:open="aModalShow[1]" title="" class="wellau-modal" style="width:280rem;">
                        <p class="modal-title align-center">위치 권한 허용</p>
                        <p class="modal-content">친구들과 위치를 공유하기 위해서 위치권한을 ‘항상허용＇으로 설정해야해요</p>
                        <div class="img-dummy">
                            <img :src="src" alt="" />
                        </div>
                        <template #footer>
                            <div class="btn-set horizontal">
                                <a-button type="primary" class="wellau-btn" @click="aModalClose(1)">설정으로 이동</a-button>
                            </div>
                        </template>
                    </a-modal>
                    <a-modal v-model:open="aModalShow[2]" title="" class="wellau-modal" style="width:280rem;">
                        <p class="modal-title align-center">등록된 이름 또는 휴대폰 번호가 일치하지 않습니다.</p>
                        <p class="modal-content">등록정보 확인 및 비밀번호 재설정 실패 관련 안내는 02-2057-2678로 문의 바랍니다.</p>
                        <template #footer>
                            <div class="btn-set horizontal">
                                <a-button class="wellau-btn" @click="aModalClose(2)">확인</a-button>
                            </div>
                        </template>
                    </a-modal>
                </div>
            </div>
        </div>
    </div>






</template>
<script setup>
    import {ref} from 'vue'
    import CounterBox from '@components/CounterBox'
    import TimeCircle from '@components/TimeCircle'
    /* input */
    const basicTextField = ref("");
    const passwordTextField = ref("");
    const maxValue = ref("");
    const maxlength = ref(6);
    const maxInputPlaceholder = ref("인증번호 입력​");
    const maxInputEvent = ()=>{}
    const maxInputEnterEvent = ()=>{}
    const time = ref({
                m : 3,
                s : 0,
    })

    /* search input */

    const searchTextField = ref("");
    const searchPlaceholder = ref("placeholder");

    const searchEnterEv = (val)=>{
        console.log("parent enter : ",val)
    }
    const searchIconEv = (val)=>{
        console.log("parent searchIcon : ",val)
    }
    const searchInputEv = (val)=>{
        console.log("parent input : ",val)
    }


    /* checkbox */

    const allCheck = ref({checked:false,dis:false})
    const check = ref([
        {checked:false,dis:false},
        {checked:false,dis:false},
        {checked:false,dis:false},
    ])

    const allCheckChangeEv = ()=>{
        const checked = allCheck.value.checked;
        check.value.forEach((c)=>{
            c.checked = checked;
        })
    }
    const checkChangeEv = ()=>{
        let checked = true;
        for(let i=0; i<check.value.length; i++){
            const c = check.value[i];
            if(c.checked === false){
                checked = false;
                break;
            }
        }
        allCheck.value.checked = checked;
    }

    /* radio */
    const radio = ref(0);
    const radioTextField = ref("");
    const radioTextFieldDisabled = ref(true);
    const radioChange = ($ev)=>{
        const val = $ev.target.value;
        if(val === 3){
            radioTextFieldDisabled.value = false;
            setTimeout(()=>{
                radioInputRef.value.focus();
            },250)
        }else{
            radioTextFieldDisabled.value = true
        }
    }
    const radioInputRef = ref();
    const radioTextFieldInput = ()=>{}
    const radioTextFieldEnter = ()=>{}


    /* select */
    const selectSex = ref(undefined);
    const optionsSex = [{value:"남"},{value:"여"}];
    const selectYear = ref(undefined);
    let optionsYear = []
    for(let i=new Date().getFullYear(); i>=1900; i--){
        optionsYear.push({
            value : (i + 1) + "년"
        })
    }
    const selectMonth = ref(undefined);
    let optionsMonth = [];
    for(let i=0; i<11; i++){
        optionsMonth.push({
            value : (i + 1) + "월"
        })
    }
    const selectDate = ref(undefined);
    const optionsDate = ref([]);
    const setDate = ()=>{
        selectDate.value = undefined;
        optionsDate.value = [];
        if(selectYear.value !== undefined && selectMonth.value !== undefined){
            const y = selectYear.value.replace(/\D/g,'');
            const m = selectMonth.value.replace(/\D/g,'');
            const setDate = new Date(y,m,0);
            for(let i=0; i<setDate.getDate(); i++){
                optionsDate.value.push({
                    value : (i + 1) + "일"
                })
            }
        }
    }
    /* info text */
    const infoTextSwitch = ref(false);
    const serviceAlert = ref(false);
    /* profile */
    const img1 = ref({
        src : require('@img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })
    const switchChecked = ref(false);

    /* ETC Select */
    const modalShow = ref(false);
    const listSelectBoxValue = ref("")
    const listSelectBoxList = ref([
        {
            text : "가족이랑",
            value : "가족이랑",
            checked : false,
        },
        {
            text : "친구들이랑",
            value : "친구들이랑",
            checked : false,
        },
        {
            text : "그룹1",
            value : "그룹1",
            checked : false,
        },
        {
            text : "그룹2",
            value : "그룹2",
            checked : false,
        },
        {
            text : "그룹3",
            value : "그룹3",
            checked : false,
        },
        {
            text : "그룹4",
            value : "그룹4",
            checked : false,
        },
        {
            text : "그룹5",
            value : "그룹5",
            checked : false,
        },
        {
            text : "그룹6",
            value : "그룹6",
            checked : false,
        },
        {
            text : "그룹7",
            value : "그룹7",
            checked : false,
        },
    ])
    const listSelectBoxListClick = ()=>{
        modalShow.value = false;
    }
    const listSelectBoxBtnClick = ()=>{
        modalShow.value = false;
    }
    const modalOpen = ()=>{
        modalShow.value = true;
    }
    /* BUTTON */

    const iconButtonClick = (icon)=>{
        console.log("icon : ",icon)
    }

    /* modal */
    const aModalShow = ref([false,false,false]);
    const aModalOpen = (index)=>{aModalShow.value[index] = true}
    const aModalClose = (index)=>{aModalShow.value[index] = false}
    const src = require('@img/pop-img-location.png')


    /* step box */

    const stepStep = ref(1);
    const stepList = ref([
        {
            time : "13:00:32",
            text : "서울시 용산로 한강대로 273(용산빌딩)산빌딩 산빌딩산빌딩산빌딩산빌딩 word-break",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
    ])

    /* a-slider */
    const inputValue1 = ref(1);


    /* timer */

    const TimeCircleNum = ref(9);
    const TimeCircleTime = ref(10000);
    const createNum = ()=>{
        let temp = -1;
        const innerFn = ()=>{
            temp = Math.floor(Math.random() * 10);
            if(temp === TimeCircleNum.value){
                innerFn();
            }
        }
        innerFn();
        return temp;
    }
    const TimeCircleTimeout = ()=>{
        const n = createNum();
        console.log("time event => ",n)
        TimeCircleNum.value = n;
    }
    const TimeCircleInfoText = ref("눌러서 즉시 전송");
    const timer = ref("timer");
    const TimeCircleClickStop = ()=>{
        const state = timer.value.getState();
        if(state){
            timer.value.pause();
        }else{
            timer.value.start();
        }
    }

    /* accordion */

    const accordionList = ref([])
    for(let i=0; i<3; i++){
        accordionList.value.push(
            {
                tit : '서비스 이용 약관 개정 안내',
                date : '2024.08.25',
                con : '안녕하세요. WellaU 입니다WellaU 서비스를 이용해주시는 회원 여러분께 감사드리며, WellaU 개인정보 처리방침 변경에 대한 안내 말씀 드립니다.<br />1. 변경 내용 <br /><br />• 키즈폰 서비스 종료에 따라 WellaU 서비스에서 수집하는 개인정보 항목을 현행화합니다.<br />• 디지털카드 서비스에서 수집하는 개인정보 항목을 현행화합니다.<br />• WellaU 계정을 사용하지 않는 티스토리 회원의 수집하는 개인정보 항목을 현행화합니다.<br />• 톡학생증 서비스의 제3자 제공 내역을 현행화합니다<br />• 문자메시지 발송 업무를 수행하는 수탁사를 현행화합니다.<br /><br />2. 변경 상세<br /><br />[변경전]<br />2. 개인정보 수집 > 서비스에서 별도로 수집하는 개인정보 항목(팝업) > WellaU<br />',
                show : true,
            },
        )
    }
    const accordionOpen = ref({index:-1,open:false});
</script>
<style type="scss" scoped>
    .guide-wrapper{
        height:100%;
        overflow:auto;
    }
    .guide-category-wrapper{
        border-bottom:2rem solid #ccc;
        padding:0 0 30rem 0;
        &+ .guide-category-wrapper{
            margin-top:50rem;
        }
    }
    .guide-tit-category{
        padding:0 0 15rem 0;
        font-size:20rem;
        font-weight:bold;
    }
    .area-box{
        &> h3{
            margin:0 0 20rem 0;
            padding:0 0 5rem 0;
            font-size:16rem;
            border-bottom:1px solid #ededed;
        }
        &+ .area-box{
          margin-top:45rem;
        }
    } 
</style>
