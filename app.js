/* ===== LOGIC START (pure data and functions, no DOM) ===== */
var CHECKED='13 and 14 November 2026';
var SRC={
  slots:'https://news.careers360.com/thousands-higher-ed-scholarship-slots-vacant-sc-st-obc-pm-yasasvi-usp-ishan-uday-dst-inspire-aicte-ugc-pg-nsp-portal-govt-data/amp',
  pib:'https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/jul/doc2026729936401.pdf',
  ls:'https://eparlib.sansad.in/bitstream/123456789/2995809/1/AU4063_vT5e0a.pdf',
  bt:'https://www.businesstoday.in/amp/education/story/collateral-free-loans-interest-subsidies-centre-puts-rs-1050-crore-into-education-loan-schemes-546001-2026-07-30',
  cms:'https://news.careers360.com/cms-education-survey-2025-four-in-ten-delhi-school-students-take-tuition-spend-twice-the-national-average/amp',
  aishe:'https://educationforallinindia.com/wp-content/uploads/2026/07/AISHE_2023-24.pdf',
  dpdp:'https://www.mondaq.com/india/privacy-protection/1709084/8-key-takeaways-the-digital-personal-data-protection-rules-2025',
  nsp:'https://scholarships.gov.in/'
};
var B4S='https://www.buddy4study.com/article/';
var STATES=[
 {id:'UP',n:'Uttar Pradesh',hi:'उत्तर प्रदेश',portal:'https://scholarship.up.gov.in/',src:B4S+'up-scholarship'},
 {id:'RJ',n:'Rajasthan',hi:'राजस्थान',portal:'https://sjmsnew.rajasthan.gov.in/scholarship/',src:B4S+'rajasthan-scholarship'},
 {id:'DL',n:'Delhi',hi:'दिल्ली',portal:'https://edistrict.delhigovt.nic.in/',src:'https://www.indiascholarships.in/scholarships/merit-scholarship-for-scstobc-students-higher-ed'},
 {id:'HR',n:'Haryana',hi:'हरियाणा',portal:'https://harchhatravratti.highereduhry.ac.in/',src:B4S+'haryana-scholarship'},
 {id:'TN',n:'Tamil Nadu',hi:'तमिलनाडु',portal:'',src:B4S+'tn-scholarship'},
 {id:'KA',n:'Karnataka',hi:'कर्नाटक',portal:'https://ssp.karnataka.gov.in/',src:B4S+'karnataka-scholarships'},
 {id:'AP',n:'Andhra Pradesh',hi:'आंध्र प्रदेश',portal:'https://jnanabhumi.ap.gov.in/',src:B4S+'ap-scholarship'},
 {id:'TG',n:'Telangana',hi:'तेलंगाना',portal:'https://telanganaepass.cgg.gov.in/',src:B4S+'telangana-scholarship'},
 {id:'WB',n:'West Bengal',hi:'पश्चिम बंगाल',portal:'',src:B4S+'west-bengal-scholarship'},
 {id:'BR',n:'Bihar',hi:'बिहार',portal:'https://pmsonline.bihar.gov.in/',src:B4S+'bihar-scholarship'},
 {id:'OD',n:'Odisha',hi:'ओडिशा',portal:'https://scholarship.odisha.gov.in/',src:B4S+'odisha-scholarship'},
 {id:'AS',n:'Assam',hi:'असम',portal:'https://scholarships.gov.in/',src:B4S+'assam-scholarship'},
 {id:'MH',n:'Maharashtra',hi:'महाराष्ट्र',portal:'https://mahadbt2.maharashtra.gov.in/',src:B4S+'maharashtra-scholarship'},
 {id:'GJ',n:'Gujarat',hi:'गुजरात',portal:'https://gssp.gujarat.gov.in/',src:B4S+'digital-gujarat-scholarship'},
 {id:'MP',n:'Madhya Pradesh',hi:'मध्य प्रदेश',portal:'https://hescholarship.mp.gov.in/Index.aspx',src:B4S+'mp-scholarship'},
 {id:'CG',n:'Chhattisgarh',hi:'छत्तीसगढ़',portal:'https://postmatric-scholarship.cg.nic.in/',src:B4S+'cg-scholarship'},
 {id:'AR',n:'Arunachal Pradesh',hi:'अरुणाचल प्रदेश',portal:'https://apdhte.nic.in/'},
 {id:'GA',n:'Goa',hi:'गोवा',portal:'https://cmscholarship.goa.gov.in/'},
 {id:'HP',n:'Himachal Pradesh',hi:'हिमाचल प्रदेश',portal:'https://education.hp.gov.in/'},
 {id:'JH',n:'Jharkhand',hi:'झारखंड',portal:'https://ekalyan.jharkhand.gov.in/'},
 {id:'KL',n:'Kerala',hi:'केरल',portal:'https://scholarship.kshec.kerala.gov.in/'},
 {id:'MN',n:'Manipur',hi:'मणिपुर',portal:'https://manipureducation.gov.in/'},
 {id:'ML',n:'Meghalaya',hi:'मेघालय',portal:'https://megeducation.gov.in/dhte/pages/scholarship.html'},
 {id:'MZ',n:'Mizoram',hi:'मिज़ोरम',portal:'https://scholarships.mizoram.gov.in/'},
 {id:'NL',n:'Nagaland',hi:'नागालैंड',portal:'https://scholarship.nagaland.gov.in/'},
 {id:'PB',n:'Punjab',hi:'पंजाब',portal:'https://scholarships.punjab.gov.in/'},
 {id:'SK',n:'Sikkim',hi:'सिक्किम',portal:'https://education.sikkim.gov.in/GeneralSection/ScholarshipDetails.aspx'},
 {id:'TR',n:'Tripura',hi:'त्रिपुरा',portal:'https://highereducation.tripura.gov.in/DHE/scholarship-scheme'},
 {id:'UK',n:'Uttarakhand',hi:'उत्तराखंड',portal:'https://scholarship.uk.gov.in/'},
 {id:'AN',n:'Andaman and Nicobar Islands',hi:'अंडमान और निकोबार द्वीप समूह',portal:'https://scholarships.gov.in/'},
 {id:'CH',n:'Chandigarh',hi:'चंडीगढ़',portal:'https://chdeducation.gov.in/'},
 {id:'DN',n:'Dadra and Nagar Haveli and Daman and Diu',hi:'दादरा और नगर हवेली और दमन और दीव',portal:'https://ddd.gov.in/'},
 {id:'JK',n:'Jammu and Kashmir',hi:'जम्मू और कश्मीर',portal:'https://jkscholarships.gov.in/'},
 {id:'LA',n:'Ladakh',hi:'लद्दाख',portal:'https://highereducation.ladakh.gov.in/'},
 {id:'LD',n:'Lakshadweep',hi:'लक्षद्वीप',portal:'https://lakshadweep.gov.in/'},
 {id:'PY',n:'Puducherry',hi:'पुदुच्चेरी',portal:'https://dhte.py.gov.in/'}
];
STATES.sort(function(a,b){return a.n<b.n?-1:1});
/* Ten disciplines: the nine largest by undergraduate enrolment in AISHE 2023-24, plus Law. */
var COURSES=[
 {id:'arts',n:'Arts',hi:'कला',share:32.1,yrs:3,pro:false},
 {id:'sci',n:'Science',hi:'विज्ञान',share:13.5,yrs:3,pro:false},
 {id:'eng',n:'Engineering and Technology',hi:'इंजीनियरिंग और प्रौद्योगिकी',share:12.9,yrs:4,pro:true},
 {id:'com',n:'Commerce',hi:'वाणिज्य',share:12.0,yrs:3,pro:false},
 {id:'med',n:'Medical Science',hi:'चिकित्सा विज्ञान',share:6.3,yrs:5,pro:true},
 {id:'edu',n:'Education',hi:'शिक्षा (बी.एड. आदि)',share:5.2,yrs:4,pro:true},
 {id:'it',n:'IT and Computer',hi:'आईटी और कंप्यूटर',share:4.0,yrs:3,pro:true},
 {id:'soc',n:'Social Science',hi:'सामाजिक विज्ञान',share:3.9,yrs:3,pro:false},
 {id:'mgmt',n:'Management',hi:'प्रबंधन',share:3.2,yrs:3,pro:true},
 {id:'law',n:'Law',hi:'विधि (कानून)',share:null,yrs:5,pro:true}
];
var INC=[
 {n:'Up to ₹1 lakh',hi:'₹1 लाख तक',r:[0,100000]},
 {n:'₹1 to 2 lakh',hi:'₹1 से 2 लाख',r:[100000,200000]},
 {n:'₹2 to 2.5 lakh',hi:'₹2 से 2.5 लाख',r:[200000,250000]},
 {n:'₹2.5 to 4.5 lakh',hi:'₹2.5 से 4.5 लाख',r:[250000,450000]},
 {n:'₹4.5 to 8 lakh',hi:'₹4.5 से 8 लाख',r:[450000,800000]},
 {n:'Above ₹8 lakh',hi:'₹8 लाख से अधिक',r:[800000,Infinity]}
];
var BC=['SC','ST','OBC'], ALLBC=['SC','ST','OBC','EWS'], POSTMATRIC=['11','iti','dip','ug','pg'];
/* Scheme records. cats: categories allowed (null = all). cap: income cap, a number or a map by category ("_" = others).
   val: fixed yearly amount in rupees where the source gives one (null = depends on fees or course). once: paid one time.
   cond: a condition these questions cannot confirm. minority: only for notified minority communities (not asked). */
var SCHEMES=[
 {id:'csss',lvl:'C',name:'PM-USP Central Sector Scholarship (CSSS)',cap:450000,pct80:true,
  benefit:'₹12,000 a year for the first three years of a degree, ₹20,000 a year at higher levels.',val:12000,
  fact:'Paid 75,125 fresh awards for 82,000 slots in 2025-26, against 1,45,325 verified applications.',
  portal:SRC.nsp,src:SRC.slots},
 {id:'ishan',lvl:'C',sts:['AS','AR','MN','ML','MZ','NL','SK','TR'],name:'Ishan Uday Special Scholarship for the North-East',cap:450000,
  benefit:'₹8,000 a month for 10 months a year.',val:80000,
  warn:'Paid no fresh awards in 2025-26, despite 26,632 verified applications for 10,000 slots. Do not plan around it.',
  portal:SRC.nsp,src:SRC.slots},
 {id:'pmssc',lvl:'C',lv:POSTMATRIC,name:'Post-Matric Scholarship for SC students (central scheme)',cats:['SC'],cap:250000,
  benefit:'Your compulsory non-refundable fees, plus an academic allowance of ₹2,500 to ₹13,500 a year (2021-22 rates, meant to rise with prices) by course group and whether you live in a hostel. Students with a disability get 10% more.',val:null,
  cond2:'Paid by the central and state governments together. You apply on your state\'s scholarship portal or the National Scholarship Portal. Where your state\'s own post-matric scholarship for SC students is also in your results, it is usually this same money: apply once.',
  portal:SRC.nsp},
 {id:'pmsst',lvl:'C',lv:POSTMATRIC,name:'Post-Matric Scholarship for ST students (central scheme)',cats:['ST'],cap:250000,
  benefit:'Your compulsory non-refundable fees, plus a maintenance allowance set under the scheme.',val:null,
  cond2:'Run by the Ministry of Tribal Affairs through the states. You apply on your state\'s portal or the National Scholarship Portal. Where your state\'s own post-matric scholarship for ST students is also in your results, it is usually this same money: apply once.',
  portal:SRC.nsp},
 {id:'yasasvi',lvl:'C',lv:POSTMATRIC,notSts:['DL'],name:'PM-YASASVI Post-Matric Scholarship for OBC, EBC and DNT students',cats:['OBC'],cap:250000,
  benefit:'₹5,000 to ₹20,000 a year (an academic allowance plus a tuition component), by course group.',val:5000,
  cond2:'Also open to Economically Backward Class (EBC) and Denotified Tribe (DNT) students. Run through the states: where your state\'s post-matric scholarship for OBC students is also in your results, it is usually this same money, so apply once.',
  portal:SRC.nsp},
 {id:'topsc',lvl:'C',lv:['ug','pg'],name:'Top Class Education Scholarship for SC students',cats:['SC'],cap:800000,
  cond:'Only at the institutions on the ministry\'s Top Class list (IITs, IIMs, AIIMS, NITs, national law universities and similar). Check that yours is on it.',
  benefit:'Full tuition and non-refundable fees (up to ₹2 lakh a year at private institutions), plus a living allowance.',val:null,
  portal:SRC.nsp},
 {id:'pragati',lvl:'C',lv:['dip','ug'],name:'AICTE Pragati Scholarship for girls (technical degree or diploma)',gender:'F',cap:800000,courses:['eng'],
  cond:'For the first year of an AICTE-approved technical degree (B.E./B.Tech, B.Pharm, B.Arch and similar) or diploma, or the second year by lateral entry. At most two girls in one family.',
  benefit:'₹50,000 a year for each year of the course.',val:50000,win:'2026-27 applications closed on the National Scholarship Portal on 31 October 2026. The next round is usually notified in June.',
  portal:SRC.nsp},
 {id:'saksham',lvl:'C',lv:['dip','ug'],name:'AICTE Saksham Scholarship for students with a disability (technical degree or diploma)',dis:true,cap:800000,courses:['eng'],
  cond:'For the first year of an AICTE-approved technical degree or diploma, or the second year by lateral entry. Needs a disability certificate of 40% or more.',
  benefit:'₹50,000 a year for each year of the course.',val:50000,win:'2026-27 applications closed on the National Scholarship Portal on 31 October 2026. The next round is usually notified in June.',
  portal:SRC.nsp},
 {id:'swanath',lvl:'C',lv:['dip','ug'],name:'AICTE Swanath Scholarship (orphans and wards of martyrs)',cap:800000,courses:['eng'],
  cond:'Only if you are an orphan, lost one or both parents to Covid-19, or are the child of an armed forces or central paramilitary member martyred in action. For an AICTE-approved technical degree or diploma. Not with any other government or AICTE scholarship.',
  benefit:'₹50,000 a year for each year of the course.',val:50000,win:'2026-27 applications closed on the National Scholarship Portal on 31 October 2026. The next round is usually notified in June.',
  portal:SRC.nsp},
 {id:'sarswati',lvl:'C',name:'AICTE Sarswati Scholarship for girls (BBA, BCA, BMS)',gender:'F',cap:800000,courses:['mgmt','it'],
  cond:'For the first year of BBA, BCA or BMS at an AICTE-approved institution, within two years of Class 12. At most two girls in one family. Selection is by Class 12 marks, state by state. Not with any other scholarship.',
  benefit:'₹25,000 a year for up to three years.',val:25000,win:'2026-27: apply on the AICTE Sarswati portal by 28 February 2027 (as reported in the news).',
  portal:'https://sarswati.aicte.gov.in/'},
 {id:'pmsss',lvl:'C',sts:['JK','LA'],name:'PM-USP Special Scholarship for students of Jammu & Kashmir and Ladakh (PMSSS)',cap:800000,
  cond:'Only for students domiciled in J&K or Ladakh who passed Class 12 there, admitted through AICTE\'s own counselling to a listed college outside the two UTs. Not for management-quota admissions.',
  benefit:'Your academic fee up to ₹30,000 a year (general degree), ₹1.25 lakh (engineering and other professional degrees) or ₹3 lakh (MBBS, BDS and similar), plus ₹1 lakh a year for living costs.',val:100000,
  win:'Registration for 2026-27 opened in July 2026 (as reported in the news). Check the closing date on the AICTE portal.',
  portal:'https://www.aicte-jk-scholarship-gov.in/'},
 {id:'inspire',lvl:'C',lv:['ug','pg'],name:'INSPIRE Scholarship for Higher Education (SHE)',courses:['sci'],
  cond:'Only if you were in the top 1% of your Class 12 board, or ranked in the top 10,000 in JEE or NEET, and study B.Sc., B.S. or integrated M.Sc. in a natural or basic science. Aged 17 to 22. Engineering, medicine and applied courses are not covered.',
  benefit:'₹80,000 a year: ₹60,000 as a scholarship and ₹20,000 for a summer research project.',val:80000,
  portal:'https://online-inspire.gov.in/'},
 {id:'pmss',lvl:'C',lv:['ug','pg'],name:'Prime Minister\'s Scholarship Scheme for wards of ex-servicemen (Kendriya Sainik Board)',pro:true,min12:60,
  cond:'Only for the children or widows of ex-servicemen and ex-Coast Guard personnel, in the first year of a professional degree (MBA and MCA are the only master\'s courses covered). Needs at least 60% in your last qualifying exam. Separate versions exist for central armed police and Railway Protection Force families.',
  benefit:'₹30,000 a year for boys (₹2,500 a month), ₹36,000 a year for girls (₹3,000 a month).',val:30000,
  win:'2026-27: the last date is reported as 31 December 2026. Confirm it on the Kendriya Sainik Board site.',
  portal:'https://ksb.gov.in/'},
 {id:'pmsdis',lvl:'C',name:'Post-Matric Scholarship for students with disabilities',dis:true,cap:250000,lv:['11','iti','dip','ug','pg'],
  cond:'Needs a disability certificate of 40% or more (a UDID card is asked for).',
  benefit:'A maintenance allowance and a disability allowance, plus a book allowance, under the central scheme.',val:null,
  portal:SRC.nsp},
 {id:'nmmss',lvl:'C',name:'National Means-cum-Merit Scholarship (NMMSS)',cap:350000,lv:['11'],inst:['govt'],
  cond:'Only if you were selected through your state\'s NMMS test in Class 8 and study at a government, aided or local-body school. New awards are made in Class 9; in Class 11 and 12 you renew it.',
  benefit:'₹12,000 a year from Class 9 to Class 12.',val:12000,
  portal:SRC.nsp},
 {id:'aictepg',lvl:'C',name:'AICTE Postgraduate Scholarship (GATE, GPAT, CEED)',lv:['pg'],courses:['eng','med'],
  cond:'For a full-time M.E., M.Tech., M.Arch., M.Pharm. or M.Des. at an AICTE-approved institution, admitted with a valid GATE, GPAT or CEED score within the approved intake. Not for management-quota or sponsored students. University departments are covered by a matching UGC scheme.',
  benefit:'₹12,400 a month for up to 24 months.',val:148800,
  portal:'https://pgscholarship.aicte-india.gov.in/'},
 {id:'moma',lvl:'C',closed:true,minority:true,name:'Post-Matric and Merit-cum-Means Scholarships for minority students (Ministry of Minority Affairs)',cap:200000,lv:['11','iti','dip','ug','pg'],
  benefit:'Not open to new students.',val:null,
  warn:'The ministry told Parliament these schemes were not approved beyond 2021-22. No new students have been admitted since 2022-23; only existing students were continued. Some states run their own minority scholarships, which are listed under the state.',
  portal:SRC.nsp},

 {id:'up1',st:'UP',name:'Post-Matric (Dashmottar) Scholarship',cap:{SC:250000,ST:250000,_:200000},
  benefit:'Depends on your institution\'s approved fee.',val:null,win:'Fresh applications 15 September to 31 October 2026.'},
 {id:'up2',st:'UP',name:'Post-Matric Scholarship, Other State',cond:'Only if you will study outside Uttar Pradesh. The source gives no income limit or amount.',
  benefit:'Not stated in the source.',val:null},

 {id:'rj1',st:'RJ',name:'Post-Matric Scholarship',cats:ALLBC,cap:{SC:250000,ST:250000,_:100000},
  benefit:'₹1,200 a month for hostellers or ₹550 a month for day scholars, plus tuition reimbursement.',val:null,win:'15 August to 31 October 2026.'},
 {id:'rj2',st:'RJ',name:'Chief Minister\'s Higher Education Scholarship',cap:250000,min12:60,
  cond:'You must have passed RBSE Class 12 this year and be in the top one lakh of the merit list.',
  benefit:'₹5,000 a year (₹10,000 with a disability of 40% or more).',val:5000,win:'15 August to 31 October 2026.',portal:'https://sso.rajasthan.gov.in/'},

 {id:'dl1',st:'DL',name:'Merit Scholarship for SC/ST/OBC students (college, professional and technical courses)',cats:BC,cap:{OBC:300000},min12:60,
  cond:'Needs at least 60% in your previous year\'s exam. SC and ST students have no income limit. You need a Delhi caste certificate, or a Delhi domicile certificate if yours was issued elsewhere.',
  benefit:'₹8,000 to ₹24,000 a year, by course group and whether you live in a hostel.',val:8000},
 {id:'dl2',st:'DL',name:'Post-Matric Scholarship for OBC students (PM-YASASVI)',cats:['OBC'],cap:250000,
  cond:'A central scheme run through Delhi. Needs 75% attendance and a Delhi caste certificate.',
  benefit:'₹5,000 to ₹20,000 a year, by course group.',val:5000,portal:SRC.nsp},

 {id:'hr1',st:'HR',name:'Post-Matric Scholarship for SC students',cats:['SC'],cap:250000,
  cond:'Needs 75% attendance. On 13 November 2026 this scheme was not in the portal\'s list of schemes open for 2026-27. Ask your college when it opens.',
  benefit:'₹230 to ₹1,200 a month, plus compulsory non-refundable fees.',val:null},
 {id:'hr2',st:'HR',name:'Lower Income Group Scheme',cap:12000,
  cond:'The portal shows the income limit as ₹12,000 a year, which looks like an old figure. Ask your college scholarship desk what limit is applied now.',
  benefit:'Monthly maintenance by course, plus compulsory fees.',val:null,win:'Open for 2026-27 until 31 December 2026.'},
 {id:'hr3',st:'HR',name:'State Merit Scholarship for UG and PG students',
  cond:'Needs at least a Second Division in your last exam. The number of awards is limited, so merit decides.',
  benefit:'A monthly merit scholarship. An old scheme document gives ₹150 to ₹900 a month by level of study.',val:null,win:'Open for 2026-27 until 31 December 2026.'},

 {id:'tn1',st:'TN',name:'Free Education scholarship: degree courses (BC/MBC/DNC)',cats:['OBC'],inst:['govt'],
  cond:'For three-year degrees at government and government-aided arts and science colleges. There is no income limit.',
  benefit:'Tuition waived, special and compulsory fees paid, book money, the full exam fee, and ₹4,000 a year if you live in a hostel.',val:null,portal:'https://bcmbcmw.tn.gov.in/welfschemes.htm'},
 {id:'tn2',st:'TN',name:'Free Education scholarship: professional courses (BC/MBC/DNC)',cats:['OBC'],cap:250000,pro:true,firstGen:true,
  cond:'You must be the first graduate in your family, admitted under the government quota through single-window counselling.',
  benefit:'Special and compulsory fees paid, book money, the full exam fee, and ₹4,000 a year if you live in a hostel.',val:null,portal:'https://bcmbcmw.tn.gov.in/welfschemes.htm'},
 {id:'tn4',st:'TN',name:'Post-Matric Scholarship for college students (BC/MBC/DNC)',cats:['OBC'],cap:250000,
  cond:'For ITI, polytechnic diploma, postgraduate, professional and PhD courses.',
  benefit:'Tuition and special fees at government rates, the full exam fee, book money, and ₹4,000 a year if you live in a hostel.',val:null,portal:'https://bcmbcmw.tn.gov.in/welfschemes.htm'},
 {id:'tn5',st:'TN',name:'Scholarship for BC/MBC/DNC students at IITs, IIMs, IIITs, NITs and central universities',cats:['OBC'],cap:250000,
  cond:'Only if you study at an IIT, IIM, IIIT, NIT or a central university.',
  benefit:'Tuition, special, exam and other compulsory fees, up to ₹2,00,000 a year.',val:null,portal:'https://bcmbcmw.tn.gov.in/welfschemes.htm'},
 {id:'tn3',st:'TN',name:'Post-Matric Scholarship for SC/ST',cats:['SC','ST'],inst:['private'],
  cond:'For approved courses at self-financing colleges registered on the state scholarship portal.',
  benefit:'Reimbursement of tuition and other admissible fees.',val:null},

 {id:'ka0',st:'KA',name:'Post-Matric scholarships on the State Scholarship Portal',cats:ALLBC,
  cond:'The source lists only minority schemes in detail. Check the post-matric section of the portal for your department\'s rules.',
  benefit:'See the portal.',val:null},
 {id:'ka1',st:'KA',name:'Post-Matric Scholarship for Minorities',minority:true,cap:200000,min12:50,
  benefit:'₹3,000 a year for fees, plus ₹300 to ₹570 a month maintenance.',val:3000,win:'Closes 30 September 2026.'},
 {id:'ka2',st:'KA',name:'Merit-cum-Means Scholarship for Minorities',minority:true,cap:250000,min12:50,pro:true,
  benefit:'Fee waiver or reimbursement up to ₹20,000 a year, plus a small maintenance amount.',val:20000},

 {id:'ap1',st:'AP',name:'Post-Matric Scholarships: fee reimbursement (RTF) and maintenance (MTF)',cap:250000,
  cond:'Open to SC, ST, BC, EBC, Kapu, minority and differently abled students. Needs 75% attendance. Not for private or deemed universities, distance courses, or management and spot-quota seats. Families with a government employee, an income-tax payer or a four-wheeler are excluded.',
  benefit:'Full fees paid to the college, plus ₹20,000 a year for degree courses (₹15,000 polytechnic, ₹10,000 ITI) paid to your mother\'s account.',val:20000},
 {id:'ap2',st:'AP',name:'Post-Matric Scholarship for Minorities',minority:true,cap:250000,
  benefit:'₹240 to ₹962 a month for 10 months.',val:null},

 {id:'tg1',st:'TG',name:'Post-Matric Scholarship (SC/ST/BC/EBC/Disabled)',cats:ALLBC,orDis:true,
  cond:'The source gives no income limit. Needs 75% attendance each quarter.',
  benefit:'Up to full tuition reimbursement for most courses, or up to ₹20,000 for self-financed courses.',val:null},

 {id:'wb1',st:'WB',name:'Post-Matric Scholarship for SC/ST/OBC (OASIS)',cats:BC,cap:250000,
  cond:'The portal does not state the income limit or the amounts. ST students need a One-Time Registration on the National Scholarship Portal first. OBC certificates issued before 1 August 2025 must be revalidated.',
  benefit:'A monthly maintenance allowance plus fees. An older listing gave ₹220 to ₹1,200 a month.',val:null,portal:'https://oasis.gov.in/',win:'Open for 2026-27. No closing date published.'},
 {id:'wb2',st:'WB',name:'Swami Vivekananda Merit-cum-Means Scholarship (SVMCM)',cap:250000,min12:60,
  cond:'For students at institutions in West Bengal. A degree course needs 60% in Higher Secondary.',
  benefit:'A monthly scholarship by course level. Current amounts are not on the pages we could read. An older listing gave ₹1,000 to ₹5,000 a month.',val:null,portal:'https://svmcm.wbhed.gov.in/',win:'Usually August to October. No 2026-27 dates found.'},
 {id:'wb3',st:'WB',name:'Nabanna Scholarship',cap:120000,min12:50,max12:60,
  benefit:'₹10,000 a year.',val:10000,portal:'https://cmrf.wb.gov.in/'},

 {id:'br1',st:'BR',name:'Post-Matric Scholarship (SC/ST)',cats:['SC','ST'],cap:250000,
  benefit:'Up to ₹13,500 a year.',val:13500},
 {id:'br2',st:'BR',name:'Post-Matric Scholarship (BC/EBC)',cats:['OBC'],cap:250000,
  cond2:'Extremely Backward Class students qualify up to ₹3 lakh.',
  benefit:'Up to ₹15,000 a year maintenance allowance.',val:15000,win:'15 July to 15 September 2026.'},
 {id:'br3',st:'BR',name:'Chief Minister Kanya Utthan Yojana (graduation)',gender:'F',
  benefit:'₹25,000 once, paid after you graduate.',val:25000,once:true,portal:'https://medhasoft.bih.nic.in/'},

 {id:'od1',st:'OD',name:'Post-Matric Scholarship',cats:ALLBC,cap:250000,min12by:{OBC:50,EWS:50},
  benefit:'About ₹2,300 to ₹13,500 a year, by category, course and hostel status.',val:null,win:'Closes 29 September 2026.'},
 {id:'od2',st:'OD',name:'e-Medhabruti (undergraduate merit)',cap:800000,min12:55,courses:['arts','sci','com','soc','mgmt','it'],
  cond:'For Plus 3, BBA, BCA or BJMC courses.',benefit:'₹10,000 a year.',val:10000},
 {id:'od3',st:'OD',name:'Godabarisha Vidyarthi Protsahana Yojana (laptop)',
  benefit:'₹30,000 towards a laptop.',val:30000,once:true},

 {id:'as1',st:'AS',name:'Post-Matric Scholarship for OBC students',cats:['OBC'],cap:150000,
  benefit:'₹160 to ₹750 a month, by course and hostel status.',val:null,win:'Most schemes close 30 September 2026.'},
 {id:'as2',st:'AS',name:'Post-Matric Scholarship for ST students',cats:['ST'],cap:250000,
  benefit:'₹230 to ₹1,200 a month, by course and hostel status.',val:null,win:'Closed 6 October 2026, according to a secondary listing.'},
 {id:'as3',st:'AS',name:'Post-Matric Scholarship for SC students',cats:['SC'],
  cond:'The source gives no income limit or amount.',benefit:'Not stated in the source.',val:null},

 {id:'mh1',st:'MH',name:'Post-Matric Tuition Fee and Examination Fee (Freeship)',cats:['SC'],floor:250000,
  cond:'For Scheduled Caste and Neo-Buddhist students from Maharashtra whose family income is above ₹2,50,000 a year. Professional courses only through the CAP round. Only one failure is allowed in the whole course.',
  benefit:'Tuition, exam and other compulsory fees reimbursed.',val:null},
 {id:'mh2',st:'MH',name:'Tuition Fees and Examination Fees to OBC students',cats:['OBC'],cap:800000,
  cond:'The official page asks for an income or non-creamy-layer certificate but states no figure. ₹8,00,000 comes from a secondary listing. Deemed universities are not covered.',
  benefit:'Tuition and exam fees for professional courses: 100% at government and aided colleges and for women students, 50% at unaided colleges.',val:null},
 {id:'mh3',st:'MH',name:'Post-Matric Scholarship to OBC students',cats:['OBC'],cap:250000,
  cond:'Needs 75% attendance. Covers up to two boys in a family, with no limit for girls.',
  benefit:'Tuition and exam fees, plus ₹90 to ₹190 a month for day scholars or ₹150 to ₹425 for hostellers.',val:null},

 {id:'gj1',st:'GJ',name:'EBC Fees Exemption Scheme',cap:250000,
  benefit:'Full fee exemption if you scored above 60% in Class 12, half if below.',val:null},
 {id:'gj2',st:'GJ',name:'Mukhyamantri Yuva Swavalamban Yojana (MYSY)',cap:600000,min12:80,
  cond:'The cut-off is the 80th percentile in Class 10 or 12, which is not the same as 80%.',
  benefit:'Tuition up to ₹2,00,000, hostel food ₹12,000 and books or equipment up to ₹10,000.',val:null},
 {id:'gj3',st:'GJ',name:'Post-Matric Scholarship for OBC students',cats:['OBC'],cap:100000,
  benefit:'Up to ₹750 a month.',val:null,win:'SC/OBC: 6 July to 30 September 2026. ST: 1 September to 30 November 2026.'},

 {id:'mp1',st:'MP',name:'Mukhyamantri Medhavi Vidyarthi Yojana (MMVY)',cap:600000,min12:70,
  cond:'Family income must be below ₹6 lakh. Needs 70% in MP Board Class 12 (one official page says 75%) or 85% in CBSE/ICSE. Engineering needs a JEE Main rank within 1,50,000, medicine needs NEET and law needs CLAT.',
  benefit:'The state pays your fee: in full at government colleges, and up to ₹1.5 lakh at private engineering colleges.',val:null,portal:'https://scholarshipportal.mp.nic.in/MedhaviChhatra/Medhavi_New/About.aspx'},
 {id:'mp2',st:'MP',name:'Post-Matric Scholarship (OBC)',cats:['OBC'],cap:300000,benefit:'Full tuition fee waiver.',val:null},
 {id:'mp3',st:'MP',name:'Post-Matric Scholarship (SC)',cats:['SC'],cond:'The source gives no income limit.',
  benefit:'Depends on income, course and fee caps.',val:null},

 {id:'cg1',st:'CG',name:'BPL Scholarship Scheme for College Students',inst:['govt'],
  cond:'Your parent or guardian must hold a BPL card, and you must study at a government college.',
  benefit:'₹300 a month for undergraduates, for up to 20 months.',val:null,portal:SRC.nsp,win:'Last date 30 September 2026.'},
 {id:'cg2',st:'CG',name:'Post-Matric Scholarship for SC/ST/OBC',cats:BC,cap:{SC:250000,ST:250000,_:100000},min12:50,
  benefit:'SC/ST: ₹3,800 a year for hostellers, ₹2,250 for day scholars. OBC: ₹600 to ₹1,100 a year.',val:null},
 {id:'cg3',st:'CG',name:'Disabled Persons Scholarship Scheme',dis:true,
  cond:'Apply through the head of your institution to the District Social Welfare Office.',benefit:'Not stated in the source for college level.',val:null},

 {id:'ar1',st:'AR',name:'Arunachal Pradesh State Stipend Scheme',cats:['ST'],
  cond:'For Arunachal Pradesh Scheduled Tribe (APST) students, studying inside or outside the state. Not for regular government employees.',
  benefit:'₹16,400 a year.',val:16400,win:'6 August to 16 October 2026.',portal:SRC.nsp},

 {id:'ga1',st:'GA',name:'Bursary Scheme (Sant Sohirobanath Ambiye Dnyanvruddhi Shishyavrutti)',cap:500000,
  cond:'Family income must be under ₹5 lakh. For full-time courses at colleges in Goa, and your earlier qualification must be from a Goa institution. Chosen on need and merit.',
  benefit:'Fees reimbursed up to ₹40,000 a year, including up to ₹5,000 for books.',val:null},
 {id:'ga2',st:'GA',name:'Interest Free Education Loan Scheme',cap:1200000,min12:55,min12by:{SC:45,ST:45,OBC:45},
  cond:'A loan, not a grant. You must have lived in Goa for 15 years and be under 30. The marks rule (10% lower for SC, ST and OBC students) applies to your qualifying exam.',
  benefit:'An interest-free loan for your actual fees, up to ₹2 lakh a year and ₹10 lakh in all.',val:null},

 {id:'hp1',st:'HP',name:'Indira Gandhi Utkrisht Chhatervritti Yojna',
  cond:'Only for the top 10 students on each HP Board Class 12 merit list (Arts, Science and Commerce). There is no income limit.',
  benefit:'₹18,000 a year until you finish your course.',val:18000},
 {id:'hp2',st:'HP',name:'Kalpana Chawla Chhatravriti Yojna',gender:'F',
  cond:'For the top 2,000 girls on the HP Board Class 12 merit list. It stops if you fail a year.',
  benefit:'₹18,000 a year until you finish your course.',val:18000},
 {id:'hp3',st:'HP',name:'Mukhya Mantri Protsahan Yojna',
  cond:'Only if you are admitted to a degree at an IIT, AIIMS, IISc or ISM Dhanbad.',benefit:'₹75,000 once.',val:75000,once:true},
 {id:'hp4',st:'HP',name:'Mukhya Mantri Gyandeep Yojna (loan interest subsidy)',
  cond:'Only if you take an education loan from a bank. For Himachali students at recognised institutions in India.',
  benefit:'The state pays 4% a year of the interest on an education loan of up to ₹10 lakh.',val:null},
 {id:'hp5',st:'HP',name:'Dr. Y. S. Parmar Vidyarthi Rin Yojna (education loan)',cap:1200000,
  cond:'A loan, not a grant. For Himachali students aged 28 or under at admission.',benefit:'An education loan of up to ₹20 lakh at 1% interest.',val:null},

 {id:'mn1',st:'MN',name:'State Merit Scholarship',cap:450000,min12:60,courses:['arts','sci','com','soc'],
  cond:'250 new awards a year, chosen on merit. Not for private or deemed universities, distance courses or management-quota seats.',
  benefit:'₹500 a month for 10 months in a degree course.',val:5000,portal:SRC.nsp},

 {id:'nl1',st:'NL',name:'Nagaland State Merit Scholarship',cats:['ST'],min12:80,
  cond:'For indigenous inhabitants of Nagaland in the first year of a course. The 80% is counted on your best five subjects.',
  benefit:'A yearly scholarship. The amount depends on your course level and whether you live in a hostel.',val:null,win:'1 August to 31 October 2026.'},
 {id:'nl2',st:'NL',name:'State Technical Scholarship for ST students',cats:['ST'],cap:800000,courses:['eng','it','mgmt'],
  cond:'For technical courses at institutions recognised by AICTE or the Council of Architecture. Chosen on merit.',
  benefit:'A book grant once a year. The guidelines do not state the amount.',val:null,win:'1 October to 31 December 2026.'},

 {id:'an1',st:'AN',name:'Additional Scholarship for OBC students of the Andaman and Nicobar Islands',cats:['OBC'],
  cond:'For non-creamy-layer OBC students domiciled in the islands, studying anywhere in India.',
  benefit:'₹1,000 a month for 10 months a year.',val:10000,portal:SRC.nsp},

 {id:'py1',st:'PY',name:'Perunthalaivar Kamarajar Financial Assistance Scheme (PKFAS)',courses:['eng','med','law'],inst:['private'],
  cond:'For Puducherry residents admitted through CENTAC to private unaided professional colleges, who passed the qualifying exam at the first attempt. You get half if parental income is ₹8 lakh or more.',
  benefit:'Tuition fee reimbursed up to a yearly maximum that depends on the course.',val:null}
];
function stateOf(id){return STATES.filter(function(s){return s.id===id})[0]}
function courseOf(id){return COURSES.filter(function(c){return c.id===id})[0]}
function capFor(s,cat){
  if(s.cap==null) return null;
  if(typeof s.cap==='number') return s.cap;
  if(cat==='NA'){var m=0;for(var k in s.cap){m=Math.max(m,s.cap[k])}return m}
  if(s.cap[cat]!=null) return s.cap[cat];
  return s.cap._!=null?s.cap._:null;
}
/* Returns null if the scheme does not fit, else {status:'likely'|'check', notes:[...]} */
function matchScheme(s,P){
  var notes=[], cat=P.cat;
  var sts=P.states||[P.state], crs=P.courses||[P.course];
  if(s.st && sts.indexOf(s.st)<0) return null;
  if(s.sts && !s.sts.some(function(x){return sts.indexOf(x)>=0})) return null;
  if(s.notSts && sts.length===1 && s.notSts.indexOf(sts[0])>=0) return null;
  if(s.closed) return null;
  var lev=P.level||'ug'; if((s.lv||['ug']).indexOf(lev)<0) return null;
  if(s.lvAssumed && lev!=='ug') notes.push('Post-matric schemes cover every course after Class 10, but the page we read does not list '+levelOf(lev).n.toLowerCase()+' by name, and some states run a separate scheme for it. Check on the portal.');
  if(s.st && s.st!==sts[0]) notes.push('State schemes are usually only for students whose home state it is. Your home state is '+stateOf(sts[0]).n+'.');
  if(s.gender && P.gender!==s.gender){ if(P.gender==='U') notes.push(s.gender==='F'?'Only for girls and women.':'Only for '+s.gender+' students.'); else return null; }
  if(s.dis && !P.dis){ if(P.dis==null) notes.push('Only for students with a disability of 40% or more.'); else return null; }
  if(s.firstGen && !P.firstGen){ if(P.firstGen==null) notes.push('Only if you are the first in your family to go to college.'); else return null; }
  if(s.cats){
    var viaDis=s.orDis&&P.dis;
    if(cat==='NA'){ if(!viaDis) notes.push('Depends on your social category, which you chose not to give.') }
    else if(s.cats.indexOf(cat)<0 && !viaDis) return null;
  }
  if((s.courses||s.pro)&&!crs.length){
    notes.push('Only for '+(s.courses?s.courses.map(function(c){return courseOf(c).n}).join(', '):'technical and professional courses')+'.');
  } else if(s.courses||s.pro){
    var fit=crs.filter(function(c){return s.courses?s.courses.indexOf(c)>=0:courseOf(c).pro});
    if(!fit.length) return null;
    if(fit.length<crs.length) notes.push('Only if you study '+fit.map(function(c){return courseOf(c).n}).join(' or ')+'.');
  }
  if(s.inst){
    if(P.inst==='unsure'||P.inst==='qhei') notes.push('Depends on whether your college is government, aided or private.');
    else if(s.inst.indexOf(P.inst)<0) return null;
  }
  var cap=capFor(s,cat);
  if(cap!=null){
    var r=INC[P.inc].r;
    if(r[1]<=cap){}
    else if(r[0]<cap) notes.push('The income limit is '+rs(cap)+', which falls inside your bracket. Check your exact income.');
    else return null;
  }
  if(s.floor!=null){
    var rf=INC[P.inc].r;
    if(rf[1]<=s.floor) return null;
    if(rf[0]<s.floor) notes.push('Only for family income above '+rs(s.floor)+', which falls inside your bracket. Check your exact income.');
  }
  var min=s.min12; if(s.min12by&&s.min12by[cat]!=null) min=s.min12by[cat];
  if(P.m12==null){
    if(min!=null) notes.push('Needs at least '+min+'% in Class 12.');
    if(s.max12!=null) notes.push('Only for students with under '+s.max12+'% in Class 12.');
    if(s.pct80) notes.push('Only for students above the 80th percentile of their Class 12 board.');
  } else {
  if(min!=null && P.m12<min) return null;
  if(s.max12!=null && P.m12>=s.max12) return null;
  if(s.pct80){
    if(P.m12<70) return null;
    if(P.m12<80) notes.push('The cut-off is the 80th percentile of your board, which can be below 80%. Check your board\'s cut-off.');
  }
  }
  if(s.minority) notes.push('Only for students from a notified minority community. This tool does not ask about religion.');
  if(s.cond) notes.push(s.cond);
  return {status:notes.length?'check':'likely',notes:notes};
}
function matchAll(P){
  var out=[];
  SCHEMES.forEach(function(s){var m=matchScheme(s,P); if(m) out.push({s:s,status:m.status,notes:m.notes})});
  out.sort(function(a,b){return (a.status===b.status?0:a.status==='likely'?-1:1)});
  return out;
}
function rs(n){return '₹'+Math.round(n).toLocaleString('en-IN')}
/* Loan rules that apply, from loan size, income bracket, course and institution. */
function loanRules(P,amt){
  var lvl=P.level||'ug';
  if(lvl==='11'||lvl==='iti') return {csis:false,qhei:false,maybeQ:false,pmvSub:false,rbi:amt<=400000,model:amt<=750000,mode:'none',noHE:true};
  var pro=P.course?courseOf(P.course).pro:false, hi=INC[P.inc].r[1];
  var csis=hi<=450000&&pro;
  var qhei=P.inst==='qhei', maybeQ=P.inst==='unsure';
  var pmvSub=(qhei||maybeQ)&&hi<=800000&&!csis;
  return {csis:csis,qhei:qhei,maybeQ:maybeQ,pmvSub:pmvSub,
    rbi:amt<=400000, model:amt<=750000, mode:csis?'csis':(pmvSub&&qhei?'pmv':'none')};
}
/* Repayment maths. Loan drawn in equal parts at the start of each course year; simple interest runs until the
   moratorium ends (course + 1 year); a subsidy covers interest on the first Rs 10 lakh disbursed. */
function simulate(L,ratePct,years,tenureYears,mode){
  var r=ratePct/100, tr=L/years, I=0, S=0;
  for(var i=0;i<years;i++){
    var t=years+1-i, before=tr*i, covered=Math.max(0,Math.min(tr,1000000-before));
    I+=tr*r*t;
    if(mode==='csis') S+=covered*r*t;
    if(mode==='pmv') S+=covered*Math.min(0.03,r)*t;
  }
  var owed=L+I-S, m=r/12, n=tenureYears*12;
  var emi=owed<=0?0:(m===0?owed/n:owed*m*Math.pow(1+m,n)/(Math.pow(1+m,n)-1));
  return {interest:I,subsidy:S,owed:owed,emi:emi,total:emi*n};
}
function light(emi,salary){
  if(!salary) return {k:'bad',pct:null};
  var p=emi/salary;
  return {k:p<0.2?'good':p<0.35?'warn':'bad',pct:p};
}
function costTotals(c){
  var yearly=c.tuition+c.hostel+c.food+c.travel+c.books, once=c.device+c.exams+c.coaching;
  return {yearly:yearly,once:once,tuition:c.tuition*c.years,living:(c.hostel+c.food+c.travel+c.books)*c.years,total:yearly*c.years+once};
}
/* Share link. The answers travel after "#" in the address, which browsers never send to the server,
   so they do not reach the web server's logs. */
var CATS=['GEN','EWS','OBC','SC','ST','NA'], INSTS=['govt','private','qhei','unsure'];
function encodeProfile(P){
  var un=function(x){return x==null?-1:(x?1:0)};
  var a=[4,P.adult?1:0,P.consent==='given'?1:0,P.states||[P.state],P.inc,P.cat,P.gender||'U',un(P.dis),un(P.firstGen),P.m12==null?-1:P.m12,P.m10==null?-1:P.m10,P.courses||(P.course?[P.course]:[]),P.inst,P.level||'ug'];
  return btoa(JSON.stringify(a)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}
function decodeProfile(code){
  try{
    var t=String(code).replace(/-/g,'+').replace(/_/g,'/'); while(t.length%4) t+='=';
    var a=JSON.parse(atob(t));
    if(!Array.isArray(a)||!((a.length===13&&(a[0]===1||a[0]===2))||(a.length===14&&(a[0]===3||a[0]===4)))) return null;
    var v4=a[0]===4, list=function(x,find,max,empty){ var l=Array.isArray(x)?x:[x]; if((!l.length&&!empty)||l.length>max) return null; for(var i=0;i<l.length;i++){ if(typeof l[i]!=='string'||!find(l[i])||l.indexOf(l[i])!==i) return null } return l };
    var sl=list(a[3],stateOf,STATES.length), cl=list(a[11],courseOf,COURSES.length,v4); if(!sl||!cl) return null;
    var pct=function(x){return typeof x==='number'&&x>=0&&x<=100};
    var P={adult:a[1]===1,consent:a[1]===1?undefined:(a[2]===1?'given':'skipped'),state:sl[0],states:sl,inc:a[4],cat:a[5],gender:a[6],
      dis:v4&&a[7]===-1?null:a[7]===1,firstGen:v4&&a[8]===-1?null:a[8]===1,m12:v4&&a[9]===-1?null:a[9],m10:a[10]===-1?null:a[10],course:cl[0],courses:cl,inst:a[12],level:a.length===14?a[13]:'ug'};
    if(!levelOf(P.level)) return null;
    if(typeof P.inc!=='number'||P.inc%1!==0||P.inc<0||P.inc>=INC.length) return null;
    if(CATS.indexOf(P.cat)<0||(v4?['F','M','O','U']:['F','M','O']).indexOf(P.gender)<0||INSTS.indexOf(P.inst)<0) return null;
    if((P.m12!==null&&!pct(P.m12))||(P.m12===null&&!v4)||(P.m10!==null&&!pct(P.m10))) return null;
    return P;
  }catch(e){return null}
}

/* ---- r8: study levels ---- */
var LEVELS=[
 {id:'11',n:'Class 11 or 12',hi:'कक्षा 11 या 12',yrs:2},
 {id:'iti',n:'ITI (industrial training institute)',hi:'आईटीआई',yrs:2},
 {id:'dip',n:'Diploma or polytechnic',hi:'डिप्लोमा या पॉलिटेक्निक',yrs:3},
 {id:'ug',n:'A degree after Class 12',hi:'कक्षा 12 के बाद डिग्री',yrs:null},
 {id:'pg',n:'A postgraduate degree (master\'s)',hi:'स्नातकोत्तर (मास्टर्स)',yrs:2}
];
function levelOf(id){return LEVELS.filter(function(l){return l.id===id})[0]}
/* State schemes: levels as named or stated on the page we read. "Post-matric" by definition covers every course after Class 10;
   where we rely on that definition rather than a stated list, lvAssumed is set and the card says so. */
var STATE_LV={up1:0,up2:0,rj1:0,dl2:0,hr1:0,tn3:['dip','ug','pg'],tn4:['iti','dip','ug','pg'],ka0:0,ka1:0,ap1:0,ap2:0,tg1:0,wb1:0,br1:0,br2:0,od1:0,as1:0,as2:0,as3:0,mh3:0,gj3:0,mp2:0,mp3:0,cg2:0,
  hr3:['ug','pg'],dl1:['dip','ug','pg'],ka2:['ug','pg'],wb2:['11','dip','ug','pg']};
var STATE_LV_SURE={tn4:1,dl1:1,hr3:1};
/* ---- Version 2 additions (pure) ---- */
var CLOSE={up1:['2026-09-15','2026-10-31'],rj1:['2026-08-15','2026-10-31'],rj2:['2026-08-15','2026-10-31'],ka1:[null,'2026-09-30'],
  br2:['2026-07-15','2026-09-15'],od1:[null,'2026-09-29'],as1:[null,'2026-09-30'],as2:[null,'2026-10-06'],hr2:[null,'2026-12-31'],ar1:['2026-08-06','2026-10-16'],nl1:['2026-08-01','2026-10-31'],nl2:['2026-10-01','2026-12-31'],hr3:[null,'2026-12-31'],gj3:['2026-07-06','2026-09-30'],cg1:[null,'2026-09-30'],cg2:['2026-06-20','2026-12-30'],
  pragati:['2026-06-19','2026-10-31'],saksham:['2026-06-19','2026-10-31'],swanath:['2026-06-19','2026-10-31'],sarswati:[null,'2027-02-28'],pmss:[null,'2026-12-31'],pmsdis:['2026-06-01','2026-10-31'],nmmss:['2026-06-01','2026-11-15']};
var PAYOUT={csss:{year:'2025-26',paid:75125,verified:145325,slots:82000},ishan:{year:'2025-26',paid:0,verified:26632,slots:10000}};
var ONE_TIME={br3:1,od3:1,hp3:1};
/* Official-portal check, 13 November 2026. by: official = read on an official page; part = scheme confirmed there but not every figure;
   notfound = not on any official page. State entries not listed here could not be confirmed (portal refuses automated reading). */
var DLG='https://scstwelfare.delhi.gov.in/sites/default/files/scstwelfare/circulars-orders/scholarship_schemes_2025-26_guidelines.pdf',
    HRE='https://harchhatravratti.highereduhry.ac.in/Eligibility', MHD='https://mahadbt.maharashtra.gov.in/SchemeData/SchemeData?str=',
    ASR='https://directorwptbc.assam.gov.in/sites/default/files/swf_utility_folder/departments/directorate_wpt_uneecopscloud_com_oid_4/menu/document/scholarship_scheme_rates.pdf',
    TNW='https://bcmbcmw.tn.gov.in/welfschemes.htm';
var HRDOCS=['Aadhaar card','Photograph and signature','Income certificate','Haryana domicile certificate','Class 10 and Class 12 certificates','Parivar Pehchan Patra','Fee receipt','Last exam passed certificate (not for first-year students)'];
var VERIFY={
 pmsdis:{by:'news',src:'https://www.buddy4study.com/article/national-scholarship',yr:'2026-27',renew:'You must pass each year.',note:'Income limit, levels and the 31 October 2026 last date are from listings that agree with each other. The department\'s guideline and amounts could not be read.'},
 nmmss:{by:'news',src:'https://news.careers360.com/nmmss-scholarship-2026-education-ministry-extends-application-deadline-oct-31-scholarships-gov-in-students-school-nsp-academic',yr:'2026-27',renew:'Renewed each year on promotion, under the ministry\'s rules.',note:'One lakh new awards a year. The 2026-27 last date was extended several times, most recently to 15 November 2026, as reported in the news.'},
 aictepg:{by:'part',src:'https://www.myscheme.gov.in/schemes/pgssgategpatqsaicte',combine:'You may not take any paid assignment or other stipend while you hold it.',note:'The government scheme page confirms the amount and the GATE or CEED rule. 2026-27 dates were not yet announced when checked; registration usually opens around September.'},
 moma:{by:'official',src:'https://eparlib.sansad.in/bitstream/123456789/3019088/1/AU1662_E60DrS.pdf',note:'Lok Sabha answer from the Ministry of Minority Affairs: the pre-matric, post-matric and merit-cum-means schemes were not approved beyond 2021-22.'},

 pmssc:{by:'official',src:'https://socialwelfare.goa.gov.in/wp-content/uploads/2024/07/Guidelines-to-post-matric-scholaships-to-the-students-belonging-to-scheduled-castes-for-students-in-India-2020-2021-to-2025-26_0001.pdf',yr:'2021-22, the base year of the 2020-21 to 2025-26 guidelines',per:'per year, hosteller / day scholar, at 2021-22 rates (the guidelines link them to prices each April)',
  tbl:[['Group 1: degree and postgraduate professional courses (medicine, engineering, management, computer applications, law and similar)','₹13,500 / ₹7,000'],['Group 2: other professional degree, diploma and certificate courses','₹9,500 / ₹6,500'],['Group 3: other degrees, such as B.A., B.Sc., B.Com.','₹6,000 / ₹3,000'],['Group 4: non-degree courses after Class 10','₹4,000 / ₹2,500']],
  renew:'Benefits are linked to Aadhaar-based attendance at your college.',
  note:'Ministry guidelines of March 2021, read in a copy on the Goa government website. They cover 2020-21 to 2025-26. A 2026 news report says the ministry plans a fee cap and a higher income limit; no new guideline was found on 14 November 2026.'},
 pmsst:{by:'part',src:'https://tribalwelfare.goa.gov.in/wp-content/uploads/2025/04/Post-Matric.pdf',note:'Ministry of Tribal Affairs guidelines, read in a copy on the Goa government website. They confirm the fee reimbursement and the ₹2.5 lakh limit. The maintenance amounts were not read.'},
 yasasvi:{by:'part',src:'https://scholarships.gov.in//public/schemeGuidelines/HP_state_scheme/Centrally%20Sponsored%20Scheme%20of%20Post%20Matric%20Scholarship%20Scheme%20for%20OBC_scheme.pdf',note:'The scheme guidelines on the National Scholarship Portal confirm the scheme and the ₹2.5 lakh limit. The ₹5,000 to ₹20,000 range is from a ministry press note.'},
 topsc:{by:'news',src:'https://news.careers360.com/centre-revises-top-class-scholarship-guidelines-sc-students-directly-pay-tuition-fee-other-charges-up-rs-2-lakh-iit-iim-aiims-nlu/amp',note:'Guidelines revised in November 2025. Read in a news report; the ministry page could not be opened.'},
 pragati:{by:'part',src:'https://dtekerala.gov.in/static/DEPTCIRCULARS/notification-aicte.pdf',yr:'2026-27',note:'AICTE\'s 2026-27 notification (dated 19 June 2026), read in a copy on the Kerala technical education website, confirms the scheme and the 31 October 2026 last date. The amount and limits are from the scheme guidelines as copied by colleges.'},
 saksham:{by:'part',src:'https://dtekerala.gov.in/static/DEPTCIRCULARS/notification-aicte.pdf',yr:'2026-27',note:'Same AICTE notification as Pragati. The amount and limits are from the scheme guidelines as copied by colleges.'},
 swanath:{by:'part',src:'https://dtekerala.gov.in/static/DEPTCIRCULARS/notification-aicte.pdf',yr:'2026-27',combine:'Not with any other central, state or AICTE scholarship.',note:'Same AICTE notification as Pragati. 2,000 awards a year, 1,000 for degree students.'},
 sarswati:{by:'news',src:'https://www.dtnext.in/news/tamilnadu/aicte-opens-applications-for-saraswati-scholarship',yr:'2026-27',combine:'Not with any other scholarship, stipend or salary during the course.',renew:'Renewed each year with a promotion certificate from your institution.',note:'From news reports of AICTE\'s 2026-27 notice. 3,110 awards a year, shared out by state. The AICTE site could not be read.'},
 pmsss:{by:'official',src:'https://education.gov.in/sites/upload_files/mhrd/files/upload_document/pm_jkl.pdf',per:'per year',
  tbl:[['General degree: academic fee','up to ₹30,000'],['Engineering and other professional degrees (nursing, pharmacy, architecture, hotel management): academic fee','up to ₹1.25 lakh'],['MBBS, BDS, BAMS, BHMS: academic fee','up to ₹3 lakh'],['Living costs, all courses (paid to you in monthly instalments)','up to ₹1 lakh']],
  note:'Ministry of Education guidelines (2022). 5,000 new awards a year. The fee is paid to the college; the college may not charge you more than the ceiling. No 2026-27 dates were read on an official page.'},
 inspire:{by:'part',src:'https://www.myscheme.gov.in/schemes/inspire-she',note:'The government scheme page confirms the scheme and the top 1% rule. The amount is from a government summary page; the INSPIRE portal could not be read.'},
 pmss:{by:'official',src:'https://swd.hp.gov.in/wp-content/uploads/2024/08/Information-Brochure-2024-25.pdf',yr:'2024-25',renew:'Every subject and year must be passed at the first attempt.',
  note:'Kendriya Sainik Board brochure for 2024-25, on the Himachal Pradesh government website, and the government scheme page. 5,500 awards a year, half for girls. The 2026-27 last date is from listings.'},
 dl1:{by:'official',src:DLG,yr:'2025-26',per:'per year, hosteller / day scholar',
  tbl:[['Group A degree (medicine, engineering and similar)','₹20,000 / ₹12,000'],['Group A postgraduate','₹24,000 / ₹15,000'],['Group B (diploma-level technical, postgraduate science)','₹15,000 / ₹9,000'],['Group C (certificate and diploma courses)','₹12,000 / ₹8,000'],['Group D general degree','₹12,000 / ₹8,000'],['Group D general postgraduate','₹15,000 / ₹9,000']],
  docs:['Caste certificate issued by a Delhi revenue authority','Delhi domicile certificate, if your caste certificate was issued elsewhere','Income certificate (OBC students)','Previous year\'s marksheet'],
  note:'No 2026-27 guideline was found, so these are the 2025-26 figures.'},
 dl2:{by:'official',src:DLG,yr:'2025-26',combine:'Cannot be held with another scholarship.',renew:'Needs 75% attendance every year.',
  docs:['Aadhaar card','Bank details','Previous marksheets','Original fee receipts','Fee structure on the college letterhead','Income certificate','Delhi caste certificate']},
 hr1:{by:'official',src:HRE,docs:HRDOCS.concat(['Caste certificate']),note:'Income limit, college types and attendance rule read on the portal. The monthly amounts are from the state\'s Sewa department page.'},
 hr2:{by:'official',src:HRE,docs:HRDOCS,combine:'Cannot be held with another scholarship or stipend. You may choose the more useful one.',renew:'Renewed each year if you are promoted, with good conduct and regular attendance.'},
 hr3:{by:'official',src:'https://harchhatravratti.highereduhry.ac.in/',docs:HRDOCS,combine:'Cannot be held with another merit or merit-cum-means scholarship.',renew:'Runs for the full course. Cancelled if you fail the yearly promotion exam at the first attempt.'},
 tn1:{by:'official',src:TNW,note:'The page does not name an academic year.'},
 tn2:{by:'official',src:TNW,note:'The page does not name an academic year. The earlier entry (income limit ₹50,000, about ₹10,000 a year) was not on the official page.'},
 tn4:{by:'official',src:TNW,note:'The page does not name an academic year.'},
 tn5:{by:'official',src:TNW,note:'The page does not name an academic year.'},
 ap1:{by:'official',src:'https://jnanabhumi.ap.gov.in/',per:'per year',tbl:[['ITI','₹10,000'],['Polytechnic','₹15,000'],['Degree and above','₹20,000']],note:'The portal showed no 2026-27 notification on the day it was read.'},
 ap2:{by:'notfound',src:'https://jnanabhumi.ap.gov.in/',note:'The state portal shows no separate scheme for minority students. They are covered by the main Post-Matric Scholarships scheme above.'},
 wb1:{by:'part',src:'https://oasis.wb.gov.in/',note:'The portal confirms the scheme is open to SC, ST and OBC students for 2026-27. It does not state the income limit or the amounts.'},
 wb2:{by:'part',src:'https://purulia.gov.in/?p=27529',renew:'60% across semesters up to degree level, 50% for postgraduates, according to the minorities corporation page.',note:'A district government page confirms the income limit and marks, and that the scheme is not only for minority students. Current amounts and dates were not found.'},
 wb3:{by:'notfound',note:'No government page lists this scheme, and it is not in the Higher Education Council\'s scholarship list.'},
 as1:{by:'part',src:ASR,per:'per month, hosteller / day scholar',tbl:[['Group A (degree, postgraduate, engineering, medical)','₹750 / ₹350'],['Group B (B.Pharma, nursing, LLB, MA, MSc)','₹510 / ₹335'],['Group C (BA, BSc, BCom and similar)','₹400 / ₹210'],['Group D (non-degree courses)','₹260 / ₹160']],
  note:'The department\'s rates sheet gives ₹1.5 lakh. Another official page gives ₹2.5 lakh. Neither is dated, so check your exact limit.'},
 as2:{by:'official',src:ASR,per:'per month, hosteller / day scholar',tbl:[['Group A (degree, postgraduate, engineering, medical)','₹1,200 / ₹550'],['Group B (B.Pharma, nursing, LLB, MA, MSc)','₹820 / ₹530'],['Group C (BA, BSc, BCom and similar)','₹750 / ₹300'],['Group D (non-degree courses)','₹380 / ₹230']],
  note:'The department\'s rates sheet is not dated.'},
 mh1:{by:'official',src:MHD+'E9DDFA703C38E51AE0CB048159E784170A4F3BD768B3A64E4772B0EF7B9990B2',
  docs:['Income certificate from the Tahsildar','Caste certificate and caste validity certificate','Marksheet of your last exam','SSC or HSC marksheet','CAP round allotment letter (professional courses)'],note:'Applications for 2026-27 are taken only on MahaDBT 2.0.'},
 mh2:{by:'part',src:MHD+'E9DDFA703C38E51A19A7691F3B40AD4EE0F3DDA5DE324AC54819922BB3D36B63',renew:'You must pass each year. A failed year is not reimbursed.',
  docs:['Caste certificate','Income certificate or non-creamy-layer certificate','HSC, SSC or last marksheet','CAP allotment letter and caste validity certificate (professional courses)','Leaving certificate','Ration card'],note:'The official page confirms the scheme and the fee shares, but states no income figure.'},
 mh3:{by:'official',src:MHD+'E9DDFA703C38E51AB02E984835E89FEFDB316E301CE6A991F41C5D42B01A7D7E',per:'per month, hosteller / day scholar',
  tbl:[['Group A','₹425 / ₹190'],['Group B','₹290 / ₹190'],['Group C','₹290 / ₹190'],['Group D','₹230 / ₹120'],['Group E','₹150 / ₹90']],combine:'Cannot be held with another scholarship or stipend.',renew:'You must pass the previous year\'s exam.',
  docs:['Caste certificate','Income certificate or declaration','Caste validity certificate (professional courses)','HSC, SSC or last marksheet','Ration card','Leaving certificate','Parents\' declaration on the number of children who benefit'],note:'Applications for 2026-27 are taken only on MahaDBT 2.0.'},
 mp1:{by:'official',src:'https://cmhelpline.mp.gov.in/Schmedetail.aspx?Schemeid=878',docs:['Class 12 marksheet','Aadhaar card','Entrance exam marksheet','Income certificate','Domicile certificate','Fee receipt']},
 ar1:{by:'official',src:'https://apdhte.nic.in/Stipend/2026-27/Scholarship%20Notice.pdf',yr:'2026-27',note:'The notice does not state an income limit. It warns that applying under more than one scheme leads to rejection.'},
 ga1:{by:'official',src:'https://dhe.goa.gov.in/resource/getDocument/PDF%20%20%20165',combine:'Cannot be held with the Interest Free Education Loan or a similar benefit from another scheme.',renew:'Each year, with your last marksheet, bonafide certificate, income certificate and fee receipt.',note:'Rules from the notification of 17 September 2024. No 2026-27 dates were found.'},
 ga2:{by:'official',src:'https://dhe.goa.gov.in/resource/getDocument/PDF%20%20%20163',combine:'Any scholarship you receive is deducted from the loan. Cannot be held with the Bursary Scheme.',note:'Rules from the notification of 21 November 2023. The income limit rises to ₹13 lakh if a brother or sister is also studying. No 2026-27 dates were found.'},
 hp1:{by:'official',src:'https://education.hp.gov.in/?p=5224',renew:'Yearly until you finish. The marks needed rise from 55% to 60% in later years.',note:'The page is not dated. Amount revised from 2022-23.'},
 hp2:{by:'official',src:'https://education.hp.gov.in/?p=5224',renew:'Continues until you finish, as long as you do not fail a year.',note:'The page is not dated. Amount revised from 2022-23.'},
 hp3:{by:'official',src:'https://education.hp.gov.in/?p=5224',note:'The page is not dated.'},
 hp4:{by:'official',src:'https://education.hp.gov.in/?p=5224',note:'The page is not dated.'},
 hp5:{by:'official',src:'https://education.hp.gov.in/?p=5224',note:'The page is not dated.'},
 mn1:{by:'official',src:'https://scholarships.gov.in/public/schemeGuidelines/Manipur_state_scheme/manipur_Guidelines_3056.pdf',combine:'Cannot be held with another scholarship.',renew:'Renew each year on the portal. You must have passed, with no backlog pending for more than a year.',note:'The guidelines give no dates. Applications open when notified.'},
 nl1:{by:'official',src:'https://highereducation.nagaland.gov.in/wp-content/uploads/2025/07/Guidelines-State-Merit-Scholarship.pdf',combine:'You must not be receiving any other scholarship.',renew:'Needs 70% in each degree year to renew.',note:'Dates read on the state scholarship portal.'},
 nl2:{by:'part',src:'https://scholarship.nagaland.gov.in/',combine:'Not for students receiving any central, state or AICTE scholarship.',note:'The state portal confirms the scheme and its dates. The income limit and course rules come from the 2024 guidelines and were not re-read.'},
 an1:{by:'official',src:'https://scholarships.gov.in/public/schemeGuidelines/Andaman/3027_G.pdf',renew:'Depends on good conduct, regular attendance and promotion to the next class.',note:'The guidelines are dated November 2020. Applications are usually invited in May or June.'},
 py1:{by:'official',src:'https://styandptg.py.gov.in/2025/OCTOBER/EXTRAORDINARYPART-II/1/75-PART-II%20dated%2006-10-2025.pdf',yr:'2024-25 and 2025-26',per:'the yearly maximum',
  tbl:[['MBBS','₹2,25,000'],['BDS','₹1,50,000'],['B.Sc (Hons) Agriculture or Horticulture','₹42,500'],['B.Tech, B.Arch, B.Voc','₹25,000'],['Paramedical degree, including B.Sc Nursing','₹20,000'],['LLB, BA LLB','₹12,500'],['Paramedical diploma','₹10,000']],
  combine:'Not for students receiving another regular scholarship or stipend.',renew:'Needs promotion with at least 50% marks, good conduct and regular attendance.',note:'No 2026-27 dates were found.'}
};
var NOTFOUND_WARN='We could not find this scheme on any official government page on 13 November 2026. Do not plan around it until you see it on a government portal.';
SCHEMES.forEach(function(s){
  var c=CLOSE[s.id]; if(c){ s.open=c[0]; s.close=c[1] }
  s.payout=PAYOUT[s.id]||null;
  if(!s.lv){ var sl=STATE_LV[s.id]; if(sl===0){ s.lv=POSTMATRIC; s.lvAssumed=true } else if(sl){ s.lv=sl; if(!STATE_LV_SURE[s.id]) s.lvAssumed=true } else s.lv=['ug'] }
  s.stack=ONE_TIME[s.id]?'extra':'main';
  var v=VERIFY[s.id];
  s.chk={date:v&&s.lvl==='C'?'2026-11-14':'2026-11-13',by:v?v.by:(s.lvl==='C'?'report':'unconf'),src:v&&v.src||null,yr:v&&v.yr||null,note:v&&v.note||null};
  if(v){ s.tbl=v.tbl||null; s.per=v.per||null; s.docs=v.docs||null; s.combine=v.combine||null; s.renew=v.renew||null; if(v.src&&v.by!=='notfound') s.src=v.src;
    if(v.by==='notfound'){ s.warn=NOTFOUND_WARN; s.val=null } }
});
var LOADED=STATES.filter(function(st){return SCHEMES.some(function(s){return s.st===st.id})});
var VCOUNT={all:0,ok:0}; SCHEMES.forEach(function(s){ if(s.lvl!=='C'){ VCOUNT.all++; if(s.chk.by==='official'||s.chk.by==='part') VCOUNT.ok++ } });
var MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function fmtDate(iso){ return (+iso.slice(8,10))+' '+MONTHS[+iso.slice(5,7)-1]+' '+iso.slice(0,4) }
function addDays(iso,n){ var p=iso.split('-'), d=new Date(Date.UTC(+p[0],+p[1]-1,+p[2]+n)); return d.toISOString().slice(0,10) }
function addYear(iso){ return (+iso.slice(0,4)+1)+iso.slice(4) }
/* Calendar entries: a real closing date if it is still ahead, plus a reminder to check when the window reopens,
   worked out from the 2026-27 dates (an estimate, not an announced date). */
function calendarEvents(matches,today){
  var out=[];
  matches.forEach(function(m){
    var s=m.s, st=s.st?stateOf(s.st):null, portal=s.portal||(st&&st.portal)||'';
    if(!s.close) return;
    if(s.close>=today) out.push({date:s.close,kind:'close',title:'Last day to apply: '+s.name,desc:portal});
    var chk=s.open?addYear(s.open):addDays(addYear(s.close),-45);
    if(chk>=today) out.push({date:chk,kind:'check',title:'Check: has '+s.name+' opened? (It '+(s.open?'opened on ':'closed on ')+fmtDate(s.open||s.close)+' last time)',desc:portal});
  });
  out.sort(function(a,b){return a.date<b.date?-1:a.date>b.date?1:0});
  return out;
}
function icsEsc(t){ return String(t).replace(/\\/g,'\\\\').replace(/;/g,'\;').replace(/,/g,'\\,').replace(/\r?\n/g,'\\n') }
function buildIcs(events,stamp){
  var o=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Scholarship Navigator//EN','CALSCALE:GREGORIAN'];
  events.forEach(function(e,i){
    var d=e.date.replace(/-/g,''), n=addDays(e.date,1).replace(/-/g,'');
    o.push('BEGIN:VEVENT','UID:sn-'+d+'-'+i+'@scholarship-navigator','DTSTAMP:'+stamp,'DTSTART;VALUE=DATE:'+d,'DTEND;VALUE=DATE:'+n,'SUMMARY:'+icsEsc(e.title),'DESCRIPTION:'+icsEsc(e.desc||''));
    if(e.kind==='close') o.push('BEGIN:VALARM','ACTION:DISPLAY','DESCRIPTION:'+icsEsc(e.title),'TRIGGER:-P7D','END:VALARM');
    o.push('END:VEVENT');
  });
  o.push('END:VCALENDAR');
  return o.join('\r\n')+'\r\n';
}
/* Best combination. Assumes one regular scholarship at a time with one-time grants on top; the loan interest
   subsidy cannot be held with any government scholarship. Schemes with a payout warning are left out. */
function bestPlan(matches,years,subsidy){
  var mains=[],extras=[],unvalued=[],skipped=[];
  matches.forEach(function(m){ var s=m.s;
    if(s.warn){ skipped.push(s); return }
    if(s.val==null){ unvalued.push(s); return }
    if(s.stack==='extra') extras.push(s); else mains.push(s);
  });
  mains.sort(function(a,b){return b.val-a.val});
  var main=mains[0]||null, schol=(main?main.val*years:0)+extras.reduce(function(t,s){return t+s.val},0);
  var pick=subsidy>schol?'subsidy':(schol>0?'scholarship':'none');
  var ids=pick==='scholarship'?(main?[main.id]:[]).concat(extras.map(function(s){return s.id})):[];
  return {pick:pick,main:main,extras:extras,scholTotal:schol,subsidy:subsidy,unvalued:unvalued,skipped:skipped,ids:ids};
}
/* ===== ADDED 14 November 2026: loans, private scholarships, institution registers, sources ===== */
var CHECKED2='14 November 2026';
/* Bank rates read on each bank's own rate page on 14 November 2026. Rates float with the repo rate. */
var LENDERS=[
 {n:'State Bank of India',url:'https://sbi.bank.in/web/interest-rates/interest-rates/loan-schemes-interest-rates/education-loan-scheme',asof:'rates in force from 15 October 2026 (page updated 22 October 2026)',
  low:7.00,rows:[['Concessional rate for students admitted to IITs, IIMs, BITS Pilani, IIFT, ISB, XLRI and XIM (until 31 December 2026)','7.00%'],['PM-Vidyalaxmi loans to listed institutions','7.15% / 7.45% / 8.65% by institution group'],['Scholar Loan (select institutions)','7.15% to 7.90%'],['Student Loan up to ₹7.5 lakh, no collateral','10.15%'],['Student Loan above ₹7.5 lakh, with collateral','9.65%'],['Skill Loan up to ₹7.5 lakh','9.65%']],note:'0.50% less for girl students on the Student Loan.'},
 {n:'Punjab National Bank',url:'https://pnb.bank.in/Retail-Advances-interst-rate-on-advances-linked-to-mclr.html',asof:'rate page read on 14 November 2026',
  low:7.10,rows:[['PM-Vidyalaxmi loans to listed institutions','7.10% to 8.85% by institution group'],['PNB Pratibha (premier institutes, loans above ₹7.5 lakh)','7.20% to 8.10%'],['PNB Saraswati up to ₹7.5 lakh (government guarantee scheme)','10.35% (9.85% for girls)'],['PNB Saraswati with full collateral','9.60% (9.10% for girls)'],['MBBS or medical PG above ₹7.5 lakh with full collateral','8.35%']],note:'Floating rates linked to the bank\'s repo-linked rate.'},
 {n:'Bank of Baroda',url:'https://bankofbaroda.bank.in/personal-banking/loans/education-loan/baroda-gyan',url2:'https://bankofbaroda.bank.in/personal-banking/loans/education-loan/pradhan-mantri-vidyalaxmi-scheme',asof:'scheme pages read on 14 November 2026',
  low:7.10,rows:[['PM-Vidyalaxmi loans to listed institutions','7.10% to 8.65% by institution group'],['Baroda Gyan, study in India, up to ₹7.5 lakh','10.15%'],['Baroda Gyan, above ₹7.5 lakh','10.05%']],note:'0.50% less for girl students on Baroda Gyan.'},
 {n:'Union Bank of India',url:'https://unionbankofindia.bank.in/pdf/retail_roi.pdf',asof:'rates in force from 8 October 2026',
  low:7.35,rows:[['PM-Vidyalaxmi loans to listed institutions','7.35% to 8.75% by institution group'],['Union Education up to ₹7.5 lakh','10.25% (9.75% for girls)'],['Union Education above ₹7.5 lakh','10.00% (9.50% for girls)'],['Skill development loan','9.75%']],note:''},
 {n:'Canara Bank',url:'https://www.canarabank.bank.in/pages/rates-of-interest-for-retail-lending-schemes-linked-to-rllr',asof:'rates in force from 9 October 2026',
  low:7.50,rows:[['PM-Vidyalaxmi loans to listed institutions','7.50% / 8.25% / 8.50% by institution group'],['Vidya Turant (select premier institutes)','7.60% to 8.85%'],['Vidya Sagar up to ₹7.5 lakh','10.25%'],['Vidya Sagar above ₹7.5 lakh','9.85%'],['IBA Skill Loan (up to ₹7.5 lakh)','9.75%']],note:''},
 {n:'Bank of India',url:'https://bankofindia.bank.in/education-loan/star-education-loan-studies-in-india',asof:'the bank\'s site did not allow a program to read the current figure on 14 November 2026',
  low:null,rows:[['Star Education Loan up to ₹7.5 lakh','Repo-based rate + 1.70%'],['Star Education Loan above ₹7.5 lakh','Repo-based rate + 2.50%']],note:'We could not confirm the rupee figure. Ask the branch.'}
];
/* State government loan schemes. chk: official = read on a government page; part = scheme on a government page, figure from a news report or listing; news = news reports only */
var STATE_LOANS=[
 {st:'BR',n:'Bihar Student Credit Card',amt:'Up to ₹4 lakh',rate:'Interest-free for all applicants (announced September 2025; earlier 4%, and 1% for girls, transgender and disabled students)',who:'Bihar residents who have passed Class 12 and join a recognised course. No collateral; the state is the guarantor.',url:'https://www.7nishchay-yuvaupmission.bihar.gov.in/',chk:'news',src:'https://ommcomnews.com/india-news/nitish-kumar-announces-interest-free-loans-under-student-credit-card-scheme/'},
 {st:'WB',n:'West Bengal Student Credit Card',amt:'Up to ₹10 lakh',rate:'4% simple interest after the state\'s subsidy',who:'Residents of West Bengal for at least 10 years, for study from Class 10 onward in India or abroad. No collateral.',url:'https://wbscc.wb.gov.in/',chk:'part',src:'https://wb.gov.in/government-schemes-details-west-bengal-student-credit-card-scheme.aspx'},
 {st:'OD',n:'Kalinga Sikhya Sathi Yojana',amt:'Bank loans up to ₹10 lakh',rate:'You pay 1% interest; the state pays the rest of the interest',who:'Odisha residents taking an education loan from a scheduled bank. A family income limit applies (reported as ₹6 lakh).',url:'https://dhe.odisha.gov.in/en/node/37881',chk:'official',src:'https://dhe.odisha.gov.in/en/node/37881'},
 {st:'GJ',n:'Gujarat backward classes education loan (GBCDC)',amt:'Up to ₹15 lakh',rate:'4% (3.5% for girls), as reported',who:'Students from backward classes in Gujarat, for listed degree courses.',url:'https://www.myscheme.gov.in/',chk:'news',src:'https://youthpower.in/scheme/elgbcdc'},
 {st:'AS',n:'Bidya Lakshmi (Assam)',amt:'₹5 lakh to ₹10 lakh',rate:'4%',who:'Only for children of regular Assam government employees.',url:'https://www.myscheme.gov.in/',chk:'news',src:'https://www.publicservicesmap.in/schemes/bidya-lakshmi-loan--bll'}
];
var LOAN_CHK={official:['good','Read on a government page'],part:['warn','Scheme on a government page; the rate is from a listing or news report'],news:['warn','From news reports or a listing. Not read on a government page']};
/* Company, public-sector and trust scholarships. lv: S school, D diploma or polytechnic, I ITI, U degree, P postgraduate, A abroad.
   g: 'F' girls only. st: states (empty = all India). inc: family income limit in rupees, null = not stated.
   chk: doc = read in the provider's own document; site = provider page opens, details from listing sites and news; list = listing sites only. */
var PRIV=[
 {n:'Reliance Foundation Undergraduate Scholarships',by:'Reliance Foundation',k:'Company',lv:'U',inc:1500000,amt:'Up to ₹2 lakh over the whole degree',who:'First-year students of a regular full-time degree in any subject, with at least 60% in Class 12. Families under ₹2.5 lakh get preference. Selection includes an aptitude test.',when:'The 2026-27 round closed on 5 October 2026. It usually opens in August.',url:'https://www.scholarships.reliancefoundation.org/',src:'https://school.careers360.com/articles/reliance-foundation-scholarship-2026-27',chk:'site'},
 {n:'Reliance Foundation Postgraduate Scholarships',by:'Reliance Foundation',k:'Company',lv:'P',inc:null,amt:'Up to ₹6 lakh over the degree',who:'First-year postgraduate students in selected fields. Selection by application, test and interview. No income limit.',when:'The 2026-27 round closed on 5 October 2026.',url:'https://www.scholarships.reliancefoundation.org/',src:'https://www.buddy4study.com/page/reliance-foundation-scholarships',chk:'site'},
 {n:'HDFC Bank Parivartan ECSS Programme',by:'HDFC Bank',k:'Company',lv:'SDIUP',inc:250000,amt:'₹15,000 to ₹75,000 a year by level: ₹18,000 for diploma or ITI, ₹30,000 for a general degree, ₹50,000 for a professional degree',who:'At least 55% in the last exam. Preference to students whose family faced a crisis, such as the loss of a parent or a job, in the last three years.',when:'Opened in August 2026. Reported closing dates differ (31 October and 15 December 2026). Check the portal.',url:'https://www.buddy4study.com/page/hdfc-bank-parivartans-ecs-scholarship',src:'https://www.careerindia.com/news/hdfc-parivartan-ecss-scholarship-2026-deadline-extended-apply-online-011-68143.html',chk:'site'},
 {n:'Tata Capital Pankh Scholarship',by:'Tata Capital',k:'Company',lv:'SDIU',inc:250000,amt:'A share of fees by marks, up to ₹18,000 a year for degree, diploma and ITI students (₹15,000 for Class 11 and 12)',who:'At least 60% in the last exam. Sources give the income limit as ₹2.5 lakh or ₹4 lakh; we use the lower figure.',when:'The application page showed a closing date of 15 November 2026.',url:'https://www.buddy4study.com/page/the-tata-capital-pankh-scholarship-programme',src:'https://www.careerindia.com/news/tata-capital-pankh-scholarship-2026-deadline-eligibility-application-guide-011-67589.html',chk:'site'},
 {n:'Kotak Kanya Scholarship',by:'Kotak Education Foundation',k:'Company',lv:'U',g:'F',inc:600000,amt:'₹1.5 lakh a year until the degree ends',who:'Girls with at least 75% in Class 12, in the first year of a professional degree (engineering, medicine, law, architecture, design and similar) at listed institutions.',when:'Reported closing date 30 September 2026.',url:'https://www.kotakeducationfoundation.org/kotak-kanya-scholarship',src:'https://university.careers360.com/articles/kotak-kanya-scholarship-2026',chk:'site'},
 {n:'Azim Premji Scholarship',by:'Azim Premji Foundation',k:'Trust or foundation',lv:'UD',g:'F',inc:null,amt:'₹30,000 a year for the whole first degree or diploma',who:'Girls who studied in government schools and are in the first year of a degree or diploma of 2 to 5 years, in the states the Foundation covers. Andhra Pradesh and Delhi were added in 2026.',when:'Round 2 runs from 10 to 31 January 2027.',url:'https://azimpremjifoundation.org/',src:'https://school.careers360.com/articles/azim-premji-scholarship-2026',chk:'list'},
 {n:'SBI Platinum Jubilee Asha Scholarship',by:'SBI Foundation',k:'Public sector',lv:'SUP',inc:600000,amt:'Up to ₹75,000 a year for a degree, ₹2 lakh at an IIT or for MBBS, ₹5 lakh at an IIM, ₹15,000 for Class 9 to 12',who:'At least 75% in the last exam. Family income up to ₹6 lakh (₹3 lakh for school students). Half the awards are reserved for SC and ST students.',when:'The 2026-27 round closed on 19 September 2026.',url:'https://www.sbiashascholarship.co.in/',src:'https://www.collegechalo.com/scholarship/sbi-asha-scholarship',chk:'site'},
 {n:'LIC Golden Jubilee Scholarship',by:'Life Insurance Corporation of India',k:'Public sector',lv:'SDIU',inc:450000,amt:'₹50,000 a year for medicine, ₹40,000 for engineering, ₹20,000 for other degrees, diploma and ITI; ₹15,000 after Class 10',who:'At least 60% in Class 10 or 12, and admitted in 2026-27 to the first year. Ranked by marks within each LIC division.',when:'The 2026 scheme closed on 30 September 2026.',url:'https://licindia.in/documents/d/guest/golden-jubilee-scholarship-scheme-2026',src:'',chk:'doc'},
 {n:'ONGC Merit Scholarship',by:'ONGC Foundation',k:'Public sector',lv:'UP',inc:450000,amt:'₹48,000 a year',who:'SC, ST, OBC and economically weaker General students with at least 60%, in the first year of engineering, MBBS, MBA or MSc Geology or Geophysics. Income under ₹4.5 lakh for SC and ST, under ₹2 lakh for OBC and General. Half the awards are for girls.',when:'Reported dates differ between sources. Check the portal.',url:'https://ongcscholar.org/',src:'https://www.buddy4study.com/scholarship/ongc-merit-scholarship',chk:'site'},
 {n:'Aditya Birla Capital Scholarship',by:'Aditya Birla Capital Foundation',k:'Company',lv:'SU',inc:null,amt:'Up to ₹60,000',who:'Merit-cum-means. Read the levels and income limit on the application page.',when:'The application page showed a closing date of 22 November 2026.',url:'https://www.buddy4study.com/page/aditya-birla-capital-scholarship',src:'https://www.indiascholarships.in/private-scholarships',chk:'site'},
 {n:'Aditya Birla Group Scholarships',by:'Aditya Birla Group',k:'Company',lv:'UP',inc:null,amt:'See the provider page',who:'Only for top-ranked students at the group\'s partner institutes (selected IITs, IIMs, law and other premier schools).',when:'Annual.',url:'https://www.adityabirlascholars.net/',src:'https://hbkcareers.org/scholarships',chk:'site'},
 {n:'Infosys Foundation STEM Stars',by:'Infosys Foundation',k:'Company',lv:'U',g:'F',inc:800000,amt:'Up to ₹1 lakh a year',who:'Girls in a first-year science, technology, engineering or medicine degree.',when:'The application page showed only a round that closed on 30 October 2025. No 2026 round was listed on 14 November 2026.',url:'https://www.buddy4study.com/page/infosys-foundation-stem-stars-scholarship-program',src:'https://www.indiascholarships.in/scholarships/infosys-foundation-stem-stars-scholarship-program',chk:'site'},
 {n:'Bharti Airtel Scholarship',by:'Bharti Airtel Foundation',k:'Company',lv:'U',inc:850000,amt:'100% of yearly fees for the whole course',who:'First-year engineering in electronics, IT, computer science, data science, aerospace or new technologies at a top-50 NIRF engineering institute. Girls get preference.',when:'The application page showed a closing date of 5 November 2026 (closed).',url:'https://bhartiairtelfoundation.org/bharti-airtel-scholarship',src:'https://www.buddy4study.com/page/bharti-airtel-scholarship',chk:'site'},
 {n:'Sitaram Jindal Foundation Scholarship',by:'Sitaram Jindal Foundation',k:'Trust or foundation',lv:'SDIUP',inc:400000,amt:'Up to ₹3,200 a month',who:'Class 11 to postgraduate, ITI and diploma students. Income up to ₹4 lakh for salaried families, ₹2.5 lakh for others.',when:'Reported closing date 30 September 2026.',url:'https://www.sitaramjindalfoundation.org/',src:'https://hbkcareers.org/scholarships',chk:'site'},
 {n:'Foundation for Excellence',by:'Foundation for Excellence (FFE)',k:'Trust or foundation',lv:'U',inc:null,amt:'See the provider page',who:'Merit-cum-means scholarships for professional degrees such as engineering and medicine.',when:'Annual.',url:'https://ffe.org/',src:'https://hbkcareers.org/scholarships',chk:'site'},
 {n:'Amazon Future Engineer Scholarship',by:'Amazon India with Foundation for Excellence',k:'Company',lv:'U',g:'F',inc:null,amt:'₹50,000 a year until the degree ends',who:'Girls in the first year of a computer science or related engineering degree.',when:'The application page showed only a round that closed on 30 November 2025.',url:'https://www.buddy4study.com/page/amazon-future-engineer-scholarship',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'site'},
 {n:'Vidyadhan',by:'Sarojini Damodaran Foundation',k:'Trust or foundation',lv:'SU',inc:null,amt:'₹10,000 to ₹60,000 a year (reported)',who:'Students from low-income families after Class 10, in the states where the programme runs.',when:'Opens after Class 10 results.',url:'https://www.vidyadhan.org/',src:'https://hbkcareers.org/scholarships',chk:'site'},
 {n:'Santoor Women\'s Scholarship',by:'Wipro Consumer Care and Wipro Cares',k:'Company',lv:'U',g:'F',st:['AP','MH'],inc:null,amt:'₹30,000 (one source says each year, another says one time)',who:'Girls from government schools in the first year of a degree. The 2026-27 round was reported for Andhra Pradesh and Maharashtra.',when:'Closed on 15 October 2026.',url:'https://www.santoorscholarships.com/',src:'https://www2.fundsforngos.org/?p=494922',chk:'site'},
 {n:'Colgate Keep India Smiling Scholarship (dental)',by:'Colgate-Palmolive India',k:'Company',lv:'UP',inc:null,amt:'₹75,000 one time',who:'Dental students (BDS and MDS) from low-income families.',when:'The application page showed a closing date of 30 November 2026.',url:'https://www.buddy4study.com/page/colgate-keep-india-smiling-scholarship-program',src:'https://www.indiascholarships.in/scholarships/colgate-keep-india-smiling-scholarship',chk:'site'},
 {n:'Legrand Empowering Scholarship',by:'Legrand India',k:'Company',lv:'U',inc:null,amt:'Up to ₹1 lakh a year (2025-26 round)',who:'Read the groups covered on the application page.',when:'The 2025-26 round closed on 5 December 2025. No newer round was listed on 14 November 2026.',url:'https://www.buddy4study.com/page/legrand-empowering-scholarship-program',src:'https://hbkcareers.org/scholarships',chk:'site'},
 {n:'Federal Bank Hormis Memorial Foundation Scholarship',by:'Federal Bank',k:'Company',lv:'U',inc:null,amt:'₹20,000 to ₹1 lakh (reported)',who:'Professional degree students in the states the bank lists.',when:'Reported closing date 15 December 2026.',url:'https://www.federalbank.co.in/',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'list'},
 {n:'Tata Trusts Medical and Healthcare Scholarship',by:'Tata Trusts',k:'Trust or foundation',lv:'UP',inc:null,amt:'₹30,000 to ₹50,000 (reported)',who:'Students of medicine and healthcare courses.',when:'Check the provider page.',url:'https://www.tatatrusts.org/',src:'https://www.indiascholarships.in/private-scholarships',chk:'list'},
 {n:'Buddy4Study India Foundation Scholarship',by:'Buddy4Study India Foundation',k:'Trust or foundation',lv:'SU',inc:800000,amt:'₹25,000 to ₹75,000 for a degree; ₹6,000 to ₹24,000 for Class 11 and 12',who:'At least 60% in the last class. Preference to girls, students with disabilities, orphans and government-school students.',when:'Annual.',url:'https://www.buddy4study.com/',src:'https://hbkcareers.org/scholarships',chk:'list'},
 {n:'Concentrix Scholarship',by:'Concentrix',k:'Company',lv:'U',inc:null,amt:'₹65,000 (reported)',who:'Read the conditions on the listing.',when:'Reported closing date 15 November 2026.',url:'https://www.indiascholarships.in/corporate-scholarships',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'list'},
 {n:'Rolls-Royce Wings4Her Scholarship',by:'Rolls-Royce India',k:'Company',lv:'U',g:'F',inc:null,amt:'₹25,000 to ₹35,000 (reported)',who:'Women studying engineering.',when:'Reported closing date 30 November 2026.',url:'https://www.indiascholarships.in/corporate-scholarships',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'list'},
 {n:'Mahindra Saarthi Abhiyaan Scholarship',by:'Mahindra and Mahindra',k:'Company',lv:'SU',g:'F',inc:null,amt:'₹10,000 (reported)',who:'Daughters of truck drivers.',when:'Reported closing date 30 November 2026.',url:'https://www.indiascholarships.in/corporate-scholarships',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'list'},
 {n:'TATA AIA Paras Scholarship',by:'TATA AIA Life Insurance',k:'Company',lv:'U',inc:null,amt:'₹15,000 (reported)',who:'Read the conditions on the listing.',when:'Reported closing date 30 November 2026.',url:'https://www.indiascholarships.in/corporate-scholarships',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'list'},
 {n:'LIC HFL Vidyadhan Scholarship',by:'LIC Housing Finance',k:'Public sector',lv:'SU',inc:null,amt:'₹10,000 to ₹25,000 (reported)',who:'Read the conditions on the listing.',when:'Reported closing date 31 December 2026.',url:'https://www.indiascholarships.in/corporate-scholarships',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'list'},
 {n:'Schindler Igniting Minds Scholarship',by:'Schindler India',k:'Company',lv:'DU',inc:null,amt:'₹10,000 to ₹20,000 (reported)',who:'Read the conditions on the listing.',when:'Reported closing date 15 January 2027.',url:'https://www.indiascholarships.in/corporate-scholarships',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'list'},
 {n:'Indus Towers Scholarship for Students with Disabilities',by:'Indus Towers',k:'Company',lv:'U',inc:null,amt:'₹25,000 to ₹75,000 (reported)',who:'Students with disabilities.',when:'Check the listing.',url:'https://www.indiascholarships.in/corporate-scholarships',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'list',dis:1},
 {n:'Mirae Asset Foundation Scholarship',by:'Mirae Asset Foundation',k:'Trust or foundation',lv:'U',inc:null,amt:'₹40,000 to ₹50,000 (reported)',who:'Read the conditions on the listing.',when:'Check the listing.',url:'https://www.indiascholarships.in/corporate-scholarships',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'list'},
 {n:'Dr. Ambedkar Vidya Jyothi Scholarship',by:'Canara Bank',k:'Public sector',lv:'SU',inc:null,amt:'Varies',who:'SC and ST students. Apply through a Canara Bank branch.',when:'Check with the branch.',url:'https://www.indiascholarships.in/corporate-scholarships',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'list',cats:['SC','ST']},
 {n:'L&T Build India Scholarship',by:'Larsen & Toubro',k:'Company',lv:'P',inc:null,amt:'₹1,60,800 (reported)',who:'Postgraduate engineering students in construction-related fields at partner institutes.',when:'Check the listing.',url:'https://www.indiascholarships.in/corporate-scholarships',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'list'},
 {n:'IndianOil and ONGC sports scholarships',by:'Indian Oil Corporation and ONGC',k:'Public sector',lv:'SU',inc:null,amt:'IndianOil ₹1.44 to ₹2.4 lakh; ONGC ₹1.8 to ₹3.6 lakh a year (reported)',who:'Young sportspeople with a strong competition record. Separate from academic scholarships.',when:'Check the listing.',url:'https://www.indiascholarships.in/corporate-scholarships',src:'https://www.indiascholarships.in/corporate-scholarships',chk:'list'},
 {n:'J N Tata Endowment',by:'J N Tata Endowment',k:'Trust or foundation',lv:'A',inc:null,amt:'Loan scholarship (see the provider page)',who:'Postgraduate and doctoral study abroad.',when:'Annual.',url:'https://jntataendowment.org/',src:'https://scholarlify.com/b/47/csr-private-scholarships-india',chk:'site'},
 {n:'K C Mahindra Scholarships for Postgraduate Studies Abroad',by:'K C Mahindra Education Trust',k:'Trust or foundation',lv:'A',inc:null,amt:'See the provider page',who:'Postgraduate study abroad.',when:'Annual.',url:'https://www.kcmet.org/',src:'',chk:'site'},
 {n:'Inlaks Shivdasani Foundation Scholarships',by:'Inlaks Shivdasani Foundation',k:'Trust or foundation',lv:'A',inc:null,amt:'See the provider page',who:'Postgraduate study at top universities abroad.',when:'Annual.',url:'https://inlaksfoundation.org/',src:'',chk:'site'},
 {n:'Narotam Sekhsaria Foundation Scholarship',by:'Narotam Sekhsaria Foundation',k:'Trust or foundation',lv:'PA',inc:null,amt:'Interest-free loan scholarship (see the provider page)',who:'Postgraduate study in India or abroad.',when:'Annual.',url:'https://nsfoundation.co.in/',src:'',chk:'site'}
];
var PRIV_CHK={doc:['good','Read in the provider\'s own document'],site:['warn','The provider\'s page opens. The details come from scholarship listing sites and news reports'],list:['bad','Listing sites only. We did not find or could not open the provider\'s own page']};
var PRIV_LV={S:'School',D:'Diploma or polytechnic',I:'ITI',U:'Degree',P:'Postgraduate',A:'Study abroad'};
/* Institution registers loaded into data/inst/ */
var REGISTERS=[
 ['AISHE list of universities (Ministry of Education), via AIKosh','https://aikosh.indiaai.gov.in/home/datasets/details/all_universities_as_per_aishe_dashboard.html','1,362 universities. AIKosh copy last modified 15 December 2025.'],
 ['AISHE list of colleges (Ministry of Education), via AIKosh','https://aikosh.indiaai.gov.in/home/datasets/details/all_colleges_as_per_aishe_dashboard_3.html','52,509 colleges with their affiliating university. Last modified 15 December 2025.'],
 ['PM-Vidyalaxmi list of institutions (AISHE), via AIKosh','https://aikosh.indiaai.gov.in/home/datasets/details/all_pm_vidyalaxmi_as_per_aishe_dashboard.html','902 institutions, marked as such in the finder.'],
 ['AISHE institution directory (the original source of the three lists)','https://dashboard.aishe.gov.in/hedirectory/#/hedirectory',''],
 ['ITI list from the Directorate General of Training (Bharat Skills training-centre directory)','https://bharatskills.gov.in/reg/User/TrainingCenter.aspx','14,754 ITIs with name, state and district, read on 14 November 2026. In 169 entries the directory gives a state that does not match the state number inside the ITI\'s own code (for example an ITI in Raigarh, Chhattisgarh filed under Raigad, Maharashtra). We placed those under the state in the code.'],
 ['DGT grading scores of ITIs for 2026-27','https://dgt.gov.in/sites/default/files/2026-06/Final-Circular-PublicationofScores-ITI-2026-27_0.pdf','Grades for 14,597 of the ITIs, published 1 June 2026.'],
 ['AISHE list of stand-alone institutions, via AIKosh','https://aikosh.indiaai.gov.in/home/datasets/details/all_standalone_as_per_aishe_dashboard.html','16,671 polytechnics, nursing, teacher-training, paramedical, PGDM, pharmacy and hotel-management institutes, with their type and management. Loaded 14 November 2026.'],
 ['AISHE list of AIIMS (Institutes of National Importance), via AIKosh','https://aikosh.indiaai.gov.in/home/datasets/details/aiims_institute_of_national_importance.html','Used to check that all 20 AIIMS are in the finder. They are.']
];
var LISTING_SITES=[
 ['Buddy4Study (runs the applications for many company scholarships)','https://www.buddy4study.com/'],
 ['Vidyasaarathi (NSDL), a portal for company scholarships','https://www.vidyasaarathi.co.in/'],
 ['IndiaScholarships: corporate scholarships','https://www.indiascholarships.in/corporate-scholarships'],
 ['IndiaScholarships: private scholarships','https://www.indiascholarships.in/private-scholarships'],
 ['HBK Careers: list of 100 scholarships','https://hbkcareers.org/scholarships'],
 ['BankBazaar: lowest education loan rates (used only to find bank pages)','https://www.bankbazaar.com/lowest-interest-rate-on-education-loan.html']
];
var INST_N={"AP":3903,"AR":87,"AS":925,"BR":3013,"CH":41,"CG":1425,"DL":412,"GA":115,"GJ":4250,"HR":2000,"HP":763,"JK":613,"JH":1185,"KA":8302,"KL":2715,"LA":19,"MP":5170,"MH":9890,"MN":174,"ML":135,"MZ":124,"NL":115,"OD":2953,"PY":139,"PB":1823,"RJ":7314,"SK":52,"TN":4598,"TG":3012,"TR":114,"UK":985,"UP":16160,"WB":2722,"AN":15,"LD":9,"DN":28};

/* ---- r7: application status, change notes, change log (pure) ---- */
function daysBetween(a,b){ var p=a.split('-'),q=b.split('-'); return Math.round((Date.UTC(+q[0],+q[1]-1,+q[2])-Date.UTC(+p[0],+p[1]-1,+p[2]))/86400000) }
/* k: open | soon | closed | none. Dates are the 2026-27 round as recorded. */
function schemeStatus(s,today){
  if(!s.close) return {k:'none',t:'No 2026-27 dates on record'};
  if(s.open&&today<s.open){ var d0=daysBetween(today,s.open); return {k:'soon',d:d0,t:'Opens in '+d0+(d0===1?' day':' days')+' ('+fmtDate(s.open)+')'} }
  if(today<=s.close){ var d=daysBetween(today,s.close); return {k:'open',d:d,t:d===0?'Last day today':d+(d===1?' day':' days')+' left (closes '+fmtDate(s.close)+')'} }
  var nx=s.open?addYear(s.open):null;
  return {k:'closed',t:'Closed on '+fmtDate(s.close)+(nx?'. Last year\'s pattern suggests it reopens around '+fmtDate(nx):'')};
}
var STATUS_K={open:['good','Open now'],soon:['warn','Opening soon'],closed:['plain','Closed for 2026-27'],none:['plain','Dates not known']};
/* What changed in each scheme's entry, newest first. */
var CHG={
 pmssc:[['2026-11-14','Added. Amounts and income limit read in the ministry guidelines.']],
 pmsst:[['2026-11-14','Added. Income limit read in the ministry guidelines.']],
 yasasvi:[['2026-11-14','Added. Delhi students see the Delhi entry instead.']],
 topsc:[['2026-11-14','Added from a news report of the November 2025 revision.']],
 swanath:[['2026-11-14','Added with the 2026-27 notification (last date 31 October 2026).']],
 sarswati:[['2026-11-14','Added. Last date 28 February 2027, from news reports.']],
 pmsss:[['2026-11-14','Added. Amounts read in the Ministry of Education guidelines.']],
 inspire:[['2026-11-14','Added.']],
 pmss:[['2026-11-14','Added. Amounts read in the Kendriya Sainik Board brochure.']],
 pmsdis:[['2026-11-14','Added.']],nmmss:[['2026-11-14','Added for Class 11 and 12 students who already hold it.']],aictepg:[['2026-11-14','Added for postgraduate students.']],
 moma:[['2026-11-14','Added to say plainly that it is closed to new students.']],
 pragati:[['2026-11-14','Now also shown to diploma students.'],['2026-11-14','Added with the 2026-27 notification (last date 31 October 2026).']],
 saksham:[['2026-11-14','Now also shown to diploma students.'],['2026-11-14','Added with the 2026-27 notification (last date 31 October 2026).']]
};
/* Site-wide change log, newest first. Each item: [what changed, link hash or ''] */
var CHANGELOG=[
 ['2026-11-14','Version 3',[
   ['A new design in the NSATS colours: a menu across the top, a home page that shows every part of the tool, and cards you can scan.',''],
   ['Start with five quick questions. Your matches show straight away, and the rest of the questions are optional, to confirm the schemes marked "Check".','#start'],
   ['Results now sit beside your answers, with tabs for scholarships, loans, internships, coaching, skills and company scholarships.','#schemes']]],
 ['2026-11-14','Version 2, release 12',[
   ['How-to-apply guides for Odisha and Tamil Nadu checked against the official portals: Odisha now confirmed, with current deadlines; Tamil Nadu helplines added.','apply.html'],
   ['Internships across India: 11 government internships and apprenticeship schemes, including the AICTE internship portal, NITI Aayog, MeitY, the Ministry of External Affairs, RBI, SEBI, ISRO and DRDO labs.','#work'],
   ['A new page on free government skill training: PMKVY, DDU-GKY, rural self-employment institutes, Jan Shikshan Sansthan, PM Vishwakarma and ITIs.','#skills'],
   ['A new page on free coaching (the central scheme for SC and OBC students, and schemes in UP, Rajasthan and Delhi) and the lower exam fees for JEE Main, NEET, CUET, GATE and CLAT.','#coaching']]],
 ['2026-11-14','Version 2, release 11',[['College finder: 16,671 stand-alone institutions added (polytechnics, nursing, teacher-training, paramedical, PGDM, pharmacy and hotel-management institutes), from the Ministry of Education\'s list. The finder now covers 85,300 institutions. For each stand-alone institute it shows the national body whose approval its courses need.',''],['All 20 AIIMS were checked against the Ministry\'s list of them; all were already in the finder.','']]],
 ['2026-11-14','Version 2, release 10',[['The "See an example student" button was removed from the home page.','']]],
 ['2026-11-14','Version 2, release 9',[
   ['How-to-apply guides for the 16 priority states: which portal, what to keep ready, the steps, what happens after you submit, and the helpline. Each guide says whether its steps were read on the official portal or come from listings.','apply.html'],
   ['A guide to the National Scholarship Portal\'s one-time registration (OTR), which many states now ask for first.','apply.html#otr']]],
 ['2026-11-14','Version 2, release 8',[
   ['New look: the Campus Green theme, with the Anek typeface served from this site.',''],
   ['A new first question asks what you are studying: Class 11 or 12, ITI, diploma, a degree or a postgraduate degree. Schemes are matched to your level.','#start'],
   ['Added: post-matric scholarship for students with disabilities, the National Means-cum-Merit Scholarship (Class 11 and 12 renewals) and the AICTE postgraduate scholarship (GATE, GPAT, CEED). AICTE Pragati and Saksham now show for diploma students too.','#data'],
   ['The minority scholarships of the Ministry of Minority Affairs are listed as closed to new students, as the ministry told Parliament.','browse.html#central']]],
 ['2026-11-14','Version 2, release 7',[
   ['11 central schemes added: post-matric scholarships for SC, ST and OBC students, Top Class (SC), AICTE Pragati, Saksham, Swanath and Sarswati, the J&K and Ladakh special scholarship, INSPIRE and the PM\'s scholarship for wards of ex-servicemen.','#data'],
   ['Each scheme now shows whether applications are open, opening soon or closed, with the days left. A new "Open now" filter shows only open schemes.','#schemes'],
   ['Each scheme shows the date it was last checked and what changed in its entry.',''],
   ['A page on paid internships and apprenticeships (PM Internship Scheme, NATS, NAPS).','#work'],
   ['A page on spotting fake scholarships, with questions to ask your own college about its scholarships.','#fake'],
   ['A page for every scheme and every state, and a browse page by category, state and course.',''],
   ['This change log, also as an RSS feed.','']]],
 ['2026-11-14','Version 2, release 6',[
   ['College finder: 68,691 universities, colleges and ITIs from official lists, with ITI grades.',''],
   ['Cheapest education loans from public-sector banks and five state loan schemes.','#loan'],
   ['38 company, public-sector and trust scholarships.','#private'],
   ['Every source we use is listed on the Our data page.','#data']]],
 ['2026-11-13','State schemes checked on official portals',[
   ['Each state scheme was checked against official government pages and marked confirmed, partly confirmed, not confirmed or not found.','#data']]]
];

/* ---- r7: paid internships and apprenticeships, fake-scheme warnings (pure data) ---- */
var WORK=[
 {id:'pmis',g:'portal',name:'PM Internship Scheme',by:'Ministry of Corporate Affairs',who:'Aged 21 to 24, not in a full-time job or full-time course (distance and online learners can apply). Class 10 pass or above, including ITI, diploma and degree holders. Not if anyone in your family earns over ₹8 lakh a year or holds a government job. Graduates of some top institutes and holders of professional qualifications such as CA, MBBS or MBA are left out: check the FAQ.',
  pay:'₹5,000 a month for 12 months (₹4,500 from the government, ₹500 from the company), plus ₹6,000 once on joining. Insurance cover is included.',
  when:'Opens in rounds. Check the portal for the current round.',link:'https://pminternship.mca.gov.in/',chk:'news',
  note:'Amounts and rules from news reports and listings, which agree with each other. The portal could not be read. Some 2026 reports mention higher amounts and a wider age range; go by the portal.'},
 {id:'nats',g:'portal',name:'National Apprenticeship Training Scheme (NATS)',by:'Ministry of Education, through the Boards of Apprenticeship Training',who:'Graduates and diploma holders in any stream, usually within three years of finishing, and final-year students in apprenticeship-embedded courses. Training lasts 6 to 12 months in a company or public-sector body.',
  pay:'At least ₹12,300 a month for graduates and ₹10,900 for diploma holders from 2026-27. The government pays half of the minimum straight to you; the employer pays the rest, and many pay more.',
  when:'All year. Register once, then apply to openings listed on the portal.',link:'https://nats.education.gov.in/',chk:'part',
  src:'https://hindivishwa.org/pdf/gen2026/NATS_Outreach_03062026.pdf',
  note:'Rates from a Board of Apprenticeship Training presentation (June 2026) published by a central university.'},
 {id:'naps',g:'portal',name:'Apprenticeships for ITI, Class 10 and Class 12 students (NAPS)',by:'Ministry of Skill Development and Entrepreneurship',who:'ITI pass-outs and Class 10 or 12 students looking for trade apprenticeships in companies.',
  pay:'A monthly stipend at least the legal minimum for your qualification, part of it paid by the government.',
  when:'All year. Openings are listed on the portal.',link:'https://www.apprenticeshipindia.gov.in/',chk:'news',
  note:'We have not yet read the current stipend rates on an official page.'}
];
var FAKE_SIGNS=[
 'It asks for any fee, a "processing charge", a "verification charge" or a courier charge. Government scholarships never charge you to apply or to be paid.',
 'It asks for your OTP, password, ATM PIN or a UPI payment. No official ever needs these.',
 'You apply through a Google Form, a WhatsApp or Telegram link, a QR code or a shortened link.',
 'The website does not end in gov.in or nic.in, or the name is slightly misspelt. Central scholarships are applied for on scholarships.gov.in or on a ministry or AICTE portal.',
 'The helpline is a Gmail address or a private mobile number.',
 'You cannot find the scheme on the National Scholarship Portal, on myScheme (myscheme.gov.in) or on your state portal.',
 'It promises money to everyone, or a free laptop or phone, with no income limit or merit rule.'
];
var FAKE_SEEN=[
 ['National Sports Scholarship 2026-27','Called fake by PIB Fact Check in September 2026. Neither the sports ministry nor the Sports Authority of India announced it.','https://www.careerindia.com/features/national-sports-scholarship-2026-27-fake-alert-pib-fact-check-warning-011-65763.html'],
 ['National Student Laptop Scheme 2026 (free laptops for students)','Called fake by PIB Fact Check in 2026. No such central scheme exists.','https://www.careerindia.com/features/national-student-laptop-scheme-2026-scam-pib-fact-check-warning-011-65943.html']
];
var COLLEGE_ASK=[
 'Does the college waive or reduce fees for students below an income limit? What is the limit, and when do I apply?',
 'Are there merit scholarships for students in the top ranks of each year?',
 'Are there endowment or alumni scholarships, and how are students chosen?',
 'Who is the scholarship nodal officer for the National Scholarship Portal? (They verify your application; a missed verification means no money.)',
 'Can I hold a college scholarship together with a government one?',
 'For hostel students: is there a mess or hostel fee concession?'
];

/* ---- r9: how-to-apply guides for the 16 priority states (pure data) ----
   by: official = steps read on the state's own page or a government notice; part = some of it read there, the rest from listings;
   news = from news reports and scholarship listings that agree with each other. Every guide says which. Checked 14 November 2026. */
var OTR_GUIDE={
  steps:['Use an Android phone. Face authentication does not work on an iPhone.',
    'Install two apps from the Google Play Store: "NSP OTR" and "AadhaarFaceRD".',
    'On scholarships.gov.in, choose One Time Registration and enter your Aadhaar number and the OTP sent to the mobile linked to your Aadhaar. You get a reference number.',
    'Open the NSP OTR app, choose "eKYC with FaceAuth", enter the reference number and OTP, and look at the camera in good light.',
    'You receive a 14-digit OTR number by SMS. Write it down: you need it for every scholarship, every year.'],
  tips:['If face authentication keeps failing, check in the mAadhaar app that your biometrics are not locked. A locked biometric makes it fail.',
    'The OTR is not an application. You still have to apply for each scheme.'],
  src:[['NSP OTR questions and answers (National Scholarship Portal)','https://scholarships.gov.in/public/FAQ/OTR%20FAQ%20v1.3.pdf',1]]
};
var GUIDES={
 UP:{portal:'https://scholarship.up.gov.in/',pn:'UP Scholarship portal',by:'part',
  who:'Post-matric (Dashmottar) and Class 11–12 (Intermediate) scholarships for SC, ST, OBC, general and minority students.',
  dates:'2026-27: Class 9–12 fresh applications closed 21 September 2026. Above Class 12 (Dashmottar), fresh applications ran 15 September to 31 October 2026 and renewals closed 15 October 2026 (news reports).',
  need:['Aadhaar card and the mobile number linked to it','Income and caste certificates (online-issued numbers)','Last marksheet and the fee receipt','A bank account in your name, linked to Aadhaar'],
  steps:['Complete the portal\'s own one-time registration (OTR) with Aadhaar and mobile OTP.','Choose Student, then Registration, and pick your group: SC/ST/General, OBC or Minority, fresh or renewal.','Log in, fill in your personal, course, income, caste and bank details, and upload the papers asked for.','Check everything and submit. Print the final form.','Sign it and hand it, with copies of your papers, to your college within the date given. The college verifies it and forwards it.'],
  after:'Your form moves from the college to the district office and then to the state for payment by DBT. Track it under Status, then Application Status, with your registration number and date of birth. Look for "Forwarded by institute", not "Pending at institute".',
  help:'',
  src:[['University of Lucknow notice on the OTR and application steps (2026)','https://www.lkouniv.ac.in/site/writereaddata/UploadNews/pdf/C_202608181129033010.pdf',1],['UP Scholarship 2026-27 dates (Physics Wallah news)','https://www.pw.live/news/up-scholarship-2026-27-last-date-eligibility-amount-status',0]],
  note:'The state portal blocks automated reading. The steps come from a university notice and news reports.'},
 RJ:{portal:'https://sjmsnew.rajasthan.gov.in/scholarship/',pn:'SJE scholarship portal, through Rajasthan SSO',by:'news',
  who:'Post-matric scholarships for SC, ST, OBC, SBC and EBC students, and the Chief Minister\'s Higher Education Scholarship.',
  dates:'2026-27: applications close 31 October 2026 under the department\'s order of 31 July 2026 (as reported by a scholarship listing).',
  otr:'Reported as required: complete the NSP OTR first (see below).',
  need:['Jan Aadhaar (Rajasthan family ID) and your Aadhaar number','SSO ID','Caste and income certificates, marksheets and fee receipt','Aadhaar-linked bank account'],
  steps:['Complete your NSP OTR (see the box below).','Create an SSO ID at sso.rajasthan.gov.in, or log in if you have one.','On the SSO dashboard open "Scholarship (SJE)".','Create your profile with your Jan Aadhaar number, then choose New Application.','Fill in the form, upload papers and submit. Note the application ID.'],
  after:'Your college verifies the application, then the department. Biometric attendance must be recorded on the portal. Track the status on the SJE portal with your application ID or SSO ID.',
  help:'',
  tips:['If your marks or name differ from your Jan Aadhaar record, correct the Jan Aadhaar record first.'],
  src:[['Rajasthan SJED scholarship summary citing the 31 July 2026 order (CollegeChalo listing)','https://www.collegechalo.com/scholarship/rajasthan-scholarship',0]],
  note:'The state portals refuse automated reading. Check the order on the portal before you rely on these dates.'},
 DL:{portal:'https://edistrict.delhigovt.nic.in/',pn:'e-District Delhi',by:'news',
  who:'Merit and post-matric scholarships for SC, ST, OBC and minority students run by the Department for the Welfare of SC/ST/OBC.',
  dates:'No 2026-27 dates found on an official page.',
  need:['Aadhaar card','Delhi caste certificate (or Delhi domicile certificate if the caste certificate was issued elsewhere)','Income certificate (OBC and minority students)','Previous year\'s marksheet, bonafide certificate and fee structure'],
  steps:['On e-District Delhi choose Login/Register, then Register, with Aadhaar as the document type.','Log in and pick the scholarship service for college students.','Fill in the form, upload your papers and submit.','Ask your college scholarship desk to verify it.'],
  after:'Track the application on e-District with its application number. If you had a gap of up to three years in your studies, an affidavit has to be uploaded.',
  help:'',
  src:[['Delhi department\'s 2025-26 scheme guidelines','https://scstwelfare.delhi.gov.in/sites/default/files/scstwelfare/circulars-orders/scholarship_schemes_2025-26_guidelines.pdf',1],['Delhi merit scholarship listing (IndiaScholarships)','https://www.indiascholarships.in/scholarships/merit-scholarship-for-scstobc-students-higher-ed',0]],
  note:'The scheme rules are from the official guidelines; the step-by-step is from listings, because e-District did not load for us.'},
 HR:{portal:'https://harchhatravratti.highereduhry.ac.in/',pn:'Har-Chhatravratti portal',by:'official',
  who:'Haryana Higher Education Department scholarships, including the post-matric scholarships for SC and BC students and the state merit scholarships.',
  dates:'2026-27: the portal listed open schemes until 31 December 2026 when we checked.',
  otr:'Listings say post-matric SC and BC students also need an NSP OTR. The portal page does not say so.',
  need:['Aadhaar card','Parivar Pehchan Patra (family ID)','Photograph and signature','Income, Haryana domicile and caste certificates','Class 10 and 12 certificates','Fee receipt','Last exam passed certificate (not for first-year students)','BPL certificate or father\'s death certificate, if they apply'],
  steps:['Click Registration if you are new; otherwise log in.','Enter your Parivar Pehchan Patra (family ID), choose your name from the family list and ask for an OTP.','Enter the OTP sent to the registered mobile.','Check the details that fill in automatically.','Choose your department and college, set a password and submit the registration.','Log in with your user ID and password.','Enter your course, roll number and eligibility details.','Click Apply to save the application.'],
  after:'The college, then the department, verify it. Track it on the portal\'s Track Application page; complaints go through the portal\'s grievance system.',
  help:'',
  src:[['Har-Chhatravratti: How To Apply','https://harchhatravratti.highereduhry.ac.in/HowToApply',1]],
  note:'The eight steps and the list of papers are copied from the portal\'s own page.'},
 TN:{portal:'https://umis.tn.gov.in/',pn:'UMIS (through your college)',by:'part',
  who:'Scholarships for BC, MBC, DNC and minority college students; SC and ST post-matric scholarships.',
  dates:'2026-27: the BC, MBC and minority scholarship window on UMIS was announced open until 21 October 2026 (news report).',
  need:['Aadhaar card','Community and income certificates','Marksheets and fee details','Aadhaar-linked bank account'],
  steps:['Apply on the UMIS portal (umis.tn.gov.in). Many colleges register students in a drive, so ask your scholarship desk first.','Give the college your certificates and bank details, and check the details entered for you.','For SC and ST post-matric scholarships, ask whether your college also needs you on the National Scholarship Portal.'],
  after:'Payment depends on the college confirming your attendance. Ask the college for your application status.',
  help:'UMIS toll-free 14417 (choose option 9); technical problems by call or WhatsApp on 9344237663 or 9344252673; or raise a ticket under Grievance Redressal on the portal.',
  src:[['BC, MBC and minority scholarship portal open till 21 October (DT Next)','https://www.dtnext.in/news/tamilnadu/tamil-nadu-bc-mbc-minority-scholarship-portal-open-till-oct-21',0],['BC, MBC and minorities welfare department schemes','https://bcmbcmw.tn.gov.in/welfschemes.htm',1],['UMIS portal home page (read 14 November 2026)','https://umis.tn.gov.in/',1]],
  note:'Colleges play a large part in Tamil Nadu. The UMIS home page confirms the helplines and that SC and ST post-matric scholarships are applied for there; the login steps are behind sign-in, so check them with your college.'},
 KA:{portal:'https://ssp.postmatric.karnataka.gov.in/',pn:'State Scholarship Portal (post-matric)',by:'news',
  who:'Post-matric scholarships of the Social Welfare, Tribal Welfare, Backward Classes and Minorities departments.',
  dates:'2026-27: the Social Welfare post-matric last date was reported as 31 January 2027; other departments differ.',
  need:['Aadhaar of the student and parents','SATS ID (school and PUC students) or college registration number','Caste and income certificate RD numbers','Aadhaar-linked bank account','Kutumba family ID (reported as required from 2026-27)'],
  steps:['On the post-matric portal, create a new account with Aadhaar and mobile OTP.','Log in and enter your SATS ID or college registration number.','Enter your caste and income certificate RD numbers; the portal checks them online.','Fill in course and bank details and submit. Print the acknowledgement for your college.'],
  after:'Your college verifies the application, then the department. Check your dashboard for "Invalid document" and fix it before the deadline.',
  help:'',
  src:[['Karnataka SSP 2026-27 (Careers360)','https://school.careers360.com/articles/ssp-post-matric-scholarship-2026-27',0]],
  note:'The Karnataka portals refuse automated reading. Confirm the steps on the portal\'s own help page.'},
 AP:{portal:'https://jnanabhumi.ap.gov.in/',pn:'Jnanabhumi',by:'part',
  who:'Post-matric fee reimbursement (RTF) and maintenance (MTF) for SC, ST, BC, EBC, Kapu, minority and disabled students.',
  dates:'2026-27: application dates not announced on an official page when we checked. A news report said NSP OTR registration closed 31 October 2026 and applications were expected in November.',
  otr:'Reported as required (news report).',
  need:['Aadhaar of the student and mother','Income and caste certificates','Bank account of the mother (MTF is paid to her)','Bonafide and fee details'],
  steps:['Ask your college: in Andhra Pradesh the college principal enters most students on Jnanabhumi at admission.','Check your details on the application form the college prepares.','Give your biometric (Aadhaar) authentication at the college or village/ward secretariat when asked.'],
  after:'Fees go straight to the college; the food and hostel allowance goes to the mother\'s account. You need 75% attendance for payment to be released.',
  rules:'Not for students at private or deemed universities, distance learners, or management and spot-quota admissions. No family member may be a government employee, pensioner or income-tax payer (sanitary workers excepted), or own a car (taxis, tractors and autos excepted).',
  help:'',
  src:[['Jnanabhumi portal (eligibility rules)','https://jnanabhumi.ap.gov.in/',1],['AP Post Matric Scholarship 2026-27 (Careers360)','https://school.careers360.com/articles/ap-post-matric-scholarship-2026-27',0]],
  note:'The eligibility rules are read on the portal. Its 2026-27 steps and dates were not published there.'},
 TG:{portal:'https://telanganaepass.cgg.gov.in/',pn:'Telangana ePASS',by:'part',
  who:'Post-matric fee reimbursement and maintenance for SC, ST, BC, EBC, minority and disabled students.',
  dates:'2026-27: no single last date published on the portal when we checked.',
  need:['SSC hall ticket number','Aadhaar card, with the name exactly matching your SSC certificate','MeeSeva caste and income certificates (income certificate issued after 1 April 2026, as reported)','Bonafide or 7-year study certificate','Bank account (nationalised bank or India Post Payments Bank)'],
  steps:['On the portal open Postmatric Scholarship Services, then Fresh Registration (or Renewal from second year).','Enter your SSC hall ticket number, passing year, date of birth and Aadhaar.','Enter your MeeSeva caste and income certificate numbers and your college and bank details, and submit.','Take your application ID to the nearest MeeSeva centre for Aadhaar biometric authentication.'],
  after:'You need 75% attendance each quarter. Track the application with "Know Your Status". BC and EBC students register complaints online.',
  help:'Post-matric technical help: 040-23120311, 10:30 am to 5 pm on working days.',
  src:[['Telangana ePASS home page','https://telanganaepass.cgg.gov.in/',1],['TS ePASS steps (IndiaScholarships guide)','https://www.indiascholarships.in/guides/telangana-epass-postmatric-guide',0]],
  note:'The biometric step, bank rule and helpline are read on the portal. The screen-by-screen steps are from listings.'},
 WB:{portal:'https://oasis.gov.in/',pn:'OASIS',by:'part',
  who:'Post-matric scholarships for SC, ST and OBC students.',
  dates:'2026-27: open when we checked; the portal gives no single last date.',
  otr:'Required for ST students (stated on the portal). News reports say it is now required for all.',
  need:['Caste certificate number and issue date (OBC certificates issued before 1 August 2025 must be revalidated first)','Income certificate','Aadhaar-seeded bank account, enabled for DBT','Last marksheet and fee receipt'],
  steps:['Complete your NSP OTR if you are an ST student (and check whether it is now asked for everyone).','On OASIS choose Register, pick the district where your institution is (outside West Bengal: your home district) and enter your caste certificate number and date.','Fill in the primary details, set a password, then complete the full form and upload papers.','Click Verify and Lock, confirm with the OTP, and download the three-page form. It cannot be changed after locking.','Hand the printed form, with your income certificate, caste certificate and bank passbook copy, to your institution.'],
  after:'SC students are paid 40% first and 60% later. If your Aadhaar does not show in NPCI, contact your bank branch within 7 days. Renew in later years under Students Corner.',
  help:'Helpline and grievances: +91 84200 23311.',
  src:[['OASIS portal home page','https://oasis.wb.gov.in/',1],['OASIS steps (CollegeChalo listing)','https://www.collegechalo.com/scholarship/oasis-scholarship',0]],
  note:'The OTR, caste-certificate, bank and payment rules are read on the portal. The screen-by-screen steps are from listings.'},
 BR:{portal:'https://pmsonline.bihar.gov.in/',pn:'Bihar PMS Online (BC/EBC) and the SC/ST portal',by:'news',
  who:'Post-matric scholarships for BC and EBC students (pmsonline.bihar.gov.in) and for SC and ST students (scstpmsonline.bihar.gov.in).',
  dates:'2026-27: the portal opened on 15 July 2026. Reports give the last date as 15 September (news) or 30 September 2026 (listings).',
  otr:'Reported as required.',
  need:['Bihar residence certificate','Caste certificate and an income certificate issued for 2026-27','Bonafide certificate with fee break-up and the current fee receipt','Previous marksheet','Aadhaar-seeded bank account'],
  steps:['Complete your NSP OTR.','Go to the portal for your category and choose New Student Registration; verify with OTP.','Log in, fill in the form and upload papers. Pick your college code carefully: only registered institutes and courses can be chosen.','Submit, print the acknowledgement and give copies of your papers to the college scholarship counter.'],
  after:'The institute, then the district nodal officer, verify it. Watch for a "defective" status and fix it quickly.',
  help:'',
  src:[['Bihar PMS 2026-27 closing (CareerIndia)','https://www.careerindia.com/news/bihar-post-matric-scholarship-2026-27-last-date-application-guide-011-65537.html',0],['Bihar PMS guide (IndiaScholarships)','https://www.indiascholarships.in/guides/bihar-post-matric-pms-scholarship-guide',0]],
  note:'The Bihar portals refuse automated reading. Dates differ between sources, so check the portal.'},
 OD:{portal:'https://scholarship.odisha.gov.in/',pn:'Odisha State Scholarship Portal',by:'official',
  who:'Post-matric scholarships for SC, ST, OBC and SEBC students, and state schemes such as e-Medhabruti, Gopabandhu, Kalinga Sikhya Sathi, Banishree, and the Junior Merit and Pathani Samanta scholarships for Class 11 and 12.',
  dates:'On the portal (checked 14 November 2026): Junior Merit and Pathani Samanta Mathematics Talent (Class 11–12, 2026-27) extended to 25 November 2026; Kalinga Sikhya Sathi (fresh) and Banishree 2026-27 open. Other dates are posted department by department under Announcements.',
  need:['Aadhaar with a working linked mobile number (registration is by Aadhaar OTP)','Caste and income certificates','Last marksheet, admission letter and bonafide certificate','Bank account details'],
  steps:['On the portal, use Check Eligibility to see which schemes you may get.','Register once with your Aadhaar number and the OTP sent to your Aadhaar-linked mobile. Your user ID and password come by SMS and email.','Log in, choose the department and scheme, and fill in your student, academic, eligibility and bank details. You can save and come back as often as you like.','Submit, then download and print the form. After you submit you cannot edit it.'],
  after:'Your institute verifies it, then the district welfare officer. If you spot a mistake after submitting, ask your institute\'s scholarship person to "revert" it so you can correct it. If your institute or course is not in the list, the institute must ask the district welfare officer to add it. Track it under Know Your Status.',
  help:'Sanjog helpline 155335 or toll-free 1800-345-6770, 9 am to 5 pm on government working days.',
  src:[['Odisha State Scholarship Portal home page, How to Apply and FAQs (read 14 November 2026)','https://scholarship.odisha.gov.in/home',1]],
  note:'Your name, gender and date of birth are taken from Aadhaar and cannot be changed in the form, so correct them in Aadhaar first.'},
 AS:{portal:'https://scholarships.gov.in/',pn:'National Scholarship Portal (Assam state schemes)',by:'part',
  who:'Post-matric scholarships for SC, ST and OBC students of Assam, applied for on the National Scholarship Portal.',
  dates:'2026-27: SC and OBC students by 30 September 2026, ST students by 6 October 2026 (Bodoland University notice).',
  otr:'Required: Assam\'s post-matric schemes are applied for on the National Scholarship Portal itself.',
  need:['OTR number','Caste and income certificates','Original bonafide certificate','Marksheets and fee receipt','Aadhaar-seeded bank account'],
  steps:['Complete your NSP OTR (see below).','Log in to scholarships.gov.in with the OTR, choose the Assam state scheme for your category and fill in the application.','Upload papers and submit. Print the acknowledgement.','Hand the printed application and the same papers to your college (for example the DSW office) by the college\'s date.'],
  after:'Your college verifies it on the portal (institute-level verification), then the state department.',
  help:'NSP helpdesk: helpdesk@nsp.gov.in.',
  src:[['Morigaon College: papers for the 2026-27 post-matric application (lists the OTR)','https://morigaoncollege.ac.in/admin/uploads/19-08-26-04-53-45-mgcoll.pdf',1],['Bodoland University notice, as copied by CollegeAdmission.in','https://www.collegeadmission.in/notice/university/bodoland-university-post-matric-scholarship-2026-27-18953',0],['NSP OTR questions and answers','https://scholarships.gov.in/public/FAQ/OTR%20FAQ%20v1.3.pdf',1]],
  note:'Dates and the hard-copy rule are from a state university\'s notice, read in a copy on another site.'},
 MH:{portal:'https://mahadbt.maharashtra.gov.in/',pn:'MahaDBT',by:'part',
  who:'Post-matric scholarships and fee schemes of several departments (social justice, OBC, tribal, minority and others).',
  dates:'No 2026-27 dates found on an official page. Our scheme pages note that 2026-27 applications are taken only on MahaDBT 2.0; check which address your scheme uses.',
  need:['Aadhaar with a linked mobile (or biometric registration)','Domicile, income and caste certificates (enter the barcode if issued by Aaple Sarkar)','Marksheets, CAP allotment letter (professional courses), caste validity certificate','Aadhaar-seeded bank account'],
  steps:['Register: with Aadhaar (OTP to the linked mobile), by biometric, or without Aadhaar using email and mobile OTPs. Create a username and password.','Log in as Applicant and complete your profile: personal, address, parent, qualification, hostel and current course details.','Open All Schemes and apply for each scheme you qualify for.','Upload papers: PDFs under 256 KB, JPEG images 5 to 20 KB.','See your application ID and status under My Applied Scheme.'],
  after:'Your college, then the department, approve it. If your bank account is not Aadhaar-seeded the money may not arrive; an India Post Payments Bank account is an option.',
  help:'Helpline: 022-49150800.',
  src:[['MahaDBT portal home page','https://mahadbt.maharashtra.gov.in/',1]],
  note:'Steps, file sizes and helpline are read on the MahaDBT page, which still shows older dates. Check MahaDBT 2.0 for 2026-27.'},
 GJ:{portal:'https://www.digitalgujarat.gov.in/',pn:'Digital Gujarat',by:'news',
  who:'Post-matric scholarships for SC, ST, OBC/SEBC and minority students, and the EBC fee exemption.',
  dates:'2026-27: OBC/SEBC 6 July to 30 September 2026; SC reopened 1 to 30 October 2026; ST 1 September to 30 November 2026 (news reports).',
  otr:'Reported as required for fresh post-matric applications; you enter the OTR number on the Gujarat form.',
  need:['OTR number','Caste and income certificates (Mamlatdar income certificate)','Marksheets, fee receipt and bonafide certificate','Aadhaar-linked bank account'],
  steps:['Complete your NSP OTR.','On Digital Gujarat choose Login/Register, then Citizen Login. New users click New Registration (Citizen); students from earlier years use their old login.','Open Services, then Scholarship Services, and click Request a New Service. Pick year 2026-27 and your scheme.','Fill in the form, upload papers and submit.','Print the form, attach self-attested copies of your papers and hand it to your college before the last date.'],
  after:'Renewal students are carried forward and do not fill a fresh form. You can hold only one government scholarship at a time.',
  help:'Helpline (as listed): 1800 233 5500.',
  src:[['Digital Gujarat scholarship dates 2026-27 (Careers360)','https://school.careers360.com/articles/digital-gujarat-scholarship-application-form-2026-27',0],['Post SSC scholarship for SEBC students, steps (SarkariYojana)','https://sarkariyojana.com/scheme/post-ssc-scholarship-for-boys-girls-from-socially-and-educationally-backward-classes/',0]],
  note:'The Gujarat portals refuse automated reading. Steps and dates are from listings that cite the department\'s circulars.'},
 MP:{portal:'https://hescholarship.mp.gov.in/',pn:'MP Scholarship Portal 2.0',by:'news',
  who:'Post-matric scholarships for SC and OBC students (Portal 2.0); ST students apply on MPTAAS (tribal.mp.gov.in/MPTAAS).',
  dates:'2026-27: NSP-route applications closed 31 October 2026 (listing). MPTAAS for ST students: 30 November 2026 (listing).',
  otr:'Reported as required.',
  need:['Samagra ID (student and family)','Aadhaar','Caste and income certificates','Institute code (from the portal\'s institute list), marksheet and fee receipt','Bank account with IFSC'],
  steps:['Complete your NSP OTR.','On Portal 2.0 register with your name, parents\' names, date of birth, category, gender, Samagra ID and mobile.','Log in, choose Post Matric Scholarship, then fresh or renewal, and your course year.','Enter your institute code, course and bank details, upload papers and submit. Note the application ID.'],
  after:'Your institute verifies it, then the department. The old address scholarshipportal.mp.nic.in no longer works.',
  help:'',
  src:[['MP post-matric scholarship for SC students (SarkariYojana)','https://sarkariyojana.com/?p=96734',0],['MP Scholarship Portal 2.0 (CollegeChalo listing)','https://www.collegechalo.com/scholarship/mp-scholarship',0]],
  note:'The MP portals refuse automated reading. Confirm on the portal.'},
 CG:{portal:'https://postmatric-scholarship.cg.nic.in/',pn:'CG post-matric scholarship portal',by:'news',
  who:'Post-matric scholarships for SC, ST and OBC students of Chhattisgarh.',
  dates:'2026-27: 1 August (renewals from 20 June) to 30 December 2026 (listings).',
  otr:'Reported as required for fresh and renewal applicants.',
  need:['OTR number','Chhattisgarh domicile, caste and income certificates','Last marksheet and fee receipt','Aadhaar-seeded bank account, mapped in NPCI'],
  steps:['Complete your NSP OTR.','On the CG portal register (or log in) and create your profile.','Choose your scheme, fill in the form and upload papers.','Submit and complete Aadhaar e-KYC or biometric verification when asked.'],
  after:'Your institute verifies it. Track it by logging in. You cannot hold another scholarship or stipend for the same course.',
  help:'',
  src:[['CG post-matric scholarship 2026-27 (Internshala listing)','https://internshala.com/competitions/?p=11520',0],['CG post-matric SC scholarship (IndiaScholarships)','https://www.indiascholarships.in/scholarships/chhattisgarh-post-matric-scholarship-sc',0]],
  note:'The CG portal refuses automated reading. Confirm on the portal.'}
};
var GUIDE_BY={official:['good','Steps read on the official portal'],part:['warn','Partly read on the official portal; the rest from listings'],news:['warn','From news reports and listings. The portal could not be read']};
/* ---- r12: internships, skill training, free coaching, exam fees (pure data). Checked 14 November 2026. ---- */
var WORK_MORE=[
 {id:'aicte',g:'portal',name:'AICTE National Internship Portal',by:'All India Council for Technical Education',who:'Students of any year, mainly in engineering, management, diploma and other technical courses. Free to register.',
  pay:'Some listings are paid and some are not; it depends on the company. Registration and applying are free.',
  when:'All year.',link:'https://internship.aicte-india.org/',chk:'news',
  note:'Only internship.aicte-india.org is the official portal. Any site that charges a fee in AICTE\'s name is fake. Internships also count for credits in AICTE-approved courses.'},
 {id:'niti',g:'gov',name:'NITI Aayog Internship Scheme',by:'NITI Aayog, New Delhi',who:'Undergraduate and postgraduate students and research scholars at a recognised university, with good marks (listings mention 70% for postgraduates). Recent graduates may apply within six months of their result.',
  pay:'Unpaid. A certificate is given if you complete the period.',
  when:'Apply from the 1st to the 10th of each month, for internships starting later. Six weeks to six months, on site in New Delhi.',link:'https://workforindia.niti.gov.in/intern/InternshipEntry/PCInternshipEntry.aspx',chk:'news',
  note:'From listings that agree with each other. The NITI Aayog portal could not be read.'},
 {id:'diis',g:'gov',name:'Digital India Internship Scheme',by:'Ministry of Electronics and IT (with NIC)',who:'Indian students in technical, law and economics degrees at recognised universities. Each round lists its domains and marks.',
  pay:'₹10,000 a month, paid after completion if your mentor certifies satisfactory work.',
  when:'Rounds in spring (internship June–July) and winter (December–January). The winter 2026 round for NIC closed on 13 November 2026.',link:'https://intern.meity.gov.in/',chk:'part',
  src:'https://www.myscheme.gov.in/schemes/mdiis',
  note:'The government scheme page confirms the ₹10,000 stipend. Round dates are from news reports.'},
 {id:'mea',g:'gov',name:'Ministry of External Affairs Internship',by:'Ministry of External Affairs, New Delhi',who:'Indian graduates and final-year students, up to 25 years old (as reported).',
  pay:'₹10,000 a month, plus help with one return air fare for students from far away. You arrange your own stay in Delhi.',
  when:'Two terms a year; up to 30 interns each. The October 2026 intake closed on 27 September 2026.',link:'https://internship.mea.gov.in/',chk:'news',
  note:'From news reports of the ministry\'s notices.'},
 {id:'rbi',g:'reg',name:'Reserve Bank of India Summer Placement',by:'Reserve Bank of India',who:'Students in the second-last year of a postgraduate course (management, economics, finance and similar), an integrated five-year course, or a law degree, at an institution in India.',
  pay:'₹20,000 a month in 2026, for up to three months from April, plus rail fare. A report says ₹25,000 a month for 2027.',
  when:'Applications for summer 2027 close on 15 December 2026 (as reported). Apply on the RBI website only.',link:'https://opportunities.rbi.org.in/',chk:'news',
  note:'From news reports and college notices.'},
 {id:'sebi',g:'reg',name:'SEBI internships',by:'Securities and Exchange Board of India',who:'Law students (legal internship) and, in separate notices, management and research students.',
  pay:'Up to ₹10,000 for the legal internship, paid at the end if satisfactory.',
  when:'Legal internship: apply from the 1st to the 7th of each month for the next month.',link:'https://www.sebi.gov.in/',chk:'news',
  note:'From listings. Other SEBI internships are announced as separate notices.'},
 {id:'isro',g:'res',name:'ISRO internships and student project training',by:'ISRO centres (VSSC, URSC, IIRS, NRSC, ISTRAC and others)',who:'Indian students in engineering and science degrees, usually with at least 60% marks (or CGPA 6.32). Each centre sets its own rules and windows.',
  pay:'Usually unpaid. You arrange your own travel and stay.',
  when:'Each centre opens its own portal or notice, often a few months ahead. There is no single ISRO internship portal.',link:'https://www.isro.gov.in/',chk:'news',
  note:'From listings of individual centres\' notices.'},
 {id:'drdo',g:'res',name:'DRDO lab internships',by:'DRDO laboratories across India',who:'Mostly final-year engineering and science students with good marks (often 75% or CGPA 7.5), from AICTE- or UGC-approved institutions.',
  pay:'Many labs pay ₹5,000 a month for six months (₹30,000 in total), in instalments. Some are unpaid.',
  when:'Each lab advertises separately, often in spring for internships from July. Several apply by post.',link:'https://www.drdo.gov.in/drdo/careers',chk:'part',
  src:'https://www.drdo.gov.in/drdo/sites/default/files/vacancy/advtDLRL16042026.pdf',
  note:'One lab\'s 2026 advertisement was read on the DRDO site; the amounts for other labs are from listings.'}
];
var WORK_GROUP={portal:'National portals and schemes',gov:'Ministries and government bodies',reg:'Banking and markets regulators',res:'Space and defence research'};
var SKILLS=[
 {id:'pmkvy',name:'Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)',by:'Ministry of Skill Development and Entrepreneurship',who:'Indian citizens aged 15 to 45 (the age range depends on the course), with Aadhaar. Each course has its own education requirement.',
  get:'Free short-term courses (a few weeks to a few months) in hundreds of trades, including new ones such as AI, drones and EV servicing, with a national certificate. Some centres offer placement help.',
  how:'Register on the Skill India Digital Hub with your Aadhaar-linked mobile number, pick a course and a centre near you.',link:'https://www.skillindiadigital.gov.in/',chk:'part',
  src:'https://www.nielit.gov.in/hi/node/19508',note:'Age range and the free training are from a NIELIT notice (a government body). Listings mention a completion bonus at some centres; we have not confirmed it.'},
 {id:'ddugky',name:'Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)',by:'Ministry of Rural Development',who:'Rural youth aged 15 to 35 from poor households (older for women, SC/ST and disabled candidates, as listed).',
  get:'Free training of 3 to 12 months, often residential with free food and stay, followed by a job placement. A new phase started batches from October 2026.',
  how:'Contact your State Rural Livelihoods Mission or a DDU-GKY training centre in your district.',link:'https://ddugky.gov.in/',chk:'part',
  src:'https://wb.gov.in/government-schemes-details-deen-dayal-upadhyaya-grameen-kaushalya-yojana.aspx',note:'Eligibility and benefits from the West Bengal government\'s scheme page; the October 2026 batches from news reports.'},
 {id:'rseti',name:'Rural Self-Employment Training Institutes (RSETIs)',by:'Ministry of Rural Development, run by banks',who:'Rural unemployed youth who want to start their own small business.',
  get:'Free residential training in a trade or business, with help afterwards to start up and get a bank loan.',
  how:'Find the RSETI in your district (usually run by the lead bank) and ask about the next batch.',link:'https://nacer.in/',chk:'news',
  note:'From news reports of the ministry\'s announcements.'},
 {id:'jss',name:'Jan Shikshan Sansthan (JSS)',by:'Ministry of Skill Development and Entrepreneurship',who:'People aged 15 to 45 who cannot read and write, have studied up to Class 8, or left school before Class 12. Women, SC, ST, OBC and minorities get priority.',
  get:'Free local vocational courses run by NGOs near your home, with nationally recognised courses.',
  how:'Find your district\'s Jan Shikshan Sansthan on the JSS portal and register for a course.',link:'https://jss.gov.in/',chk:'official',
  src:'https://pib.gov.in/PressReleasePage.aspx?PRID=2032606',note:'Who it is for is from a government press release.'},
 {id:'pmv',name:'PM Vishwakarma',by:'Ministry of MSME',who:'Artisans and craftspeople in 18 traditional family trades (carpenter, blacksmith, potter, tailor, cobbler and others). One member per family.',
  get:'Basic training of 5–7 days and advanced training of 15 days or more, paid at ₹500 a day; a toolkit grant of ₹15,000; and loans up to ₹3 lakh without collateral at 5% interest.',
  how:'Register at a Common Service Centre (CSC) with Aadhaar; verification follows at the village or town level.',link:'https://pmvishwakarma.gov.in/',chk:'official',
  src:'https://myscheme.gov.in/schemes/pmv',note:'Amounts read on the government scheme page.'},
 {id:'iti',name:'Industrial Training Institutes (ITIs)',by:'Directorate General of Training and the states',who:'Usually Class 8 or Class 10 pass, depending on the trade. Admission is through your state\'s ITI admission portal.',
  get:'One- and two-year trade courses with a national certificate (NCVT). Government ITIs charge low fees, and the ITI scholarships in your results can apply.',
  how:'Apply on your state\'s ITI admission portal. Use our college finder to check an ITI and its grade.',link:'index.html#start',chk:'official',
  note:'ITI details come from the national list of ITIs in our college finder.'}
];
var COACH=[
 {id:'fcs',st:'',name:'Free Coaching for SC and OBC students',by:'Ministry of Social Justice and Empowerment',who:'SC and OBC students with family income up to ₹8 lakh; children under the PM CARES scheme with no income or caste rule.',
  get:'Coaching fees paid to an empanelled institute, plus a monthly stipend while you study. Covers civil services, state PSC, SSC, railway and bank exams, and entrance exams such as JEE, NEET and CLAT.',
  how:'Applications are invited online each year; the scheme\'s FAQ is on the National Scholarship Portal.',link:'https://coaching.dosje.gov.in/',chk:'official',
  src:'https://scholarships.gov.in/public/schemeGuidelines/faq_3108.pdf',note:'Eligibility read in the scheme\'s FAQ on the National Scholarship Portal. Stipend amounts differ by course; check the current notice.'},
 {id:'abhyuday',st:'UP',name:'Mukhyamantri Abhyuday Yojana',by:'Uttar Pradesh Social Welfare Department',who:'Students of Uttar Pradesh preparing for UPSC, UPPSC, JEE, NEET, NDA and CDS.',
  get:'Free classroom and online coaching with study material and mock tests, in all 75 districts. The 2026-27 session started on 1 July 2026.',
  how:'Register on the Abhyuday portal and choose your exam and centre.',link:'https://abhyuday.up.gov.in/',chk:'news',
  note:'From news reports. Confirm the portal address on the UP social welfare department\'s website.'},
 {id:'anuprati',st:'RJ',name:'Mukhyamantri Anuprati Coaching Yojana',by:'Rajasthan Social Justice and Empowerment Department',who:'Rajasthan students from SC, ST, OBC, MBC, EWS and minority communities, family income up to ₹8 lakh. 30,000 seats a year.',
  get:'Free coaching at empanelled institutes for competitive and entrance exams, with help for hostel and food if you move to a coaching city.',
  how:'Apply through SSO Rajasthan (sso.rajasthan.gov.in), then the SJE scheme portal. The 2026-27 window closed on 25 October 2026; merit lists follow.',link:'https://sje.rajasthan.gov.in/',chk:'news',
  note:'Dates and seats from news reports and listings; the department\'s helpline is 1800-180-6127.'},
 {id:'jaibhim',st:'DL',name:'Jai Bhim Mukhyamantri Pratibha Vikas Yojana',by:'Delhi Department for the Welfare of SC/ST/OBC',who:'Delhi students from SC, ST, OBC and EWS families with income up to ₹8 lakh, who passed Class 10 and 12 in Delhi.',
  get:'Coaching fees paid (up to ₹1 lakh for civil services, up to ₹50,000 for engineering, medical, law and management entrance) and ₹2,500 a month while you study.',
  how:'Apply at an empanelled coaching institute in Delhi, or to the department directly.',link:'https://scstwelfare.delhi.gov.in/',chk:'news',
  note:'From listings; confirm whether the scheme is taking students this year.'}
];
/* Exam application fees (per paper or set, at centres in India). */
var EXAMFEES=[
 {id:'jee',name:'JEE Main 2027',body:'National Testing Agency',link:'https://jeemain.nta.nic.in/',chk:'news',
  rows:[['General, boys','₹1,000'],['General, girls; and EWS or OBC-NCL girls','₹800'],['EWS or OBC-NCL, boys','₹900'],['SC, ST, PwD, third gender','₹500']],
  note:'One paper (B.E./B.Tech, B.Arch or B.Planning). Both papers cost double. Fees as reported from the 2027 information bulletin (released 24 October 2026); check the bulletin.'},
 {id:'neet',name:'NEET UG (2026 fees)',body:'National Testing Agency',link:'https://neet.nta.nic.in/',chk:'news',
  rows:[['General','₹1,700'],['EWS or OBC-NCL','₹1,600'],['SC, ST, PwD, third gender','₹1,000']],
  note:'2026 fees, as reported from the information bulletin. The 2027 bulletin is usually released early in the year.'},
 {id:'cuet',name:'CUET UG (2026 fees)',body:'National Testing Agency',link:'https://cuet.nta.nic.in/',chk:'news',
  rows:[['General','₹1,000 for up to 3 subjects, ₹400 for each extra'],['EWS or OBC-NCL','₹900, ₹375 each extra'],['SC, ST, PwD, third gender','₹800, ₹350 each extra']],
  note:'2026 fees, as reported. Applications usually open in January.'},
 {id:'gate',name:'GATE 2027',body:'IIT Madras',link:'https://gate2027.iitm.ac.in/application_fees',chk:'official',
  rows:[['Women, SC, ST, PwD','₹1,000 a paper (₹1,500 in the extended period)'],['All others','₹2,000 a paper (₹2,500 extended)']],
  note:'Read on the GATE 2027 website. Registration for 2027 has closed; exams run in February 2027.'},
 {id:'clat',name:'CLAT 2027',body:'Consortium of National Law Universities',link:'https://consortiumofnlus.ac.in/',chk:'news',
  rows:[['SC, ST, BPL','₹3,500'],['General, OBC, PwD and others','₹4,000']],
  note:'Registration closed on 31 October 2026; the exam is on 6 December 2026 (as reported). Some reports place PwD in the lower fee group; check the notice.'}
];
/* ===== LOGIC END ===== */

var lang='en';
function L(en,hi){return lang==='hi'&&hi?hi:en}
var view=document.getElementById('view');
var P=null, draft={}, step=-1, isExample=false, isShared=false, badLink=false, counted={}, filter='all', docs={}, cost=null, loan=null;
var PUBLIC_URL='https://files.nsats.com/SCHOLAR_V3/';
var REPORT_EMAIL='support@nsats.com';   /* set an address to switch on the "Report a wrong detail" link */
var classMode=false, adding=false, roster=[], keepRoster=false;
var coachAll=false;
var INST={}, instQ='', instLoading={}, instFailed={};
window.SN_INST=function(st,rows,unis){ INST_UNI[st]=unis||{}; INST[st]=rows };
function esc(x){ return String(x).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]}) }
function stNames(p,tr){ return (p.states||[p.state]).map(function(x){var o=stateOf(x);return tr?L(o.n,o.hi):o.n}).join(', ') }
function crNames(p,tr){ if(p.courses&&!p.courses.length) return tr?L('Course not given','कोर्स नहीं बताया'):'Course not given'; return (p.courses||[p.course]).map(function(x){var o=courseOf(x);return tr?L(o.n,o.hi):o.n}).join(', ') }
function catName(c){ return {GEN:'General',EWS:'EWS',OBC:'OBC',SC:'SC',ST:'ST',NA:'Category not given'}[c] }
function todayISO(){ var d=new Date(); return d.getFullYear()+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+('0'+d.getDate()).slice(-2) }
function shareUrlFor(p){ var own=/(^|\.)nsats\.com$/.test(location.hostname); return (own?location.origin+location.pathname:PUBLIC_URL)+'#s='+encodeProfile(p) }
function shareUrl(){ return shareUrlFor(P) }

function steps(){
  var a=adding?['label','adult']:['adult'];
  if(draft.adult===false) a.push('consent');
  return a.concat(['level','state','inc','cat','gender','dis','firstGen','marks','course','inst']);
}
function qCount(){return 11}
function qIndex(k){var order=['adult','level','state','inc','cat','gender','dis','firstGen','marks','course','inst'];return order.indexOf(k)+1}

function opt(k,v,label,sub){return '<button class="opt" data-a="pick" data-k="'+k+'" data-v="'+v+'">'+label+(sub?'<small>'+sub+'</small>':'')+'</button>'}
function multi(k,list,first,more){
  var sel=draft[k]||[];
  return '<div class="opts two">'+list.map(function(o){ var i=sel.indexOf(o.id);
    return '<button class="opt'+(i>=0?' on':'')+'" aria-pressed="'+(i>=0)+'" data-a="toggle" data-k="'+k+'" data-v="'+o.id+'">'+L(o.n,o.hi)+(i===0?'<small>'+first+'</small>':i>0?'<small>'+more+'</small>':'')+'</button>' }).join('')+'</div>'+
    '<p class="small" id="multierr" style="color:var(--bad)" hidden>Choose at least one.</p>'+
    '<div><button class="btn" data-a="multinext" data-k="'+k+'">'+L('Next','आगे')+(sel.length>1?' ('+sel.length+')':'')+'</button></div>';
}
var ICON={
  cap:'<path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/>',
  bag:'<path d="M3 7h18v13H3z"/><path d="M8 7V5h8v2"/><path d="M3 13h18"/>',
  tool:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z"/>',
  book:'<path d="M4 5h7v14H4z"/><path d="M13 5h7v14h-7z"/>',
  receipt:'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6"/><path d="M9 12h6"/>',
  bank:'<path d="M12 3l9 5H3z"/><path d="M3 10h18"/><path d="M5 10v8"/><path d="M9.5 10v8"/><path d="M14.5 10v8"/><path d="M19 10v8"/><path d="M3 20h18"/>',
  college:'<path d="M3 21h18"/><path d="M5 21V10l7-5 7 5v11"/><path d="M9 21v-6h6v6"/>',
  list:'<path d="M9 6h11"/><path d="M9 12h11"/><path d="M9 18h11"/><path d="M4 6l1 1 2-2"/><path d="M4 12l1 1 2-2"/><path d="M4 18l1 1 2-2"/>',
  heart:'<path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/>',
  shield:'<path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z"/><path d="M12 8v5"/><path d="M12 16h.01"/>',
  arrow:'<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
  tick:'<path d="M5 12l5 5L20 7"/>',
  bang:'<path d="M12 7v6"/><path d="M12 17h.01"/>',
  wallet:'<path d="M3 7h18v12H3z"/><path d="M16 13h2"/><path d="M3 7l3-3h12l3 3"/>',
  clip:'<path d="M9 4h6v3H9z"/><path d="M6 6h12v15H6z"/><path d="M9 12h6"/><path d="M9 16h6"/>',
  help:'<path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7"/><path d="M12 17h.01"/>'
};
function ico(k,sz,sw){ return '<svg width="'+(sz||26)+'" height="'+(sz||26)+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+(sw||2)+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+ICON[k]+'</svg>' }
var quick={lvl:'ug',age:'',st:'',inc:'',cat:'',err:''};
function soonList(today){
  return SCHEMES.filter(function(s){return !s.closed&&s.close&&s.close>=today}).sort(function(a,b){return a.close<b.close?-1:a.close>b.close?1:0}).slice(0,5);
}
function shortDate(iso){ var m=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; var p=iso.split('-'); return (+p[2])+' '+m[+p[1]-1] }
function opps(){ return WORK.length+WORK_MORE.length+SKILLS.length+COACH.length }
function vWelcome(){
  var today=todayISO(), nInst=0; for(var k in INST_N) nInst+=INST_N[k];
  var nSch=SCHEMES.filter(function(s){return !s.closed}).length;
  var sts=STATES.slice().sort(function(a,b){return a.n<b.n?-1:1});
  var cats=[['GEN','General','सामान्य'],['EWS','EWS','ईडब्ल्यूएस'],['OBC','OBC','ओबीसी'],['SC','SC','एससी'],['ST','ST','एसटी'],['NA','Prefer not to say','नहीं बताना चाहते']];
  var sel=function(v,x){return String(v)===String(x)?' selected':''};
  var tiles=[
    ['browse.html','cap','',L('Scholarships','छात्रवृत्तियाँ'),L(nSch+' schemes',nSch+' योजनाएँ'),L('Central and state schemes for Class 11 to postgraduate, with amounts and deadlines.','कक्षा 11 से स्नातकोत्तर तक केंद्र और राज्य की योजनाएँ, राशि और अंतिम तिथि के साथ।')],
    ['#work','bag','dk',L('Internships','इंटर्नशिप'),L((WORK.length+WORK_MORE.length)+' programmes',(WORK.length+WORK_MORE.length)+' कार्यक्रम'),L('Paid and unpaid government internships and apprenticeships.','सरकारी इंटर्नशिप और अप्रेंटिसशिप, सशुल्क और निःशुल्क।')],
    ['#skills','tool','lt',L('Learn a trade','हुनर सीखें'),L(SKILLS.length+' free',SKILLS.length+' मुफ़्त'),L('Free skill training with a certificate, some paying you to learn.','प्रमाणपत्र के साथ मुफ़्त कौशल प्रशिक्षण, कुछ में सीखते हुए पैसे भी।')],
    ['#coaching','book','',L('Free coaching','मुफ़्त कोचिंग'),L(COACH.length+' schemes',COACH.length+' योजनाएँ'),L('Government-paid coaching for JEE, NEET, CLAT, civil services and more.','JEE, NEET, CLAT, सिविल सेवा आदि के लिए सरकारी ख़र्च पर कोचिंग।')],
    ['#coaching','receipt','dk',L('Exam fees','परीक्षा शुल्क'),L(EXAMFEES.length+' exams',EXAMFEES.length+' परीक्षाएँ'),L('What JEE, NEET, CUET, GATE and CLAT cost you, by category.','JEE, NEET, CUET, GATE और CLAT का शुल्क, श्रेणी के अनुसार।')],
    ['#loan','bank','lt',L('Education loans','शिक्षा ऋण'),L('Calculator','कैलकुलेटर'),L('Bank rates, repayments and the interest subsidy you may get.','बैंक की दरें, किस्तें और ब्याज सब्सिडी जो आपको मिल सकती है।')],
    ['#schemes','college','',L('Check your college','अपना कॉलेज जाँचें'),L(nInst.toLocaleString('en-IN')+' listed',nInst.toLocaleString('en-IN')+' सूचीबद्ध'),L('Is it on the official lists? Is it on the PM-Vidyalaxmi list?','क्या यह आधिकारिक सूचियों में है? क्या यह पीएम-विद्यालक्ष्मी सूची में है?')],
    ['apply.html','list','dk',L('How to apply','आवेदन कैसे करें'),L((Object.keys(GUIDES).length+1)+' guides',(Object.keys(GUIDES).length+1)+' गाइड'),L('Step-by-step guides to state portals and the national portal.','राज्य पोर्टलों और राष्ट्रीय पोर्टल के लिए क़दम-दर-क़दम गाइड।')],
    ['#private','heart','lt',L('Company and trust scholarships','कंपनी और ट्रस्ट छात्रवृत्तियाँ'),L(PRIV.length+' listed',PRIV.length+' सूचीबद्ध'),L('From companies, public-sector firms and foundations.','कंपनियों, सार्वजनिक उपक्रमों और फ़ाउंडेशनों से।')]
  ];
  var needP=function(h){return (h==='#loan'||h==='#schemes')&&!P};
  return (badLink?'<div class="wrap" style="padding-top:16px"><div class="strip bad">'+L('That link is incomplete or no longer valid. You can start again below.','वह लिंक अधूरा है या अब मान्य नहीं है। आप नीचे से दोबारा शुरू कर सकते हैं।')+'</div></div>':'')+
  '<section class="homehero"><div class="wrap">'+
    '<div class="copy"><span class="tag">'+L('Free · no sign-up · government schemes first','मुफ़्त · कोई साइन-अप नहीं · पहले सरकारी योजनाएँ')+'</span>'+
    '<h1>'+L('Money and opportunities for your studies, in one place','आपकी पढ़ाई के लिए पैसा और अवसर, एक ही जगह')+'</h1>'+
    '<p class="lead">'+L('Scholarships, internships, free coaching and skill training from the central and state governments. Answer five quick questions and see what fits you.','केंद्र और राज्य सरकारों की छात्रवृत्तियाँ, इंटर्नशिप, मुफ़्त कोचिंग और कौशल प्रशिक्षण। पाँच छोटे सवालों के जवाब दीजिए और देखिए क्या आपके लिए है।')+'</p>'+
    '<div class="stats"><div><b>'+nSch+'</b><span>'+L('scholarships','छात्रवृत्तियाँ')+'</span></div><div><b>'+STATES.length+'</b><span>'+L('states and UTs','राज्य और केंद्र शासित प्रदेश')+'</span></div>'+
    '<div><b>'+nInst.toLocaleString('en-IN')+'</b><span>'+L('colleges to look up','कॉलेज खोजने के लिए')+'</span></div><div><b>'+opps()+'</b><span>'+L('internships, trades, coaching','इंटर्नशिप, हुनर, कोचिंग')+'</span></div></div></div>'+
    '<form class="quick" id="quickform" novalidate>'+
      '<div><h2>'+L('See your matches in a minute','एक मिनट में अपने विकल्प देखें')+'</h2><p>'+L('Five quick answers now. You can add more later to sharpen the list.','अभी पाँच छोटे जवाब। बाद में और जवाब देकर सूची और सटीक कर सकते हैं।')+'</p></div>'+
      '<fieldset><legend>'+L('What are you studying, or about to?','आप क्या पढ़ रहे हैं, या पढ़ने वाले हैं?')+'</legend><div class="qchips">'+
        [['11','Class 11–12','कक्षा 11–12'],['iti','ITI','आईटीआई'],['dip','Diploma','डिप्लोमा'],['ug','Degree','डिग्री'],['pg','Postgraduate','स्नातकोत्तर']].map(function(o){return '<button class="qchip" type="button" data-a="qlvl" data-v="'+o[0]+'" aria-pressed="'+(quick.lvl===o[0])+'">'+L(o[1],o[2])+'</button>'}).join('')+
      '</div></fieldset>'+
      '<div class="f"><label for="q-st">'+L('Where do you live?','आप कहाँ रहते हैं?')+'</label><select id="q-st" data-f="q" data-k="st"><option value="">'+L('Choose your state','अपना राज्य चुनें')+'</option>'+sts.map(function(o){return '<option value="'+o.id+'"'+sel(quick.st,o.id)+'>'+L(o.n,o.hi)+'</option>'}).join('')+'</select></div>'+
      '<div class="two"><div class="f"><label for="q-inc">'+L('Family income a year','परिवार की सालाना आय')+'</label><select id="q-inc" data-f="q" data-k="inc"><option value="">'+L('Choose','चुनें')+'</option>'+INC.map(function(o,i){return '<option value="'+i+'"'+sel(quick.inc,i)+'>'+L(o.n,o.hi)+'</option>'}).join('')+'</select></div>'+
      '<div class="f"><label for="q-cat">'+L('Category','श्रेणी')+'</label><select id="q-cat" data-f="q" data-k="cat"><option value="">'+L('Choose','चुनें')+'</option>'+cats.map(function(o){return '<option value="'+o[0]+'"'+sel(quick.cat,o[0])+'>'+L(o[1],o[2])+'</option>'}).join('')+'</select></div></div>'+
      '<div class="f"><label for="q-age">'+L('Your age','आपकी उम्र')+'</label><select id="q-age" data-f="q" data-k="age"><option value="">'+L('Choose','चुनें')+'</option>'+
        '<option value="adult"'+sel(quick.age,'adult')+'>'+L('18 or older','18 या उससे अधिक')+'</option><option value="minor"'+sel(quick.age,'minor')+'>'+L('Under 18, and a parent or guardian agrees','18 से कम, और माता-पिता या अभिभावक सहमत हैं')+'</option></select></div>'+
      (quick.err?'<p class="err" role="alert">'+quick.err+'</p>':'')+
      '<button class="cta" type="button" data-a="quickgo">'+L('Show my matches','मेरे विकल्प दिखाएँ')+ico('arrow',20,2.4)+'</button>'+
      '<span class="alt">'+L('Your answers stay on this device. ','आपके जवाब इसी डिवाइस पर रहते हैं। ')+'<a href="#start" data-a="begin">'+L('Prefer all 11 questions?','सभी 11 सवाल देना चाहते हैं?')+'</a></span>'+
    '</form>'+
  '</div></section>'+
  '<div class="wrap">'+
  (P?'<div class="strip" style="margin-top:20px">'+L('Your answers are saved for this visit. ','इस बार के आपके जवाब सहेजे हुए हैं। ')+'<a href="#schemes">'+L('Back to my matches','मेरे विकल्पों पर लौटें')+'</a></div>':'')+
  '<section class="hsec" id="explore"><div class="hhead"><h2>'+L('Explore everything','सब कुछ देखें')+'</h2><span>'+L('Most pages open without answering any questions','ज़्यादातर पेज बिना सवालों के खुलते हैं')+'</span></div>'+
    '<div class="tiles">'+tiles.map(function(t){ return '<a class="tile" href="'+t[0]+'"'+(needP(t[0])?' data-a="needp"':'')+'><div class="top"><span class="ic '+t[2]+'">'+ico(t[1])+'</span><span class="badge">'+(needP(t[0])?L('After 5 answers','5 जवाबों के बाद'):t[4])+'</span></div><b>'+t[3]+'</b><span class="l">'+t[5]+'</span></a>' }).join('')+'</div></section>'+
  (function(){ var l=soonList(today); if(!l.length) return '';
    return '<section class="hsec"><div class="hhead"><h2>'+L('Closing soon','जल्द बंद हो रही हैं')+'</h2><a href="browse.html">'+L('See all scholarships','सभी छात्रवृत्तियाँ देखें')+'</a></div><div class="soon">'+
      l.map(function(s){ var d=daysBetween(today,s.close), cl=d<=7?'r':d<=60?'a':'';
        return '<a class="dl" href="scheme/'+s.id+'.html"><span class="when '+cl+'">'+(d===0?L('Closes today','आज बंद'):d===1?L('Closes tomorrow','कल बंद'):L('Closes ','बंद: ')+shortDate(s.close))+'</span><b>'+s.name+'</b>'+
          '<span class="who">'+(s.lvl==='C'?L('All states','सभी राज्य'):L(stateOf(s.st).n,stateOf(s.st).hi))+'</span><span class="amt">'+(s.val!=null?rs(s.val)+(s.once?L(' once',' एक बार'):L(' a year',' प्रति वर्ष')):L('See details','विवरण देखें'))+'</span></a>' }).join('')+'</div></section>' })()+
  '<div class="safe"><span class="ic">'+ico('shield',30)+'</span><div class="t"><b>'+L('Never pay to apply','आवेदन के लिए कभी पैसे न दें')+'</b><span>'+L('Real scholarships never charge a fee or ask for your OTP. Fake messages spread on WhatsApp near every deadline.','असली छात्रवृत्तियाँ कभी शुल्क या OTP नहीं माँगतीं। हर अंतिम तिथि के आसपास WhatsApp पर नकली संदेश फैलते हैं।')+'</span></div><a class="btn" href="#fake">'+L('Spot a fake','नकली पहचानें')+'</a></div>'+
  '<div class="trust" style="margin-bottom:8px"><span>'+L('Official sources linked on every scheme','हर योजना पर आधिकारिक स्रोत')+'</span><span>'+L('No ads, no commission','कोई विज्ञापन या कमीशन नहीं')+'</span><span>'+L('Works offline','ऑफ़लाइन भी चलता है')+'</span><span>'+L('Details checked ','जानकारी जाँची गई: ')+CHECKED+'</span></div>'+
  '</div>';
}
function quickGo(){
  var lv=quick.lvl, st=quick.st, inc=quick.inc, cat=quick.cat, age=quick.age;
  var miss=[]; if(!st) miss.push(L('your state','राज्य')); if(inc==='') miss.push(L('family income','आय')); if(!cat) miss.push(L('category','श्रेणी')); if(!age) miss.push(L('your age','उम्र'));
  if(miss.length){ quick.err=L('Please choose ','कृपया चुनें: ')+miss.join(', ')+'.'; render(); var f=document.getElementById('quickform'); if(f) f.scrollIntoView({block:'center'}); return }
  quick.err='';
  draft={adult:age==='adult',level:lv,state:st,states:[st],inc:+inc,cat:cat,gender:'U',dis:null,firstGen:null,m12:null,m10:null,courses:[],inst:'unsure',quickInst:true};
  if(age!=='adult') draft.consent='given';
  isExample=false; badLink=false; finish();
}
function unknowns(p){ var u=[]; if(p.gender==='U') u.push('gender'); if(p.dis==null) u.push('dis'); if(p.firstGen==null) u.push('firstGen'); if(p.m12==null) u.push('marks'); if(!p.courses.length) u.push('course'); if(p.quickInst) u.push('inst'); return u }
function vQuestion(){
  var ks=steps(), k=ks[step], body='', title='', help='';
  if(k==='label'){
    return '<div class="stack"><span class="pill plain">Counsellor mode</span><h1>Who is this student?</h1>'+
      '<p class="muted">A name or roll number, so you can tell the sheets apart. It stays on this device.</p>'+
      '<div class="field"><label for="slabel">Name or roll number</label><input id="slabel" maxlength="60" autocomplete="off"></div>'+
      '<div class="row"><button class="btn" data-a="label">Next</button><button class="btn ghost" data-a="canceladd">Cancel</button></div></div>';
  }
  if(k==='adult'){
    title=L('How old are you?','आपकी उम्र कितनी है?');
    help=L('If you are under 18, the law asks for a parent or guardian to agree before your details are used.','अगर आप 18 से कम हैं, तो क़ानून के अनुसार आपकी जानकारी इस्तेमाल करने से पहले माता-पिता या अभिभावक की सहमति ज़रूरी है।');
    body='<div class="opts">'+opt('adult','true',L('18 or older','18 या उससे अधिक'))+opt('adult','false',L('Under 18','18 से कम'))+'</div>';
  } else if(k==='consent'){
    return '<div class="stack"><span class="pill plain">'+L('Parent or guardian','माता-पिता या अभिभावक')+'</span>'+
    '<h1>'+L('Please ask a parent or guardian to read this.','कृपया माता-पिता या अभिभावक से यह पढ़ने को कहें।')+'</h1>'+
    '<p>'+L('Your child wants to use this tool to find scholarships and plan college costs. It will ask about family income, social category, disability and marks. The answers stay on this device and are not sent anywhere.','आपका बच्चा छात्रवृत्तियाँ खोजने और कॉलेज के ख़र्च की योजना बनाने के लिए इस टूल का उपयोग करना चाहता है। इसमें पारिवारिक आय, सामाजिक श्रेणी, विकलांगता और अंकों के बारे में पूछा जाएगा। जवाब इसी डिवाइस पर रहते हैं और कहीं भेजे नहीं जाते।')+'</p>'+
    '<div class="opts">'+opt('consent','given',L('I am the parent or guardian, and I agree','मैं माता-पिता या अभिभावक हूँ, और मैं सहमत हूँ'))+
    opt('consent','skipped',L('Continue without consent for now','अभी बिना सहमति के आगे बढ़ें'),L('Allowed only during the beta','केवल बीटा के दौरान'))+'</div>'+
    '<div class="strip warn">'+L('Beta notice: consent is recorded on this device but not verified. Verified parental consent will be required before public launch.','बीटा सूचना: सहमति इस डिवाइस पर दर्ज होती है पर सत्यापित नहीं होती। सार्वजनिक लॉन्च से पहले सत्यापित सहमति अनिवार्य होगी।')+'</div>'+
    '<div><button class="btn ghost sm" data-a="back">'+L('Back','पीछे')+'</button></div></div>';
  } else if(k==='level'){
    title=L('What will you be studying this year or next?','आप इस साल या अगले साल क्या पढ़ेंगे?');
    help=L('Schemes differ by level. Pick the course you are in now or about to start.','योजनाएँ स्तर के अनुसार अलग होती हैं। जो कोर्स आप अभी कर रहे हैं या शुरू करने वाले हैं, वह चुनें।');
    body='<div class="opts">'+LEVELS.map(function(l){return opt('level',l.id,L(l.n,l.hi))}).join('')+'</div>';
  } else if(k==='state'){
    title=L('Which state is your home state (domicile)?','आपका गृह राज्य (अधिवास) कौन-सा है?');
    help='Tap your home state first. You can then add any other states whose schemes you want to see.';
    body=multi('states',STATES,'Home state','Also show');
  } else if(k==='inc'){
    title=L('What is your family\'s total income in a year?','आपके परिवार की सालाना कुल आय कितनी है?');
    help=L('Most schemes have an income limit. Use the figure on your income certificate if you have one.','ज़्यादातर योजनाओं में आय सीमा होती है। अगर आय प्रमाण पत्र है तो उसी की राशि चुनें।');
    body='<div class="opts">'+INC.map(function(b,i){return opt('inc',i,L(b.n,b.hi))}).join('')+'</div>';
  } else if(k==='cat'){
    title=L('Which social category are you in? (optional)','आप किस सामाजिक श्रेणी में हैं? (वैकल्पिक)');
    help=L('We ask because many scholarships are reserved for particular categories. You can choose not to say, and you will still see schemes open to everyone.','हम यह इसलिए पूछते हैं क्योंकि कई छात्रवृत्तियाँ विशेष श्रेणियों के लिए आरक्षित हैं। आप न बताना चुन सकते हैं; तब भी सबके लिए खुली योजनाएँ दिखेंगी।');
    body='<div class="opts">'+opt('cat','GEN',L('General','सामान्य'))+opt('cat','EWS',L('EWS','EWS (आर्थिक रूप से कमज़ोर वर्ग)'))+
      opt('cat','OBC',L('OBC','OBC (अन्य पिछड़ा वर्ग)'),L('Includes BC, MBC, EBC and SEBC','BC, MBC, EBC और SEBC शामिल'))+
      opt('cat','SC',L('Scheduled Caste (SC)','अनुसूचित जाति (SC)'))+opt('cat','ST',L('Scheduled Tribe (ST)','अनुसूचित जनजाति (ST)'))+
      opt('cat','NA',L('I would rather not say','मैं नहीं बताना चाहता/चाहती'))+'</div>';
  } else if(k==='gender'){
    title=L('What is your gender?','आपका लिंग क्या है?');
    help=L('Some schemes are for women students.','कुछ योजनाएँ छात्राओं के लिए हैं।');
    body='<div class="opts">'+opt('gender','F',L('Female','महिला'))+opt('gender','M',L('Male','पुरुष'))+opt('gender','O',L('Another gender, or I would rather not say','अन्य, या नहीं बताना चाहता/चाहती'))+'</div>';
  } else if(k==='dis'){
    title=L('Do you have a certified disability of 40% or more?','क्या आपके पास 40% या अधिक की प्रमाणित विकलांगता है?');
    body='<div class="opts">'+opt('dis','true',L('Yes','हाँ'))+opt('dis','false',L('No','नहीं'))+'</div>';
  } else if(k==='firstGen'){
    title=L('Will you be the first in your family to go to college?','क्या आप अपने परिवार में कॉलेज जाने वाले पहले व्यक्ति होंगे?');
    help=L('No scheme in the beta depends on this yet. It helps us choose how much to explain.','बीटा की कोई योजना अभी इस पर निर्भर नहीं है। इससे हमें तय करने में मदद मिलती है कि कितना समझाना है।');
    body='<div class="opts">'+opt('firstGen','true',L('Yes','हाँ'))+opt('firstGen','false',L('No','नहीं'))+'</div>';
  } else if(k==='marks'){
    title=L('What were your marks?','आपके अंक कितने थे?');
    var after10=['11','iti','dip'].indexOf(draft.level)>=0;
    help=after10?L('Enter your Class 10 marks. Leave Class 12 empty if you have not taken it.','कक्षा 10 के अंक लिखें। कक्षा 12 नहीं दी है तो उसे ख़ाली छोड़ें।'):L('If your Class 12 result is not out yet, enter what you expect.','अगर कक्षा 12 का परिणाम अभी नहीं आया है, तो अनुमानित अंक लिखें।');
    body='<div class="fields"><div class="field"><label for="m12">'+L('Class 12 (%)','कक्षा 12 (%)')+'</label><input id="m12" type="number" inputmode="numeric" min="0" max="100" value="'+(draft.m12!=null?draft.m12:'')+'"></div>'+
      '<div class="field"><label for="m10">'+L('Class 10 (%)','कक्षा 10 (%)')+'</label><input id="m10" type="number" inputmode="numeric" min="0" max="100" value="'+(draft.m10!=null?draft.m10:'')+'"></div></div>'+
      '<p class="small" id="markerr" style="color:var(--bad)" hidden>'+L('Enter your marks as a number from 0 to 100.','अंक 0 से 100 के बीच की संख्या में लिखें।')+'</p>'+
      '<div><button class="btn" data-a="marks">'+L('Next','आगे')+'</button></div>';
  } else if(k==='course'){
    var lvq=draft.level||'ug';
    title=lvq==='11'?L('Which stream are you in?','आपकी स्ट्रीम कौन-सी है?'):lvq==='iti'||lvq==='dip'?L('Which field is your course in?','आपका कोर्स किस क्षेत्र में है?'):L('What do you want to study?','आप क्या पढ़ना चाहते हैं?');
    help=lvq==='iti'||lvq==='dip'?'Pick the nearest. Engineering trades and polytechnic courses count as Engineering and Technology.':'Choose one or more. The first one you tap is used for the cost and loan figures; you can switch later.';
    body=multi('courses',lvq==='11'?COURSES.filter(function(c){return ['sci','com','arts'].indexOf(c.id)>=0}):COURSES,'Plan costs for this one','Also consider');
  } else if(k==='inst'){
    title=L('What kind of college do you expect to join?','आप किस तरह के कॉलेज में जाने की उम्मीद करते हैं?');
    help=L('This decides which loan rules apply. The PM-Vidyalaxmi list has 1,425 institutions.','इसी से तय होता है कि ऋण के कौन-से नियम लागू होंगे। पीएम-विद्यालक्ष्मी सूची में 1,425 संस्थान हैं।');
    body='<div class="opts">'+opt('inst','govt',L('Government or aided college','सरकारी या सहायता प्राप्त कॉलेज'))+opt('inst','private',L('Private college','निजी कॉलेज'))+
      opt('inst','qhei',L('A top-ranked institution on the PM-Vidyalaxmi list','पीएम-विद्यालक्ष्मी सूची का कोई शीर्ष संस्थान'))+opt('inst','unsure',L('Not sure yet','अभी तय नहीं'))+'</div>';
  }
  var n=qIndex(k);
  return '<div class="stack"><div class="row" style="justify-content:space-between"><span class="small muted">'+L('Question ','सवाल ')+n+L(' of ',' / ')+qCount()+'</span>'+
    '<button class="btn ghost sm" data-a="back">'+L('Back','पीछे')+'</button></div>'+
    '<div class="progress" aria-hidden="true"><i style="width:'+Math.round(n*100/qCount())+'%"></i></div>'+
    '<h1>'+title+'</h1>'+(help?'<p class="muted">'+help+'</p>':'')+body+'</div>';
}
function profileChips(){
  var st=stateOf(P.state), c=courseOf(P.course), cats={GEN:'General',EWS:'EWS',OBC:'OBC',SC:'SC',ST:'ST',NA:L('Category not given','श्रेणी नहीं बताई')};
  var lvo=levelOf(P.level||'ug'), a=[L(lvo.n,lvo.hi)].concat(P.states.map(function(x){var o=stateOf(x);return L(o.n,o.hi)})).concat([L(INC[P.inc].n,INC[P.inc].hi),cats[P.cat]],P.courses.map(function(x){var o=courseOf(x);return L(o.n,o.hi)}),[P.m12+'% '+(['11','iti','dip'].indexOf(P.level)>=0&&P.m10!=null&&P.m12===P.m10?L('in Class 10','कक्षा 10 में'):L('in Class 12','कक्षा 12 में'))]);
  return '<div class="chips">'+a.map(function(x){return '<span class="chip">'+x+'</span>'}).join('')+'</div>';
}
function capText(s){
  if(s.floor!=null) return 'Above '+rs(s.floor)+' a year';
  if(s.cap==null) return 'None stated in the source';
  if(typeof s.cap==='number') return rs(s.cap)+' a year';
  var parts=[]; for(var k in s.cap){ parts.push((k==='_'?'others':k)+' '+rs(s.cap[k])) } return parts.join(', ')+' a year';
}
function chkText(s){
  var c=s.chk, link=c.src?' <a href="'+c.src+'" target="_blank" rel="noopener">Official page</a>.':'';
  var t={report:'against a news report of figures given to Parliament.',
    official:'on an official government page'+(c.yr?' (figures for '+c.yr+')':'')+'.',
    part:'on an official government page, which confirms the scheme but not every figure.',
    notfound:'and not found on any official government page.',
    news:'against news reports and listings. We could not read an official page for it.',
    unconf:'but not confirmed. The official portal refuses automated reading or does not show the rules publicly, so this entry still rests on a secondary listing. Confirm it on the portal.'}[c.by];
  return t+link+(c.note?' '+c.note:'');
}
function schemeDetails(s){
  var st=s.st?stateOf(s.st):null, portal=s.portal||(st&&st.portal)||'', papers=['Aadhaar card','Aadhaar-linked bank account','Class 12 marksheet','Bonafide or admission certificate','Fee receipt'];
  if(s.docs) papers=s.docs;
  else{ if(s.cap!=null||s.floor!=null) papers.push('Income certificate'); if(s.cats) papers.push('Caste or category certificate'); if(s.st) papers.push('Domicile certificate'); if(s.dis||s.orDis) papers.push('Disability certificate, if it applies'); }
  var marks=s.pct80?'Above the 80th percentile of your board in Class 12':s.min12!=null?(s.max12!=null?s.min12+'% to under '+s.max12+'% in Class 12':'At least '+s.min12+'% in Class 12'):s.min12by?'At least 50% in Class 12 for OBC and EWS students':'None stated in the source';
  var rows=[
    ['Run by',s.lvl==='C'?'Central government':'Government of '+st.n],
    ['Social category',s.minority?'Notified minority communities':s.cats?s.cats.join(', ')+(s.orDis?', or any student with a disability':''):'All categories'],
    ['Family income limit',capText(s)],
    ['Marks needed',marks],
    ['Who else',[s.gender==='F'?'Women students only':'',s.dis?'Students with a disability of 40% or more':'',s.firstGen?'First graduate in the family':''].filter(Boolean).join('. ')||'No other limit stated'],
    ['Level of study',(s.lv||['ug']).map(function(x){return levelOf(x).n}).join(', ')+(s.lvAssumed?' (assumed from "post-matric"; check the portal)':'')],
    ['Courses',s.courses?s.courses.map(function(c){return courseOf(c).n}).join(', '):s.pro?'Technical and professional courses':'Any course'],
    ['Type of college',s.inst?(s.inst[0]==='govt'?'Government or aided colleges':'Private or self-financing colleges'):'Any recognised college'],
    ['Other conditions',[s.cond,s.cond2].filter(Boolean).join(' ')||'None stated in the source'],
    ['What you get',s.benefit+(s.tbl?'<table class="tbl" style="margin-top:6px">'+s.tbl.map(function(r){return '<tr><td>'+r[0]+'</td><td>'+r[1]+'</td></tr>'}).join('')+'</table><span class="small muted">Amounts are '+s.per+'.</span>':'')],
    ['With other scholarships',s.combine||'Not stated on the pages we read. Ask before you hold two.'],
    ['When to apply',s.win||'No dates published in the beta'],
    [s.docs?'Papers the portal asks for':'Papers usually needed',papers.join(', ')],
    ['Renewal',s.renew||'Not yet recorded. Check the portal before your second year.'],
    ['Checked',chkText(s)],
    ['Where to apply',portal?'<a href="'+portal+'" target="_blank" rel="noopener">'+portal.replace('https://','').replace(/\/$/,'')+'</a>':'Official portal not confirmed']];
  return '<details class="more"><summary>Full details</summary><table class="tbl">'+rows.map(function(r){return '<tr><th>'+r[0]+'</th><td>'+r[1]+'</td></tr>'}).join('')+'</table></details>';
}
function srcBadge(s){
  var by=s.chk.by, ok=by==='official', part=by==='part'||by==='report';
  return '<span class="src" style="color:'+(ok?'var(--good)':part?'var(--warn)':'var(--muted)')+'">'+ico(ok?'tick':'bang',16,2.6)+'<span style="color:var(--muted)">'+
    (ok?L('Official source','आधिकारिक स्रोत'):part?L('Partly confirmed','आंशिक पुष्टि'):L('Not yet confirmed','अभी पुष्टि नहीं'))+'</span></span>';
}
function schemeCard(m){
  var s=m.s, st=s.st?stateOf(s.st):null, portal=s.portal||(st&&st.portal)||'', src=s.src||(st&&st.src), ss=schemeStatus(s,todayISO()), ch=CHG[s.id];
  var notes=m.notes.concat(s.cond2?[s.cond2]:[]);
  return '<article class="sc'+(s.warn?' flag':'')+'">'+
    '<div class="tags"><span class="pill '+(m.status==='likely'?'good':'warn')+'">'+(m.status==='likely'?L('Likely for you','आपके लिए संभावित'):(notes.length===1?L('Check 1 thing','1 बात जाँचें'):L('Check '+notes.length+' things',notes.length+' बातें जाँचें')))+'</span>'+
      '<span class="pill '+STATUS_K[ss.k][0]+'">'+(ss.k==='open'?(ss.d<=1?L('Closes soon','जल्द बंद'):L('Open · closes ','खुली · बंद ')+shortDate(s.close)):STATUS_K[ss.k][1])+'</span>'+
      '<span class="pill plain">'+(s.lvl==='C'?L('Central','केंद्रीय'):L(st.n,st.hi))+'</span></div>'+
    '<h3>'+s.name+'</h3>'+
    (s.val!=null?'<div class="amt">'+rs(s.val)+' <small>'+(s.once?L('once','एक बार'):L('a year','प्रति वर्ष'))+'</small></div>':'')+
    '<p class="line">'+s.benefit+'</p>'+
    (s.warn?'<div class="strip bad"><b>'+L('Warning: ','चेतावनी: ')+'</b>'+s.warn+'</div>':'')+
    (notes.length?'<ul class="why">'+notes.map(function(n){return '<li>'+n+'</li>'}).join('')+'</ul>':'')+
    '<details class="more"><summary>'+L('Full details, dates and sources','पूरा विवरण, तिथियाँ और स्रोत')+'</summary>'+
      (ss.k!=='none'?'<p class="small" style="margin:8px 0 0"><b>'+ss.t+'.</b></p>':'')+
      (s.win?'<p class="small" style="margin:8px 0 0"><b>'+L('2026-27 window: ','2026-27 अवधि: ')+'</b>'+s.win+'</p>':'')+
      '<p class="small muted" style="margin:8px 0 0"><b>Payout record'+(s.payout?' '+s.payout.year:'')+':</b> '+(s.payout?s.payout.paid.toLocaleString('en-IN')+' fresh awards paid, '+s.payout.verified.toLocaleString('en-IN')+' verified applications, '+s.payout.slots.toLocaleString('en-IN')+' slots.':'no figures published for this scheme yet.')+'</p>'+
      (ch?'<p class="small muted" style="margin:8px 0 0"><b>What changed ('+fmtDate(ch[0][0])+'):</b> '+ch[0][1]+' <a href="#changes">All changes</a></p>':'')+
      '<p class="small muted" style="margin:8px 0 0"><b>Last checked '+fmtDate(s.chk.date)+'</b> '+chkText(s)+
        (REPORT_EMAIL?' <a href="mailto:'+REPORT_EMAIL+'?subject='+encodeURIComponent('Wrong detail: '+s.name+' ['+s.id+']')+'&body='+encodeURIComponent('Scheme: '+s.name+'\nWhat is wrong:\n\nWhat it should say:\n\nWhere I saw the correct detail (link or office):\n')+'">Report a wrong detail</a>':'')+'</p>'+
      schemeDetails(s).replace('<details class="more"><summary>Full details</summary>','').replace(/<\/details>$/,'')+
      '<label class="row small" style="gap:6px;margin-top:10px"><input type="checkbox" data-f="count" data-id="'+s.id+'"'+(counted[s.id]?' checked':'')+(s.val==null?' disabled':'')+'> '+
        (s.val==null?L('No fixed amount to count','गिनने के लिए कोई निश्चित राशि नहीं'):L('Count ','गिनें: ')+rs(s.val)+(s.once?L(' once',' एक बार'):L(' a year',' प्रति वर्ष'))+L(' in my plan',''))+'</label>'+
      (src?'<p class="small" style="margin:6px 0 0"><a href="'+src+'" target="_blank" rel="noopener">'+L('Source document','स्रोत दस्तावेज़')+'</a></p>':'')+
    '</details>'+
    '<div class="foot">'+srcBadge(s)+'<a class="btn ghost sm" href="scheme/'+s.id+'.html">'+L('Page','पेज')+'</a>'+
      (portal?'<a class="btn sm" href="'+portal+'" target="_blank" rel="noopener">'+L('Apply','आवेदन')+'</a>':'')+'</div>'+
  '</article>';
}
function bestCard(all){
  var likely=all.filter(function(m){return m.status==='likely'}), R=loanRules(P,loan.amt), sim=simulate(loan.amt,loan.rate,cost.years,loan.tenure,R.mode);
  var b=bestPlan(likely,cost.years,R.mode==='none'?0:sim.subsidy), body, notes=[];
  if(b.pick==='none') body='<p style="margin:0">None of your likely schemes has a fixed amount, so there is nothing to add up yet.</p>';
  else if(b.pick==='scholarship') body='<p style="margin:0"><b>Take the scholarship route: about '+rs(b.scholTotal)+' over '+cost.years+' years.</b></p><ul class="why">'+
    (b.main?'<li>'+b.main.name+': '+rs(b.main.val)+' a year</li>':'')+b.extras.map(function(s){return '<li>'+s.name+': '+rs(s.val)+' once</li>'}).join('')+'</ul>'+
    (b.subsidy>0?'<p class="small" style="margin:0">The loan interest subsidy would be worth about '+rs(b.subsidy)+' on a loan of '+rs(loan.amt)+'. It cannot be held with a government scholarship, and it is the smaller of the two.</p>':'')+
    '<div><button class="btn sm" data-a="usebest">Count this combination in my plan</button></div>';
  else body='<p style="margin:0"><b>Take the loan interest subsidy: about '+rs(b.subsidy)+' on a loan of '+rs(loan.amt)+'.</b></p>'+
    '<p class="small" style="margin:0">That is more than your best scholarship combination ('+rs(b.scholTotal)+'), and the two cannot be held together. It holds only if you borrow that much.</p>'+
    '<div class="row"><a class="btn sm" href="#loan">Open the loan guide</a>'+(b.scholTotal>0?'<button class="btn ghost sm" data-a="usebest">Count the scholarships instead</button>':'')+'</div>';
  if(b.unvalued.length) notes.push(b.unvalued.length+' of your likely schemes pay your fees or a variable amount and are not valued here. A full fee waiver can be worth more than everything above, so compare it with your fee notice.');
  if(b.skipped.length) notes.push('Left out because of its payout record: '+b.skipped.map(function(s){return s.name}).join(', ')+'.');
  notes.push('Assumes one regular scholarship at a time, with one-time grants on top. Combination rules have not yet been confirmed scheme by scheme.');
  return '<h2>Best combination for you</h2><div class="card stack">'+body+'<ul class="why">'+notes.map(function(n){return '<li>'+n+'</li>'}).join('')+'</ul></div>';
}
function recogHtml(p){
  var r=p.instRecog||[];
  return '<ul class="why" style="margin-top:0">'+(r.length?r.map(function(x){return '<li>'+esc(x)+'</li>'}).join(''):'<li>Nothing on record. Check before you pay any fee.</li>')+'</ul>'+
    '<div class="chips">'+(p.instQ?'<span class="pill good">On the PM-Vidyalaxmi list</span>':'<span class="pill plain">Not on the PM-Vidyalaxmi list</span>')+(p.instWeb?' <a class="small" href="'+(/^https?:/.test(p.instWeb)?'':'https://')+esc(p.instWeb)+'" target="_blank" rel="noopener nofollow">Website on record</a>':'')+'</div>'+
    '<p class="small muted" style="margin:0">From the official lists described in <a href="#data">Our data</a>. They do not show course approvals by AICTE, the National Medical Commission or other regulators.</p>';
}
function loadInst(st){
  if(INST[st]||instLoading[st]||instFailed[st]) return;
  instLoading[st]=1;
  var el=document.createElement('script'); el.src='data/inst/'+st+'.js';
  var done=function(ok){ delete instLoading[st]; if(!ok) instFailed[st]=1; if(P&&route()==='schemes') render() };
  el.onload=function(){ done(!!INST[st]) }; el.onerror=function(){ done(false) };
  document.head.appendChild(el);
}
function instResults(){
  if(instQ.trim().length<3) return '<p class="small muted" style="margin:0">Type at least three letters.</p>';
  var hit=instHits();
  if(!hit.length) return '<p class="small muted" style="margin:0">No match in the lists for '+stNames(P)+'. Try another spelling or part of the name. An institution missing from all of these lists may not be recognised: ask it for its AISHE code and its approval letter.</p>';
  return '<div class="opts">'+hit.map(function(h){ var r=INST[h[0]][h[1]]; return '<button class="opt" data-a="instpick" data-st="'+h[0]+'" data-i="'+h[1]+'">'+esc(r[0])+'<small>'+esc([INST_KIND[r[2]]||'',r[1],(P.states||[]).length>1?stateOf(h[0]).n:''].filter(Boolean).join(' · '))+'</small></button>' }).join('')+(hit.length>=25?'<p class="small muted" style="margin:0">Showing the first 25. Type more of the name.</p>':'')+'</div>';
}
function instCard(){
  var st=stateOf(P.state), head='<h2>Your institution</h2><div class="card stack">';
  if(P.instName) return head+'<div><b>'+esc(P.instName)+'</b></div>'+recogHtml(P)+'<div><button class="btn ghost sm" data-a="instclear">Choose a different one</button></div></div>';
  var sts=P.states||[P.state], wait=sts.filter(function(x){return !INST[x]});
  wait.forEach(loadInst);
  var pending=wait.filter(function(x){return instLoading[x]}), failed=wait.filter(function(x){return instFailed[x]});
  if(wait.length&&wait.length===sts.length)
    return head+'<p class="muted" style="margin:0">'+(pending.length?'Loading the list of colleges and institutes for '+stNames(P)+'.':'The list of colleges for '+stNames(P)+' could not be loaded. Check your connection. Until it loads, the tool uses the type of college you chose in your answers.')+'</p></div>';
  return head+'<p style="margin:0">Find your college, university or ITI to see what the official lists record about it and whether it is on the PM-Vidyalaxmi list.</p>'+
    (failed.length?'<p class="small muted" style="margin:0">Not loaded: '+failed.map(function(x){return stateOf(x).n}).join(', ')+'.</p>':'')+
    '<div class="field"><label for="instq">College or institute name</label><input id="instq" data-f="instq" value="'+esc(instQ)+'" autocomplete="off"></div><div id="instout">'+instResults()+'</div></div>';
}
function shareCard(n){
  var url=shareUrl(), st=stateOf(P.state);
  var line=lang==='hi'?'स्कॉलरशिप नेविगेटर से कॉलेज फ़ंडिंग योजना: '+stNames(P,true)+' में '+n+' योजनाएँ जो इन जवाबों से मेल खाती हैं।':'A college funding plan from Scholarship Navigator: '+n+' schemes in '+stNames(P)+' that fit these answers.';
  var body=line+'\n\n'+url+'\n\n'+L('The link opens the same results. It contains the answers that were given, so pass it on only to people you trust.','यह लिंक वही नतीजे खोलता है। इसमें दिए गए जवाब शामिल हैं, इसलिए इसे केवल भरोसेमंद लोगों को भेजें।');
  var subject=L('My college funding plan','मेरी कॉलेज फ़ंडिंग योजना');
  return '<h2>'+L('Send this plan to yourself or someone else','यह योजना ख़ुद को या किसी और को भेजें')+'</h2><div class="card stack">'+
    '<p style="margin:0">'+L('This link reopens these results on any phone or computer. Email it to yourself to come back later, or to a parent, teacher or counsellor.','यह लिंक किसी भी फ़ोन या कंप्यूटर पर यही नतीजे दोबारा खोलता है। बाद में देखने के लिए ख़ुद को ईमेल करें, या माता-पिता, शिक्षक या काउंसलर को भेजें।')+'</p>'+
    '<div class="row"><a class="btn sm" href="mailto:?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body)+'">'+L('Email the link','लिंक ईमेल करें')+'</a>'+
    '<a class="btn ghost sm" href="https://wa.me/?text='+encodeURIComponent(body)+'" target="_blank" rel="noopener">'+L('Send on WhatsApp','WhatsApp पर भेजें')+'</a>'+
    '<button class="btn ghost sm" data-a="copylink">'+L('Copy link','लिंक कॉपी करें')+'</button></div>'+
    '<div class="field"><label for="sharelink">'+L('Your link','आपका लिंक')+'</label><input id="sharelink" readonly value="'+url+'"></div>'+
    '<p class="small muted" style="margin:0">'+L('The link carries your answers: state, income bracket, category, marks and course. Anyone who has the link can see them. Nothing is stored on our server, and the answers are not sent to it.','इस लिंक में आपके जवाब हैं: राज्य, आय वर्ग, श्रेणी, अंक और कोर्स। जिसके पास लिंक है वह इन्हें देख सकता है। हमारे सर्वर पर कुछ नहीं रखा जाता और जवाब उसे भेजे नहीं जाते।')+'</p></div>';
}
function answersCard(){
  var cats={GEN:'General',EWS:'EWS',OBC:'OBC',SC:'SC',ST:'ST',NA:L('Not given','नहीं बताई')};
  var un='<dd class="unk">'+L('Not asked yet','अभी नहीं पूछा')+'</dd>', lvo=levelOf(P.level||'ug');
  var row=function(t,v){return '<div><dt>'+t+'</dt>'+v+'</div>'};
  return '<div class="card"><div class="row" style="justify-content:space-between;margin-bottom:12px"><h2 style="margin:0;font-size:19px">'+L('Your answers','आपके जवाब')+'</h2><a href="#start" data-a="restart" style="font-weight:700;font-size:15px">'+L('Start again','फिर से शुरू')+'</a></div>'+
    '<dl class="answers">'+
    row(L('Studying','पढ़ाई'),'<dd>'+L(lvo.n,lvo.hi)+'</dd>')+
    row(L('State','राज्य'),'<dd>'+stNames(P,true)+'</dd>')+
    row(L('Income','आय'),'<dd>'+L(INC[P.inc].n,INC[P.inc].hi)+'</dd>')+
    row(L('Category','श्रेणी'),'<dd>'+cats[P.cat]+'</dd>')+
    row(L('Course','कोर्स'),P.courses.length?'<dd>'+crNames(P,true)+'</dd>':un)+
    row(L('Marks','अंक'),P.m12!=null?'<dd>'+P.m12+'%</dd>':un)+
    row(L('Gender','लिंग'),P.gender&&P.gender!=='U'?'<dd>'+({F:L('Female','महिला'),M:L('Male','पुरुष'),O:L('Other','अन्य')}[P.gender])+'</dd>':un)+
    row(L('College type','कॉलेज'),P.quickInst?un:'<dd>'+({govt:L('Government or aided','सरकारी या सहायता प्राप्त'),private:L('Private','निजी'),qhei:L('Listed for PM-Vidyalaxmi','पीएम-विद्यालक्ष्मी सूची में'),unsure:L('Not sure','पता नहीं')}[P.inst])+'</dd>')+
    '</dl></div>';
}
function kindTabs(on,nSch){
  var coach=COACH.filter(function(c){return !c.st||(P&&P.states.indexOf(c.st)>=0)}).length, nf=P?PRIV.filter(function(s){return privFit(s,P)}).length:PRIV.length;
  var t=[['#schemes',L('Scholarships','छात्रवृत्तियाँ'),nSch],['#loan',L('Loans','ऋण'),null],['#work',L('Internships','इंटर्नशिप'),WORK.length+WORK_MORE.length],['#coaching',L('Coaching','कोचिंग'),coach],['#skills',L('Skills','कौशल'),SKILLS.length],['#private',L('Company and trust','कंपनी और ट्रस्ट'),nf]];
  return '<nav class="kinds" aria-label="'+L('Kinds of help','मदद के प्रकार')+'">'+t.map(function(x){return '<a href="'+x[0]+'"'+(x[0]===on?' class="on" aria-current="page"':'')+'>'+x[1]+(x[2]!=null?'<span>'+x[2]+'</span>':'')+'</a>'}).join('')+'</nav>';
}
function vSchemes(){
  var all=matchAll(P), likely=all.filter(function(m){return m.status==='likely'}), check=all.filter(function(m){return m.status==='check'});
  var fixed=0; likely.forEach(function(m){if(m.s.val!=null&&!m.s.once&&!m.s.warn) fixed+=m.s.val});
  var today=todayISO(), nOpen=all.filter(function(m){return schemeStatus(m.s,today).k==='open'}).length;
  var shown=all.filter(function(m){return filter==='all'||(filter==='open'?schemeStatus(m.s,today).k==='open':filter==='likely'?m.status==='likely':(filter==='C')===(m.s.lvl==='C'))});
  var rules=loanRules(P,400000), un=unknowns(P);
  var gs=P.states.filter(function(x){return GUIDES[x]});
  return '<div class="rlayout">'+
  '<aside class="rside" aria-label="'+L('Your answers','आपके जवाब')+'">'+answersCard()+
    (un.length?'<div class="sharpen"><b>'+L('Sharpen your list','सूची और सटीक करें')+'</b><span class="small">'+L(un.length+' more questions could confirm the schemes marked "Check".',un.length+' और सवाल "जाँचें" वाली योजनाओं की पुष्टि कर सकते हैं।')+'</span>'+
      '<div class="meter"><i style="width:'+Math.round(100*(11-un.length)/11)+'%"></i></div><button class="btn sm" data-a="more">'+L('Answer '+un.length+' more','और '+un.length+' जवाब दें')+'</button></div>':'')+
    '<div class="row aside-tools"><button class="btn ghost sm" data-a="print">'+L('Print','प्रिंट')+'</button><button class="btn ghost sm" data-a="ics">'+L('Add dates to calendar','तिथियाँ कैलेंडर में')+'</button><button class="btn ghost sm" data-a="jump" data-v="share">'+L('Share','साझा करें')+'</button></div>'+
  '</aside>'+
  '<div class="rmain">'+
    (isShared?'<div class="strip">'+L('Opened from a shared link. These are the answers saved by the person who sent it. ','साझा लिंक से खोला गया। ये उस व्यक्ति के जवाब हैं जिसने लिंक भेजा। ')+'<a href="#start" data-a="restart">'+L('Use your own answers','अपने जवाब दें')+'</a></div>':'')+
    (isExample?'<div class="strip">'+L('Example student, not real data. ','उदाहरण छात्र, असली डेटा नहीं। ')+'<a href="#start" data-a="restart">'+L('Use your own answers','अपने जवाब दें')+'</a></div>':'')+
    (P.adult===false&&P.consent!=='given'?'<div class="strip warn">'+L('Parental consent is still pending. This is allowed only during the beta.','माता-पिता की सहमति अभी बाक़ी है। यह केवल बीटा के दौरान मान्य है।')+'</div>':'')+
    '<section class="money"><div class="m1"><span class="lbl">'+(fixed?L('Likely scholarships with a fixed amount add up to','निश्चित राशि वाली संभावित छात्रवृत्तियाँ मिलाकर'):L('Scholarships that may fit you','आपके लिए संभावित छात्रवृत्तियाँ'))+'</span>'+
      '<span class="amt">'+(fixed?rs(fixed)+' <small>'+L('a year','प्रति वर्ष')+'</small>':all.length+' <small>'+L('schemes','योजनाएँ')+'</small>')+'</span>'+
      '<span class="note">'+L('Eligible does not mean awarded, and not every scheme can be held with another. ','पात्र होने का मतलब मिलना नहीं, और हर योजना दूसरी के साथ नहीं मिलती। ')+'<a href="#schemes" data-a="jump" data-v="best">'+L('See the best combination','सबसे अच्छा मेल देखें')+'</a></span></div>'+
      '<div class="m2"><div><b class="g">'+likely.length+'</b><span>'+L('likely','संभावित')+'</span></div><div><b class="y">'+check.length+'</b><span>'+L('to check','जाँचें')+'</span></div><div><b>'+nOpen+'</b><span>'+L('open now','अभी खुली')+'</span></div></div></section>'+
    (un.length?'<div class="sharpen only-m"><b>'+L('Sharpen your list','सूची और सटीक करें')+'</b><span class="small">'+L(un.length+' more questions could confirm the schemes marked "Check".',un.length+' और सवाल "जाँचें" वाली योजनाओं की पुष्टि कर सकते हैं।')+'</span><button class="btn sm" data-a="more">'+L('Answer '+un.length+' more','और '+un.length+' जवाब दें')+'</button></div>':'')+
    kindTabs('#schemes',all.length)+
    P.states.filter(function(x){return LOADED.indexOf(stateOf(x))<0}).map(function(x){var o=stateOf(x);
      return '<div class="strip warn">'+L('State schemes for '+o.n+' are not loaded yet. Central schemes and the loan guide still apply.',o.hi+' की राज्य योजनाएँ अभी नहीं जुड़ी हैं। केंद्रीय योजनाएँ और ऋण गाइड लागू हैं।')+'</div>'}).join('')+
    '<div class="row" role="group" aria-label="'+L('Filter','फ़िल्टर')+'">'+[['all',L('All','सभी')+' ('+all.length+')'],['likely',L('Likely for me','मेरे लिए संभावित')+' ('+likely.length+')'],['open',L('Open now','अभी खुली')+' ('+nOpen+')'],['C',L('Central','केंद्रीय')],['S',L('State','राज्य')]].map(function(f){return '<button class="chip'+(filter===f[0]?' on':'')+'" aria-pressed="'+(filter===f[0])+'" data-a="filter" data-v="'+f[0]+'">'+f[1]+'</button>'}).join('')+'</div>'+
    (shown.length?'<div class="grid">'+shown.map(schemeCard).join('')+'</div>':'<div class="card muted">'+L('No scheme in this group fits your answers. That can change each season, so check the official portal too.','इस समूह की कोई योजना आपके जवाबों से मेल नहीं खाती। यह हर सत्र बदल सकता है, इसलिए आधिकारिक पोर्टल भी देखें।')+'</div>')+
    (lang==='hi'?'<p class="small muted">हिन्दी बीटा: योजनाओं का विवरण अभी अंग्रेज़ी में है।</p>':'')+
    '<div id="best">'+bestCard(all)+'</div>'+
    instCard()+
    '<h2>'+L('Next steps','आगे क्या करें')+'</h2><div class="more4">'+
      (gs.length?'<a href="state/'+gs[0]+'.html#apply"><span class="ic">'+ico('list',22)+'</span><span>'+L('How to apply in '+stateOf(gs[0]).n,stateOf(gs[0]).hi+' में आवेदन कैसे करें')+'<small>'+L('Portal, papers and steps','पोर्टल, कागज़ और क़दम')+'</small></span></a>':'<a href="apply.html"><span class="ic">'+ico('list',22)+'</span><span>'+L('How to apply','आवेदन कैसे करें')+'<small>'+L('State by state','राज्यवार')+'</small></span></a>')+
      '<a href="#costs"><span class="ic dk">'+ico('wallet',22)+'</span><span>'+L('What your course will cost','आपके कोर्स का ख़र्च')+'<small>'+L('Fees, hostel, books, travel','फ़ीस, हॉस्टल, किताबें, यात्रा')+'</small></span></a>'+
      '<a href="#loan"><span class="ic lt">'+ico('bank',22)+'</span><span>'+L('Loan and interest subsidy','ऋण और ब्याज सब्सिडी')+'<small>'+(rules.csis?L('You may get the full subsidy','पूरी सब्सिडी मिल सकती है'):L('Rates and repayments','दरें और किस्तें'))+'</small></span></a>'+
      '<a href="#ready"><span class="ic">'+ico('clip',22)+'</span><span>'+L('Get your papers ready','कागज़ तैयार करें')+'<small>'+L('A checklist to tick off','टिक करने के लिए सूची')+'</small></span></a>'+
      '<a href="#help"><span class="ic dk">'+ico('help',22)+'</span><span>'+L('If you get stuck','अगर अटक जाएँ')+'<small>'+L('Helplines and what to say','हेल्पलाइन और क्या कहें')+'</small></span></a>'+
      '<a href="#fake"><span class="ic lt">'+ico('shield',22)+'</span><span>'+L('Spot a fake','नकली पहचानें')+'<small>'+L('Never pay to apply','आवेदन के लिए कभी पैसे न दें')+'</small></span></a>'+
    '</div>'+
    '<div id="share">'+shareCard(all.length)+'</div>'+
  '</div></div>';
}
function planChips(){
  if(P.courses.length<2) return '';
  return '<div class="row"><span class="small muted">Figures for:</span>'+P.courses.map(function(x){return '<button class="chip'+(x===P.course?' on':'')+'" data-a="plancourse" data-v="'+x+'">'+courseOf(x).n+'</button>'}).join('')+'</div>';
}
function numField(id,label,val,step){return '<div class="field"><label for="'+id+'">'+label+'</label><input id="'+id+'" data-f="num" type="number" inputmode="numeric" min="0" step="'+(step||1000)+'" value="'+val+'"></div>'}
function countedTotals(){
  var yearly=0, once=0, n=0;
  SCHEMES.forEach(function(s){ if(counted[s.id]&&s.val!=null&&matchScheme(s,P)){ n++; if(s.once) once+=s.val; else yearly+=s.val } });
  return {yearly:yearly,once:once,n:n,total:yearly*cost.years+once};
}
function costOut(){
  var t=costTotals(cost), sc=countedTotals(), gap=Math.max(0,t.total-sc.total), cov=Math.min(sc.total,t.total);
  var w=function(x){return t.total?(100*x/t.total).toFixed(1):0};
  return '<div class="receipt">'+
    '<div class="ln"><span>'+L('Tuition, ','ट्यूशन, ')+cost.years+L(' years',' वर्ष')+'</span><span>'+rs(t.tuition)+'</span></div>'+
    '<div class="ln"><span>'+L('Living, travel and books, ','रहना, यात्रा और किताबें, ')+cost.years+L(' years',' वर्ष')+'</span><span>'+rs(t.living)+'</span></div>'+
    '<div class="ln"><span>'+L('One-time costs','एक बार के ख़र्च')+'</span><span>'+rs(t.once)+'</span></div>'+
    '<div class="ln tot"><span>'+L('Whole degree','पूरी डिग्री')+'</span><span>'+rs(t.total)+'</span></div>'+
    '<div class="ln minus"><span>'+L('Scholarships you counted (','गिनी गई छात्रवृत्तियाँ (')+sc.n+')</span><span>− '+rs(cov)+'</span></div>'+
    '<div class="ln tot"><span>'+L('Gap to fund','शेष राशि')+'</span><span>'+rs(gap)+'</span></div></div>'+
    '<div style="margin-top:12px"><div class="bar" role="img" aria-label="'+L('Share of cost covered','ख़र्च का कितना हिस्सा पूरा')+'"><i style="width:'+w(cov)+'%;background:var(--good)"></i><i style="width:'+w(gap)+'%;background:var(--accent)"></i></div>'+
    '<div class="legend"><span><i style="background:var(--good)"></i>'+L('Covered by scholarships ','छात्रवृत्ति से पूरा ')+w(cov)+'%</span><span><i style="background:var(--accent)"></i>'+L('Gap ','शेष ')+w(gap)+'%</span></div></div>'+
    '<p class="small muted" style="margin-top:12px">'+L('First year alone: ','केवल पहला वर्ष: ')+rs(t.yearly+t.once)+L('. Colleges often quote only this figure.','। कॉलेज अक्सर केवल यही राशि बताते हैं।')+'</p>'+
    (sc.n===0?'<p class="small muted">'+L('Tick "Count in my plan" on a scheme to subtract it here.','यहाँ घटाने के लिए किसी योजना पर "गिनें" चुनें।')+'</p>':'')+
    '<div class="row"><a class="btn sm" href="#loan" data-a="useGap">'+L('Plan a loan for the gap','शेष राशि के लिए ऋण की योजना')+'</a><a class="btn ghost sm" href="#schemes">'+L('Back to schemes','योजनाओं पर वापस')+'</a></div>';
}
function vCosts(){
  return '<div class="stack"><h1>'+L('What the whole degree costs','पूरी डिग्री का ख़र्च')+'</h1>'+planChips()+
    '<div class="strip">'+L('The figures below are examples to get you started, not data about your college. Replace them with the amounts on your fee notice.','नीचे की राशियाँ केवल उदाहरण हैं, आपके कॉलेज का डेटा नहीं। इन्हें अपने फ़ीस नोटिस की राशियों से बदलें।')+'</div>'+
    '<h2>'+L('Each year','हर वर्ष')+'</h2><div class="fields">'+
    numField('c-years',L('Length of course (years)','कोर्स की अवधि (वर्ष)'),cost.years,1)+numField('c-tuition',L('Tuition and college fees','ट्यूशन और कॉलेज फ़ीस'),cost.tuition)+
    numField('c-hostel',L('Hostel or rent','हॉस्टल या किराया'),cost.hostel)+numField('c-food',L('Food','भोजन'),cost.food)+
    numField('c-travel',L('Travel','यात्रा'),cost.travel)+numField('c-books',L('Books and supplies','किताबें और सामग्री'),cost.books)+'</div>'+
    '<h2>'+L('One time','एक बार')+'</h2><div class="fields">'+
    numField('c-device',L('Phone or laptop','फ़ोन या लैपटॉप'),cost.device)+numField('c-exams',L('Entrance exam and counselling fees','प्रवेश परीक्षा और काउंसलिंग फ़ीस'),cost.exams)+
    numField('c-coaching',L('Coaching','कोचिंग'),cost.coaching)+'</div>'+
    '<p class="small muted">'+L('Coaching starts at ₹6,384, the national average a family spends per higher secondary student in a year (','कोचिंग ₹6,384 से शुरू है, जो उच्चतर माध्यमिक के प्रति छात्र पर परिवार का राष्ट्रीय औसत वार्षिक ख़र्च है (')+'<a href="'+SRC.cms+'" target="_blank" rel="noopener">CMS: Education 2025</a>).</p>'+
    '<h2>'+L('Your total','आपका कुल ख़र्च')+'</h2><div id="out">'+costOut()+'</div></div>';
}
function ruleRow(ok,title,body,src){
  var col=ok===true?'good':ok===false?'bad':'warn', mark=ok===true?'✓':ok===false?'✕':ok==='na'?'–':'?';
  return '<div class="rule"><span class="tick" style="background:var(--'+col+'-bg);color:var(--'+col+')" aria-hidden="true">'+mark+'</span><div><b>'+title+'</b><div class="small muted">'+body+(src?' <a href="'+src+'" target="_blank" rel="noopener">'+L('Source','स्रोत')+'</a>':'')+'</div></div></div>';
}
function loanOut(){
  var R=loanRules(P,loan.amt), sim=simulate(loan.amt,loan.rate,cost.years,loan.tenure,R.mode), plain=simulate(loan.amt,loan.rate,cost.years,loan.tenure,'none');
  var li=light(sim.emi,loan.salary), sc=countedTotals();
  var lightText={good:L('Looks manageable','संभालने लायक़ लगता है'),warn:L('Tight. Think about borrowing less.','तंग है। कम ऋण लेने पर विचार करें।'),bad:L('Too high for this salary','इस वेतन के लिए बहुत अधिक')}[li.k];
  var late=Math.max(0,loan.months-12);
  var rules='<div class="card stack">'+
    ruleRow(R.rbi,L('No collateral','कोई गिरवी नहीं'),R.rbi?L('Your loan is ₹4 lakh or less, so the bank must not insist on collateral.','आपका ऋण ₹4 लाख या कम है, इसलिए बैंक गिरवी पर ज़ोर नहीं दे सकता।'):L('This RBI rule covers loans up to ₹4 lakh only.','RBI का यह नियम केवल ₹4 लाख तक के ऋण पर है।'),SRC.ls)+
    ruleRow(R.model?null:(R.qhei?true:false),L('No collateral or guarantor up to ₹7.5 lakh','₹7.5 लाख तक कोई गिरवी या गारंटर नहीं'),
      R.model?L('Applies only if the bank finds your loan eligible for the interest subsidy or the credit guarantee fund. Ask the bank to confirm in writing.','तभी लागू जब बैंक आपके ऋण को ब्याज सब्सिडी या क्रेडिट गारंटी फ़ंड के लिए पात्र माने। बैंक से लिखित पुष्टि माँगें।'):
      R.qhei?L('Above ₹7.5 lakh, but PM-Vidyalaxmi loans to listed institutions need no collateral or guarantor at any size.','₹7.5 लाख से ऊपर, पर सूचीबद्ध संस्थानों के लिए पीएम-विद्यालक्ष्मी ऋण में किसी भी राशि पर गिरवी या गारंटर नहीं चाहिए।'):
      L('Above ₹7.5 lakh the bank may ask for collateral, unless your institution is on the PM-Vidyalaxmi list.','₹7.5 लाख से ऊपर बैंक गिरवी माँग सकता है, जब तक आपका संस्थान पीएम-विद्यालक्ष्मी सूची में न हो।'),SRC.ls)+
    ruleRow(R.csis?null:false,L('Full interest paid during your studies (PM-USP CSIS)','पढ़ाई के दौरान पूरा ब्याज सरकार देगी (PM-USP CSIS)'),
      R.csis?L('Your income and course fit. Your institution must also be accredited or regulator-approved. Covers interest on up to ₹10 lakh until one year after the course.','आपकी आय और कोर्स अनुरूप हैं। संस्थान भी मान्यता प्राप्त होना चाहिए। कोर्स के एक वर्ष बाद तक ₹10 लाख तक के ब्याज पर लागू।'):
      L('Needs family income up to ₹4.5 lakh and a technical or professional course.','इसके लिए पारिवारिक आय ₹4.5 लाख तक और तकनीकी या व्यावसायिक कोर्स चाहिए।'),SRC.pib)+
    ruleRow(R.csis?'na':R.pmvSub?(R.qhei?true:null):false,L('3% interest subsidy (PM-Vidyalaxmi)','3% ब्याज सब्सिडी (पीएम-विद्यालक्ष्मी)'),
      R.csis?L('Not needed: the full subsidy above is better and you cannot hold both.','ज़रूरत नहीं: ऊपर की पूर्ण सब्सिडी बेहतर है और दोनों साथ नहीं मिलतीं।'):
      R.pmvSub?L('For merit admission to one of 1,425 listed institutions, income up to ₹8 lakh. Limited to one lakh students a year.','1,425 सूचीबद्ध संस्थानों में मेरिट प्रवेश और ₹8 लाख तक आय पर। हर वर्ष एक लाख छात्रों तक सीमित।')+(R.maybeQ?L(' You said you are not sure of your institution yet.',' आपने कहा कि संस्थान अभी तय नहीं है।'):''):
      L('Needs a listed institution and family income up to ₹8 lakh.','इसके लिए सूचीबद्ध संस्थान और ₹8 लाख तक पारिवारिक आय चाहिए।'),SRC.pib)+'</div>';
  var conflict=(R.mode!=='none'&&sc.n>0)?'<div class="strip bad"><b>'+L('You cannot hold both. ','दोनों साथ नहीं मिल सकते। ')+'</b>'+
    L('A student who receives another government scholarship or fee reimbursement loses the interest subsidy. Over your course the subsidy is worth about ','जो छात्र कोई और सरकारी छात्रवृत्ति या फ़ीस प्रतिपूर्ति लेता है, उसे ब्याज सब्सिडी नहीं मिलती। आपके कोर्स में सब्सिडी का मूल्य लगभग ')+
    '<b>'+rs(sim.subsidy)+'</b>'+L(' and the scholarships you counted about ',' और गिनी गई छात्रवृत्तियों का लगभग ')+'<b>'+rs(sc.total)+'</b>'+L('. Take the larger one.',' है। जो बड़ा हो वही लें।')+' <a href="'+SRC.pib+'" target="_blank" rel="noopener">'+L('Source','स्रोत')+'</a></div>':'';
  return rules+conflict+
    '<h2>'+L('What you would repay','आपको कितना चुकाना होगा')+'</h2>'+
    '<div class="receipt">'+
    '<div class="ln"><span>'+L('You borrow','आप उधार लेते हैं')+'</span><span>'+rs(loan.amt)+'</span></div>'+
    '<div class="ln"><span>'+L('Interest that builds up while you study','पढ़ाई के दौरान जुड़ने वाला ब्याज')+'</span><span>'+rs(sim.interest)+'</span></div>'+
    '<div class="ln minus"><span>'+L('Paid by the government','सरकार द्वारा चुकाया गया')+'</span><span>− '+rs(sim.subsidy)+'</span></div>'+
    '<div class="ln tot"><span>'+L('You owe when repayment starts','चुकौती शुरू होने पर बक़ाया')+'</span><span>'+rs(sim.owed)+'</span></div>'+
    '<div class="ln"><span>'+L('Monthly payment (EMI) for ','मासिक किस्त (EMI), ')+loan.tenure+L(' years',' वर्ष')+'</span><span>'+rs(sim.emi)+'</span></div>'+
    '<div class="ln"><span>'+L('Total you repay','कुल चुकौती')+'</span><span>'+rs(sim.total)+'</span></div></div>'+
    '<div class="card light" style="margin-top:12px"><span class="dot" style="background:var(--'+li.k+')" aria-hidden="true"></span><div><b>'+lightText+'</b>'+
    '<div class="small muted">'+(li.pct==null?L('Enter an expected salary to see this.','यह देखने के लिए अनुमानित वेतन लिखें।'):L('The EMI is ','EMI आपके अनुमानित मासिक वेतन का ')+Math.round(li.pct*100)+L('% of the monthly salary you expect. This tool treats under 20% as manageable and 35% or more as too high. That is a rule of thumb, not a bank rule.','% है। यह टूल 20% से कम को ठीक और 35% या अधिक को बहुत ज़्यादा मानता है। यह एक मोटा नियम है, बैंक का नियम नहीं।'))+'</div></div></div>'+
    '<div class="card" style="margin-top:12px"><b>'+L('What if I take longer to find a job?','अगर नौकरी मिलने में देर हो तो?')+'</b><p class="small" style="margin:6px 0 0">'+
    (late===0?L('Repayment starts one year after your course ends. If you find work within ','चुकौती कोर्स ख़त्म होने के एक वर्ष बाद शुरू होती है। अगर ')+loan.months+L(' months, your first EMI falls after your first salary.',' महीनों में काम मिल जाए, तो पहली EMI पहले वेतन के बाद आएगी।'):
    L('Repayment starts one year after your course ends. If it takes ','चुकौती कोर्स ख़त्म होने के एक वर्ष बाद शुरू होती है। अगर ')+loan.months+L(' months to find work, ',' महीने लगें, तो ')+'<b>'+late+L(' EMIs worth ',' EMI, कुल ')+rs(late*sim.emi)+'</b>'+L(' fall due before your first salary. Someone in your family would need to pay them.',' पहले वेतन से पहले देनी होंगी। इन्हें परिवार में किसी को चुकाना होगा।'))+'</p></div>'+
    (R.mode!=='none'?'<p class="small muted" style="margin-top:12px">'+L('Without the subsidy you would owe ','सब्सिडी के बिना बक़ाया होता ')+rs(plain.owed)+L(' and pay ',' और EMI ')+rs(plain.emi)+L(' a month.',' प्रति माह।')+'</p>':'')+
    '<p class="small muted">'+L('How this is worked out: the loan is drawn in equal parts each year, simple interest runs until one year after the course, and the EMI uses the standard reducing-balance formula. Your bank\'s terms will differ.','गणना का तरीक़ा: ऋण हर वर्ष बराबर हिस्सों में लिया जाता है, कोर्स के एक वर्ष बाद तक साधारण ब्याज चलता है, और EMI घटते-शेष के मानक सूत्र से निकलती है। आपके बैंक की शर्तें अलग होंगी।')+'</p>';
}
function vLoan(){
  var noHE=loanRules(P,loan.amt).noHE?'<div class="strip warn">'+L('The central interest subsidies (PM-USP CSIS and PM-Vidyalaxmi) are for college and university courses, so they are not counted here. Banks rarely lend for Class 11, 12 or ITI fees; ask about state schemes and the scholarships in your results first.','केंद्र की ब्याज सब्सिडी (PM-USP CSIS और PM-विद्यालक्ष्मी) कॉलेज और विश्वविद्यालय के कोर्स के लिए है, इसलिए यहाँ नहीं गिनी गई।')+'</div>':'';
  return '<div class="stack"><h1>'+L('Borrowing: your rights and your repayments','ऋण: आपके अधिकार और आपकी चुकौती')+'</h1>'+noHE+planChips()+
    '<div class="fields">'+numField('l-amt',L('Loan amount','ऋण राशि'),loan.amt,10000)+numField('l-rate',L('Interest rate (% a year)','ब्याज दर (% प्रति वर्ष)'),loan.rate,0.25)+
    numField('l-tenure',L('Years to repay (up to 15)','चुकाने के वर्ष (15 तक)'),loan.tenure,1)+numField('l-salary',L('Monthly salary you expect','अनुमानित मासिक वेतन'),loan.salary)+
    numField('l-months',L('Months to find a job after the course','कोर्स के बाद नौकरी मिलने में महीने'),loan.months,1)+'</div>'+
    '<div class="strip">'+L('The 9.5% rate and ₹25,000 salary are placeholders, not data. Ask your bank for its rate and use placement figures from your own college.','9.5% दर और ₹25,000 वेतन केवल उदाहरण हैं, डेटा नहीं। अपने बैंक से दर पूछें और अपने कॉलेज के प्लेसमेंट आँकड़े इस्तेमाल करें।')+'</div>'+
    '<h2>'+L('Rules that apply to you','आप पर लागू नियम')+'</h2><div id="out">'+loanOut()+'</div>'+loansHtml()+'</div>';
}
function docList(prof){
  var all=matchAll(prof), anyCap=all.some(function(m){return m.s.cap!=null}), anyCat=all.some(function(m){return m.s.cats}), anyState=all.some(function(m){return m.s.st});
  var d=[['aadhaar',L('Aadhaar card','आधार कार्ड'),L('Needed to register on the National Scholarship Portal and most state portals.','राष्ट्रीय छात्रवृत्ति पोर्टल और अधिकांश राज्य पोर्टलों पर पंजीकरण के लिए ज़रूरी।')],
   ['bank',L('Bank account in your name, linked to Aadhaar','आपके नाम का बैंक खाता, आधार से जुड़ा'),L('Scholarships are paid by direct benefit transfer into this account.','छात्रवृत्ति इसी खाते में सीधे भेजी जाती है।')],
   ['otr',L('One-Time Registration (OTR) number on the National Scholarship Portal','राष्ट्रीय छात्रवृत्ति पोर्टल पर वन-टाइम रजिस्ट्रेशन (OTR) नंबर'),L('Some state schemes ask for this before you can apply on the state portal.','कुछ राज्य योजनाओं में राज्य पोर्टल पर आवेदन से पहले यह चाहिए।')],
   ['marks',L('Class 10 and Class 12 marksheets','कक्षा 10 और 12 की अंकतालिकाएँ'),''],
   ['bonafide',L('Bonafide or admission certificate from your college','कॉलेज का बोनाफ़ाइड या प्रवेश प्रमाण पत्र'),''],
   ['fee',L('Fee receipt for this academic year','इस शैक्षणिक वर्ष की फ़ीस रसीद'),''],
   ['photo',L('Passport-size photograph','पासपोर्ट आकार का फ़ोटो'),'']];
  if(anyCap) d.push(['income',L('Income certificate','आय प्रमाण पत्र'),L('Issued by your tehsil or revenue office, or through your state\'s citizen service portal. Check its date: most schemes want a recent one.','तहसील या राजस्व कार्यालय से, या राज्य के नागरिक सेवा पोर्टल से मिलता है। तारीख़ देखें: ज़्यादातर योजनाओं में हाल का प्रमाण पत्र चाहिए।')]);
  if(anyCat&&prof.cat!=='GEN'&&prof.cat!=='NA') d.push(['caste',L('Caste or category certificate','जाति या श्रेणी प्रमाण पत्र'),L('From the same office as the income certificate.','उसी कार्यालय से जहाँ से आय प्रमाण पत्र मिलता है।')]);
  if(anyState) d.push(['domicile',L('Domicile or residence certificate','अधिवास या निवास प्रमाण पत्र'),L('State schemes are for students whose home state it is.','राज्य योजनाएँ उसी राज्य के मूल निवासी छात्रों के लिए हैं।')]);
  if(prof.dis) d.push(['dis',L('Disability certificate (40% or more)','विकलांगता प्रमाण पत्र (40% या अधिक)'),'']);
  return d;
}
function vReady(){
  var d=docList(P), done=d.filter(function(x){return docs[x[0]]}).length, st=stateOf(P.state), ev=calendarEvents(matchAll(P),todayISO());
  return '<div class="stack"><h1>'+L('Get your papers ready','अपने काग़ज़ात तैयार करें')+'</h1>'+
    '<p class="muted">'+L('Many applications fail on paperwork. This list is built from the schemes that fit your answers.','कई आवेदन काग़ज़ात की वजह से रुक जाते हैं। यह सूची आपके जवाबों से मेल खाती योजनाओं से बनी है।')+'</p>'+
    '<div class="row"><span class="pill '+(done===d.length?'good':'plain')+'" id="doccount">'+done+' / '+d.length+L(' ready',' तैयार')+'</span></div>'+
    '<div class="card">'+d.map(function(x){return '<label class="check"><input type="checkbox" data-f="doc" data-id="'+x[0]+'"'+(docs[x[0]]?' checked':'')+'><span><b>'+x[1]+'</b>'+(x[2]?'<span class="small muted" style="display:block">'+x[2]+'</span>':'')+'</span></label>'}).join('')+'</div>'+
    '<p class="small muted">'+L('Processing times differ by state and are not collected in the beta. Ask the issuing office.','प्रक्रिया का समय हर राज्य में अलग है और बीटा में शामिल नहीं है। जारी करने वाले कार्यालय से पूछें।')+'</p>'+
    '<div><a class="btn sm" href="#sheets">Print or save as PDF</a></div>'+
    '<h2>Dates for your calendar</h2><div class="card stack">'+(ev.length?'<ul class="why" style="margin:0">'+ev.map(function(e){return '<li><b>'+fmtDate(e.date)+'</b>: '+e.title+'</li>'}).join('')+'</ul>'+
      '<div><button class="btn sm" data-a="ics">Add these dates to my calendar</button></div>'+
      '<p class="small muted" style="margin:0">Downloads a calendar file your phone or computer can open. Entries that begin with "Check" are reminders worked out from the 2026-27 windows, not announced dates. No phone number is stored.</p>'
      :'<p class="muted" style="margin:0">None of the schemes that fit your answers has a published date in the beta yet.</p>')+'</div>'+
    '<h2>'+L('Where to apply','कहाँ आवेदन करें')+'</h2><div class="card stack">'+
    '<div><b>'+L('National Scholarship Portal','राष्ट्रीय छात्रवृत्ति पोर्टल')+'</b><div class="small"><a href="'+SRC.nsp+'" target="_blank" rel="noopener">scholarships.gov.in</a></div></div>'+
    P.states.map(function(x){ var o=stateOf(x); return '<div><b>'+L(o.n,o.hi)+'</b><div class="small">'+(o.portal?'<a href="'+o.portal+'" target="_blank" rel="noopener">'+o.portal.replace('https://','').replace(/\/$/,'')+'</a>':'Official portal not confirmed yet. <a href="'+o.src+'" target="_blank" rel="noopener">See the source</a>')+'</div></div>' }).join('')+'</div>'+
    '<h2>'+L('About this beta','इस बीटा के बारे में')+'</h2><div class="card stack small">'+
    '<div><b>Version 2, review copy.</b> '+(('serviceWorker' in navigator)&&navigator.serviceWorker.controller?'Saved on this device: it will open without a connection.':'After one visit on the live site it opens without a connection.')+'</div>'+
    '<div><b>'+L('Last checked: ','पिछली जाँच: ')+'</b>'+CHECKED+'</div>'+
    '<div><b>'+L('Central schemes and loan rules','केंद्रीय योजनाएँ और ऋण नियम')+'</b><br><a href="'+SRC.slots+'" target="_blank" rel="noopener">Careers360, 17 October 2026</a> · <a href="'+SRC.pib+'" target="_blank" rel="noopener">PIB, July 2026</a> · <a href="'+SRC.ls+'" target="_blank" rel="noopener">Lok Sabha Q.4063</a> · <a href="'+SRC.bt+'" target="_blank" rel="noopener">Business Today</a></div>'+
    '<div><b>'+L('State schemes','राज्य योजनाएँ')+'</b><br>'+L('Checked against official government pages on '+CHECKED+'. '+VCOUNT.ok+' of '+VCOUNT.all+' are confirmed there and link to the official page. The others come from Buddy4Study state pages, a secondary source, because their portals refuse automated reading. Those must be confirmed by hand before public launch.',CHECKED+' को आधिकारिक सरकारी पृष्ठों से जाँचा गया। '+VCOUNT.all+' में से '+VCOUNT.ok+' वहाँ पुष्ट हैं और आधिकारिक पृष्ठ से जुड़ी हैं। बाकी Buddy4Study के राज्य पृष्ठों से हैं, जो द्वितीयक स्रोत है, क्योंकि उनके पोर्टल स्वचालित पढ़ाई नहीं होने देते। सार्वजनिक लॉन्च से पहले इन्हें हाथ से पुष्ट करना ज़रूरी है।')+'</div>'+
    '<div><b>'+L('Course list','कोर्स सूची')+'</b><br><a href="'+SRC.aishe+'" target="_blank" rel="noopener">AISHE 2023-24</a></div>'+
    '<div><b>'+L('Not in the beta','बीटा में नहीं')+'</b><br>'+L('The rights cards, the pathway comparison and the study abroad module. Company and trust scholarships are listed separately and only partly checked.','अधिकार कार्ड, रास्तों की तुलना और विदेश में पढ़ाई का मॉड्यूल। कंपनी और ट्रस्ट की छात्रवृत्तियाँ अलग पृष्ठ पर हैं और आंशिक रूप से जाँची गई हैं।')+'</div>'+
    '<div><b>'+L('Privacy','निजता')+'</b><br>'+L('Nothing you enter leaves this device unless you send someone a share link, and it is cleared when you close the page. No Aadhaar number is asked for or stored. ','जब तक आप किसी को साझा लिंक न भेजें, आपकी कोई जानकारी इस डिवाइस से बाहर नहीं जाती, और पेज बंद करते ही मिट जाती है। आधार नंबर न माँगा जाता है, न रखा जाता है। ')+
      (P.adult===false?L('Parental consent: ','माता-पिता की सहमति: ')+(P.consent==='given'?L('given on this device, not verified.','इस डिवाइस पर दी गई, सत्यापित नहीं।'):L('pending.','बाक़ी।')):'')+' <a href="'+SRC.dpdp+'" target="_blank" rel="noopener">'+L('About the consent rule','सहमति नियम के बारे में')+'</a></div></div></div>';
}
function sheetHtml(label,prof){
  var all=matchAll(prof), st=stateOf(prof.state), c=courseOf(prof.course);
  var rows=all.map(function(m){ var x=m.s, xs=x.st?stateOf(x.st):null, portal=x.portal||(xs&&xs.portal)||'';
    return '<tr><td>'+(m.status==='likely'?'Likely':'Check')+'</td><td><b>'+x.name+'</b>'+(m.notes.length?'<div class="small">'+m.notes.join(' ')+'</div>':'')+'</td><td>'+x.benefit+(x.warn?' <b>Warning:</b> '+x.warn:'')+'</td><td class="small">'+(portal?portal.replace('https://','').replace(/\/$/,''):'Portal not confirmed')+'</td></tr>' }).join('');
  return '<section class="sheet"><div class="row" style="justify-content:space-between"><h2 style="margin:0">'+esc(label)+'</h2><span class="small muted">Scholarship Navigator, '+CHECKED+'</span></div>'+
    '<p class="small" style="margin:6px 0">'+[stNames(prof),INC[prof.inc].n,catName(prof.cat),crNames(prof),prof.m12+'% in Class 12'].join(' · ')+'</p>'+
    (prof.instName?'<p class="small" style="margin:6px 0">Institution: '+esc(prof.instName)+((prof.instRecog||[]).length?' ('+esc(prof.instRecog.join('; '))+')':' (nothing on record)')+'</p>':'')+
    (all.length?'<table class="tbl"><thead><tr><th>Status</th><th>Scheme</th><th>What it gives</th><th>Where to apply</th></tr></thead><tbody>'+rows+'</tbody></table>':'<p>No scheme in the beta fits these answers. Check the official portals.</p>')+
    '<h3 style="margin-top:14px">Papers to get ready</h3><ul class="boxes">'+docList(prof).map(function(d){return '<li>'+d[1]+'</li>'}).join('')+'</ul>'+
    '<p class="small muted">Eligible does not mean awarded. Scheme details were last checked on '+CHECKED+'. Confirm each one on its official portal before applying. To reopen this plan: '+shareUrlFor(prof)+'</p></section>';
}
function vSheets(){
  var list=(classMode&&roster.length)?roster:(P?[{label:'My plan',P:P}]:[]);
  return '<div class="stack"><div class="noprint stack"><h1>'+(list.length>1?list.length+' sheets, one page each':'Your plan on one page')+'</h1>'+
    '<p class="muted">Press Print, then choose "Save as PDF" in the print window to keep a file.</p>'+
    '<div class="row"><button class="btn" data-a="print">Print</button><a class="btn ghost" href="'+(classMode?'#class':'#ready')+'">Back</a></div></div>'+
    list.map(function(x){return sheetHtml(x.label,x.P)}).join('')+'</div>';
}
function vClass(){
  return '<div class="stack"><span class="pill plain">Counsellor mode</span><h1>Your students</h1>'+
    '<p class="muted">Run through the questions once for each student, then print one sheet per student.</p>'+
    (roster.length?'<div class="card">'+roster.map(function(x,i){ var n=matchAll(x.P).length; return '<div class="check"><span style="flex:1"><b>'+esc(x.label)+'</b><span class="small muted" style="display:block">'+stNames(x.P)+' · '+crNames(x.P)+' · '+n+' scheme'+(n===1?'':'s')+' fit</span></span>'+
      '<button class="btn ghost sm" data-a="openstudent" data-i="'+i+'">Open</button><button class="btn ghost sm" data-a="rmstudent" data-i="'+i+'">Remove</button></div>' }).join('')+'</div>':'<div class="card muted">No students yet.</div>')+
    '<div class="row"><button class="btn" data-a="addstudent">Add a student</button>'+(roster.length?'<a class="btn ghost" href="#sheets">Print all sheets</a>':'')+'<button class="btn ghost" data-a="leaveclass">Leave counsellor mode</button></div>'+
    '<label class="row small"><input type="checkbox" data-f="keeproster"'+(keepRoster?' checked':'')+'> Keep this list on this device after I close the page</label>'+
    '<div class="strip">The list holds students\' names and answers, including income and category. It is kept in this browser only and is never sent to the server. Leave the box above unticked on a shared computer.</div></div>';
}
function vHelp(){
  var li=function(a){return '<ol class="steps">'+a.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ol>'};
  return '<div class="stack"><h1>If your application is rejected or delayed</h1>'+
    '<p class="muted">You are entitled to a reason and to a route for complaint. Keep your application number and every reply.</p>'+
    '<h2>A scholarship is rejected, stuck or not paid</h2><div class="card">'+li([
      '<b>Read the reason on the portal.</b> Log in and open your application status. A "defective" application can usually be corrected and resubmitted; a "rejected" one cannot.',
      '<b>Go to your college scholarship desk.</b> The Institute Nodal Officer verifies every application first, and many delays sit there. Take your application number and a printout.',
      '<b>Call or write to the National Scholarship Portal helpdesk.</b> 0120-6619540, 8 am to 8 pm except government holidays, or helpdesk@nsp.gov.in.',
      '<b>For a state scheme, use the grievance section of the state portal.</b>',
      '<b>Still unresolved? File a grievance on CPGRAMS</b>, the central government grievance system, at <a href="https://pgportal.gov.in/" target="_blank" rel="noopener">pgportal.gov.in</a>.',
      '<b>Ask in writing under the Right to Information Act</b> for the status of your application and the recorded reason.'])+'</div>'+
    '<h2>An education loan is refused or delayed</h2><div class="card">'+li([
      '<b>Ask the branch for the reason in writing.</b>',
      '<b>Complain in writing to the bank\'s grievance or nodal officer.</b> Keep a copy and the acknowledgement.',
      '<b>After 30 days without a satisfactory reply, go to the RBI Ombudsman.</b> It is free. File at <a href="https://cms.rbi.org.in/" target="_blank" rel="noopener">cms.rbi.org.in</a>, email crpc@rbi.org.in, or call 14448.',
      '<b>Quote the rules that protect you.</b> They are listed with sources in the <a href="#loan">loan guide</a>: no collateral up to ₹4 lakh, and no collateral or guarantor up to ₹7.5 lakh for loans that qualify for the government schemes.'])+'</div>'+
    '<p class="small muted">Contact details were checked on '+CHECKED+' from published guides and RBI\'s education loan FAQ, not from each office directly. Sources: <a href="https://website.rbi.org.in/documents/d/rbi/education-loan" target="_blank" rel="noopener">RBI education loan FAQ</a> · <a href="https://www.indiascholarships.in/guides/how-to-file-scholarship-grievance-online" target="_blank" rel="noopener">scholarship grievance guide</a> · <a href="'+SRC.nsp+'" target="_blank" rel="noopener">National Scholarship Portal</a></p></div>';
}
function saveRoster(){ try{ if(keepRoster) localStorage.setItem('sn_roster',JSON.stringify(roster)); else localStorage.removeItem('sn_roster') }catch(e){} }
/* ---- "Our data": what was checked, what is missing. Written for students, parents and counsellors. ---- */
var DATA_SITES={"AN":[["collegeadmission.andamannicobar.gov.in","read"],["scholarships.gov.in","partial"]],"AP":[["apdascac.ap.gov.in","read"],["jnanabhumi.ap.gov.in","partial"]],"AR":[["apdhte.nic.in","read"]],"AS":[["directorwptbc.assam.gov.in","partial"],["ssa.assam.gov.in","read"],["ttwd.assam.gov.in","read"]],"BR":[["bvm.bihar.gov.in","read"],["medhasoft.bih.nic.in","refused"],["pmsonline.bihar.gov.in","refused"],["serviceonline.bihar.gov.in","refused"],["state.bihar.gov.in","partial"]],"CG":[["postmatric-scholarship.cg.nic.in","refused"]],"CH":[["chdeducation.gov.in","partial"]],"DL":[["dsfdc.delhi.gov.in","read"],["scstwelfare.delhi.gov.in","read"],["delhi.gov.in","error"]],"DN":[["cdnbbsr.s3waas.gov.in","read"],["ddd.gov.in","partial"]],"GA":[["dhe.goa.gov.in","read"],["gedc.goa.gov.in","read"],["goa.gov.in","read"]],"GJ":[["digitalgujarat.gov.in","refused"],["gasc.gujarat.gov.in","refused"],["gssp.gujarat.gov.in","refused"],["mysy.guj.nic.in","read"]],"HP":[["education.hp.gov.in","partial"],["himachalpr.gov.in","refused"],["hpepass.cgg.gov.in","refused"],["hphamirpur.nic.in","refused"]],"HR":[["harchhatravratti.highereduhry.ac.in","read"],["haryanascholarship.gov.in","refused"],["sewa.haryana.gov.in","read"]],"JH":[["ekalyan.jharkhand.gov.in","refused"],["jaac.nic.in","refused"]],"JK":[["jkdswdj.jk.gov.in","refused"],["jkscholarships.gov.in","refused"],["jksocialwelfare.nic.in","refused"]],"KA":[["bcwd.karnataka.gov.in","refused"],["ssp.karnataka.gov.in","refused"],["sw.karnataka.gov.in","refused"]],"KL":[["bcdd.kerala.gov.in","partial"],["ksdcscst.kerala.gov.in","read"],["kshec.kerala.gov.in","read"],["scholarship.kshec.kerala.gov.in","partial"]],"LA":[["cdnbbsr.s3waas.gov.in","read"],["highereducation.ladakh.gov.in","read"],["ladakh.gov.in","read"]],"LD":[["lakshadweep.gov.in","read"]],"MH":[["mahadbt.maharashtra.gov.in","read"],["mahadbt2.maharashtra.gov.in","refused"]],"ML":[["megeducation.gov.in","read"]],"MN":[["manipureducation.gov.in","read"],["scholarships.gov.in","read"]],"MP":[["cmhelpline.mp.gov.in","read"],["datia.nic.in","unreadable"],["dhar.nic.in","read"],["hescholarship.mp.gov.in","refused"],["khargone.nic.in","refused"],["scdevelopmentmp.nic.in","refused"],["scholarshipportal.mp.nic.in","partial"],["socialjustice.nic.in","refused"]],"MZ":[["mizoramdata.mizoram.gov.in","refused"],["msb.mizoram.gov.in","partial"],["scholarships.mizoram.gov.in","refused"]],"NL":[["dte.nagaland.gov.in","read"],["highereducation.nagaland.gov.in","read"],["ipr.nagaland.gov.in","read"],["scholarship.nagaland.gov.in","read"]],"OD":[["dhe.odisha.gov.in","read"],["medhabruti.odisha.gov.in","refused"],["stsc.odisha.gov.in","read"]],"PB":[["cdnbbsr.s3waas.gov.in","read"],["dte.punjab.gov.in","refused"],["pbhe.punjab.gov.in","refused"],["punjab.gov.in","refused"],["punjabscholarships.gov.in","refused"],["scholarships.punjab.gov.in","refused"]],"PY":[["dhte.py.gov.in","partial"],["styandptg.py.gov.in","read"]],"RJ":[["department.rajasthan.gov.in","refused"],["dipr.rajasthan.gov.in","refused"],["hte.rajasthan.gov.in","refused"],["sje.rajasthan.gov.in","refused"],["sjmsnew.rajasthan.gov.in","refused"]],"SK":[["education.sikkim.gov.in","read"],["services.india.gov.in","read"],["sikkim.gov.in","read"],["sikkimhrdd.org","read"]],"TG":[["telanganaepass.cgg.gov.in","partial"]],"TN":[["bcmbcmw.tn.gov.in","partial"],["tnadw.tn.gov.in","refused"],["tntribalwelfare.tn.gov.in","read"]],"TR":[["highereducation.tripura.gov.in","read"],["twd.tripura.gov.in","read"]],"UK":[["he.uk.gov.in","partial"],["minoritywelfare.uk.gov.in","error"],["samajkalyan.uk.gov.in","refused"],["scholarship.uk.gov.in","refused"]],"UP":[["auraiya.nic.in","read"],["backwardwelfareup.gov.in","refused"],["samajkalyan.up.gov.in","refused"],["scholarship.up.gov.in","refused"],["scholarship.up.nic.in","refused"],["sw.up.gov.in","refused"]],"WB":[["oasis.gov.in","read"],["oasis.wb.gov.in","read"],["purulia.gov.in","read"],["svmcm.wbhed.gov.in","read"],["wbmdfcscholarship.in","read"],["wbsche.wb.gov.in","read"]]};
var DATA_HELD={"AN":[["Scheme for Grant of Additional Scholarship to the Students Belonging to Scheduled Tribes of Andaman and Nicobar Islands","n"]],"AP":[["Ambedkar Overseas Vidya Nidhi Scheme","x"]],"AR":[["Arunachal Pradesh Scholarship for Academic Excellence Scheme","x"],["Golden Jubilee Merit Award","o"],["Financial Assistance to the Arunachal Pradesh Scheduled Tribe Youth for pursuing and obtaining Commercial Pilot Licence","x"]],"AS":[["Post-Matric Scholarship for Tea Tribes","w"],["Simon Sing Horo Special Post-Matric Scholarship for Tea Tribes","w"],["Mukhya Mantrir Nijut Moina Aasoni","n"]],"CH":[["Free Education to Meritorious SC and OBC Students","a"],["Chandigarh (U.T.) State Merit Scholarship","o"],["Scholarships for students of non-Hindi-speaking states studying in Hindi (Chandigarh Administration)","o"],["Fee concessions in Chandigarh Administration colleges (general, sibling, blind students)","o"]],"DL":[["Dr. B.R. Ambedkar State Topper Award","o"],["Financial Assistance to SC Students for Higher Studies Abroad","x"],["Education Loan Scheme (Delhi SC/ST/OBC/Minority/PwD Finance & Development Corporation)","o"]],"DN":[["Saraswati Vidya Yojana: Reimbursement of Fees for Diploma/Graduation and Post-Graduation Professional Courses","o"],["Saraswati Vidya Yojana: Free education for girls (Class 1 through Post Graduation) in Government and Government-aided institutions","o"]],"GA":[["Manohar Parrikar Goa Scholars Scheme-2025","x"],["Diamond Jubilee Government Investment for Technical Education Scheme (DJ-GIFT)","o"]],"HR":[["Consolidated Stipend Scheme for SC Students","w"],["State Merit Scholarship To UG Girls","w"],["Kalpana Chawla Chhatravrati Yojna for Girls (engineering students)","w"],["Post Matric Scholarship - BC","a"]],"JH":[["Jharkhand State Scheduled Caste Post Matric Scholarship Scheme","n"],["Jharkhand State Scheduled Tribe Post Matric Scholarship Scheme","n"],["Jharkhand State Backward Classes Post Matric Scholarship Scheme","n"],["Guruji Student Credit Card (GSCC) Scheme","n"],["Marang Gomke Jaipal Singh Munda Overseas Scholarship Scheme","x"]],"KL":[["Higher Education Scholarship Scheme","o"],["OEC Postmatric Educational Assistance","a"],["Education Loan (India) and Foreign Education Loan, Kerala State Development Corporation for Scheduled Castes and Scheduled Tribes","o"]],"LA":[["REWA 2.0- Financial Assistance to the Eligible Candidates of UT of Ladakh","x"],["Rewa: Lt Governor's Students Support Initiative","x"]],"LD":[["A higher-studies scholarship for island students (name not readable)","a"]],"MH":[["Tuition Fee & Exam Fee for Tribal Students ( Freeship)","w"],["Post Matric Scholarship to SBC Students","w"],["Post Matric Scholarship to VJNT Students","w"],["Post Matric Scholarship for OBC Girls in Professional Courses","w"]],"ML":[["Chief Minister Scholarship Scheme (CMSS)","a"],["State Merit Scholarship (Meghalaya) General","o"],["Free Studentship","a"],["Border Areas Scholarship","a"],["The Meghalaya Tribal Students' Book Grant (Post-matric Education)","o"]],"MN":[["Merit Scholarship Scheme for Students (HSSLC / Class XII toppers)","o"]],"MP":[["Pratibha Kiran Scheme","o"]],"MZ":[["Mizoram Research Fellowship","x"],["Incentive Cash Award (UPSC exam Prelims/Mains)","x"]],"NL":[["Nagaland State Research Scholarship","x"],["Scholarship Scheme for MBBS & Allied Courses (State Medical Scholarship)","a"]],"OD":[["Gopabandhu Sikhya Sahayata Yojana","o"],["Kalinga Sikhya Sathi Yojana (KSSY)","a"]],"PB":[["Post-Matric Scholarship for SC and OBC students","o"],["Chief Minister Scholarship Scheme","n"]],"PY":[["Scheme for payment of Full Fees to the eligible Scheduled Caste and Scheduled Tribe students","w"],["Puducherry State Post Matric Scholarship","a"]],"SK":[["Post Matric Scholarship (Merit) / General Scholarship for local students (Education Department, Government of Sikkim)","o"],["Chief Minister's Education Assistance Scheme (CMEAS)","w"],["Nar Bahadur Bhandari Fellowship Scheme (NBBFS)","x"]],"TG":[["Ambedkar Overseas Vidya Nidhi (AOVN), SC Development","x"],["Mahatma Jyothiba Phule Overseas Vidya Nidhi (MJPOVN), BC and EBC","x"],["Ambedkar Overseas Vidya Nidhi (AOVN), ST Welfare","x"]],"TR":[["Tripura Govt. Merit-Cum-Means Scholarship Scheme 1977","o"],["Tripura Post Madhyamik Stipend (Professional Courses Outside the State) Rules, 1986","o"],["One time financial support for economically weaker meritorious SC, ST, OBC & Minority students","o"],["Chief Minister's B.Ed. Anuprerna Yojana","o"],["Scholarships and Stipend for Education of Girls at Degree Stage","o"]],"UK":[["Mukhyamantri Uchch Shiksha Protsahan Chhatravritti Yojana (CM Higher Education Promotion Scholarship Scheme)","a"],["CM Meritorious Scholarship Scheme for admission to the top 50 institutions in the National Institutional Ranking Framework (NIRF)","a"],["Mukhyamantri Uchch Shiksha Shodh Protsahan Yojna","a"],["Financial aid for meritorious students preparing for the mains of competitive examinations such as UPSC and State PSC","x"]],"WB":[["Student's Credit Card","w"],["Kanyashree Prakalpa K3 (postgraduate)","a"],["WBMDFC minority scholarships (Post-Matric, Merit-cum-Means, Talent Support Programme stipend)","o"]]};
var SITE_WORD={read:'We could read it',partial:'Read in part. Some pages or documents refused or would not open',refused:'Does not allow a program to read it',error:'Did not load',unreadable:'Opened, but the document could not be read (a scan or a broken file)'};
var HELD_WHY={x:'It is for postgraduate study, study abroad, research or exam coaching, which this tool does not match yet.',
  n:'Only its name was found. No official page with its rules could be read.',
  a:'The official page could not be read properly, or does not give the amount.',
  o:'It is on an official page that is old or has no date. It needs a second reading before we add it.',
  w:'It is on an official page. It is waiting for a second reading before we add it.'};
var STATUS_WORD={official:'Confirmed on an official government page',part:'Partly confirmed. The official page confirms the scheme, but not every figure',
  unconf:'Not confirmed. This comes from a scholarship listing website, not from an official page',notfound:'Not found on any government page',
  report:'From a news report of figures the government gave to Parliament',news:'From news reports and listings. No official page could be read'};
var STATUS_PILL={official:'good',part:'warn',unconf:'warn',notfound:'bad',report:'warn',news:'warn'};
var NO_LIMIT={tn1:1,hp1:1};
var ISSUE_FOR={hr2:0,ap2:1,wb3:2,mh2:3,mp1:4,as1:5,wb1:6,wb2:6,hr1:7,nl2:9};
/* Problems we know about, in plain words. Nothing here is hidden elsewhere. */
var ISSUES=[
 ['Haryana: the ₹12,000 income limit needs to be verified','For the Lower Income Group Scheme, the official Haryana scholarship portal shows a family income limit of ₹12,000 a year. That is what we show, but it looks like a figure from an old rule and nobody at the department has confirmed it to us. Because of it, the tool shows this scheme only to families in the lowest income group. If your income is higher, ask your college scholarship desk what limit is used now.'],
 ['Andhra Pradesh: "Post-Matric Scholarship for Minorities" was not found','A scholarship listing website describes this as a separate scheme. The state\'s own portal does not show it. It lists minority students inside the main Post-Matric Scholarships scheme. We still show the entry, with a red warning, and its amount is never counted in your plan.'],
 ['West Bengal: "Nabanna Scholarship" was not found','We found this only on non-government websites. No government page lists it, and it is missing from the state Higher Education Council\'s list of scholarships. We still show it, with a red warning, and its amount is never counted in your plan.'],
 ['Maharashtra: the ₹8 lakh limit for the OBC fee scheme is not confirmed','The official page for "Tuition Fees and Examination Fees to OBC students" asks for an income or non-creamy-layer certificate but gives no figure. The ₹8 lakh we use comes from a listing website.'],
 ['Madhya Pradesh: two official pages disagree','For the Medhavi Vidyarthi scheme, one official page says MP Board students need 70% in Class 12 and another says 75%. They also disagree on the JEE Main rank needed (1,50,000 or 50,000). We show 70% and 1,50,000 and say so on the card.'],
 ['Assam: two official pages disagree','For the OBC post-matric scholarship, the department\'s rates sheet gives an income limit of ₹1.5 lakh and another official page gives ₹2.5 lakh. Neither has a date. We use ₹1.5 lakh.'],
 ['West Bengal: amounts and one income limit are not on the official pages','For the SC/ST/OBC post-matric scholarship, the portal gives no income limit and no amounts. We use ₹2.5 lakh and ₹220 to ₹1,200 a month from an older listing. For the Swami Vivekananda scholarship the income limit and marks are confirmed, but today\'s amounts are not.'],
 ['Haryana: the SC post-matric scholarship was not open','On 13 November 2026 it was not in the portal\'s list of schemes open for 2026-27. We do not know when it opens.'],
 ['Some figures are for an earlier year','Delhi\'s amounts and limits are from the 2025-26 guidelines, because no 2026-27 guideline was found. Puducherry\'s amounts are the ones notified for 2024-25 and 2025-26. Goa\'s rules are from notifications of 2023 and 2024. The Andaman and Nicobar guideline is from November 2020. The Himachal Pradesh, Tamil Nadu and Assam pages carry no date at all.'],
 ['Nagaland: one rule was not read twice','For the State Technical Scholarship, the portal confirms the scheme and its dates. The ₹8 lakh income limit comes from a 2024 guideline that we read once and did not re-read.'],
 ['The two central scholarships are not from the ministry\'s own pages','Details and payout numbers for the PM-USP Central Sector Scholarship and Ishan Uday come from a news report of figures the government gave to Parliament. The central guideline for ST post-matric scholarships could not be read at all.'],
 ['We read some pages through a summary','A program read the official pages. For some pages it gave us a summary and not the exact words. Every income limit, category rule and closing date that we changed was read a second time. Smaller details, such as lists of papers and renewal rules, were read once.'],
 ['Most schemes have no dates for this year','For most schemes we could not find opening and closing dates for 2026-27. Where a card shows no dates, we do not have them.'],
 ['We know how many students were actually paid for only two schemes','Being eligible does not mean being paid. We have last year\'s numbers of applications and awards for the two central scholarships only. For every state scheme this is unknown.'],
 ['Rules on holding two scholarships together are mostly unknown','We have the official rule for only a few schemes. For the rest the card says "not stated". The "best combination" on your results page assumes one regular scholarship at a time.'],
 ['Loan rules were not checked against each bank','The loan guide uses the Reserve Bank of India\'s education loan guidance, a government press note and news reports. Your bank\'s own interest rate and conditions may differ.'],
 ['The list of colleges has gaps','The finder now uses the Ministry of Education\'s lists of universities and colleges (December 2025), the list of stand-alone institutions, the PM-Vidyalaxmi list and the national list of ITIs. The lists do not record course approvals by AICTE, the National Medical Commission or other regulators.'],
 ['Company and trust scholarships are only partly checked','They are on a separate page. Only the LIC scholarship was read in the provider\'s own document; the rest come from listing sites and news reports, and are matched to your answers only on level, gender, state and income.'],
 ['Bank loan rates move','The loan rates were read on each bank\'s own page on 14 November 2026. They float with the repo rate and can change at any time. Bank of India\'s current figure could not be read.'],
 ['What is left out on purpose','School-level schemes, and schemes only for study abroad, research or exam coaching are not in the tool yet.'],
 ['Hindi is partial','The questions and headings are in Hindi. Scheme details and this page are in English only.'],
 ['Parental consent is recorded, not verified','For students under 18, the beta records a parent\'s consent on the device. It does not verify it.']
];
function gaps(s){
  var have=[],miss=[], put=function(ok,t){(ok?have:miss).push(t)};
  if(s.cap!=null||s.floor!=null) have.push('income limit'); else if(NO_LIMIT[s.id]) have.push('income limit (the page says there is none)'); else miss.push('an income limit (none is stated where we looked)');
  put(s.val!=null||!!s.tbl||/₹/.test(s.benefit),'the amount');
  put(!!(s.open||s.close),'dates for 2026-27');
  put(!!s.docs,'the portal\'s list of papers');
  put(!!s.renew,'the renewal rule');
  put(!!s.combine,'whether it can be held with another scholarship');
  put(!!s.payout,'how many students were paid last year');
  return {have:have,miss:miss};
}
function dataState(st){
  var list=SCHEMES.filter(function(s){return s.st===st.id}), sites=DATA_SITES[st.id]||[], held=DATA_HELD[st.id]||[];
  var c=function(by){return list.filter(function(s){return s.chk.by===by}).length};
  var head=list.length?[[c('official'),'confirmed'],[c('part'),'partly confirmed'],[c('unconf'),'not confirmed'],[c('notfound'),'not found']].filter(function(x){return x[0]}).map(function(x){return x[0]+' '+x[1]}).join(', '):'nothing loaded yet';
  return '<details class="more" style="border-top:1px solid var(--line)"><summary>'+esc(st.n)+' <span class="small muted" style="font-weight:400">· '+head+'</span></summary>'+
    '<p class="small" style="margin:8px 0 4px"><b>Official websites we tried</b></p>'+
    (sites.length?'<table class="tbl">'+sites.map(function(x){return '<tr><td>'+esc(x[0])+'</td><td>'+SITE_WORD[x[1]]+'</td></tr>'}).join('')+'</table>':'<p class="small muted" style="margin:0">None could be opened.</p>')+
    '<p class="small" style="margin:12px 0 4px"><b>Schemes in the tool</b></p>'+
    (list.length?list.map(function(s){ var g=gaps(s);
      return '<div style="padding:8px 0;border-bottom:1px solid var(--line)"><div><b>'+s.name+'</b></div>'+
        '<div class="small"><span class="pill '+STATUS_PILL[s.chk.by]+'">'+STATUS_WORD[s.chk.by]+'</span></div>'+
        (ISSUE_FOR[s.id]!=null?'<div class="small" style="color:var(--bad)"><b>Known problem:</b> '+ISSUES[ISSUE_FOR[s.id]][0]+'. '+ISSUES[ISSUE_FOR[s.id]][1]+'</div>':s.warn?'<div class="small" style="color:var(--bad)">'+s.warn+'</div>':'')+
        (s.chk.note?'<div class="small">'+s.chk.note+'</div>':'')+
        '<div class="small muted">Still missing: '+(g.miss.length?g.miss.join('; ')+'.':'nothing on our list.')+'</div>'+
        (s.chk.src?'<div class="small"><a href="'+s.chk.src+'" target="_blank" rel="noopener">Open the official page we read</a></div>':'')+'</div>' }).join('')
      :'<p class="small muted" style="margin:0">None. A student from '+esc(st.n)+' still sees the central scholarships, the cost planner and the loan guide.</p>')+
    (held.length?'<p class="small" style="margin:12px 0 4px"><b>Found, but not added yet</b></p><ul class="why" style="margin-top:0">'+held.map(function(h){return '<li><b>'+esc(h[0])+'.</b> '+HELD_WHY[h[1]]+'</li>'}).join('')+'</ul>':'')+
    '<p class="small" style="margin:10px 0 0"><a href="'+st.portal+'" target="_blank" rel="noopener">Open the '+esc(st.n)+' portal yourself</a></p></details>';
}
/* ===== ADDED 14 November 2026: functions for registers, loans, private scholarships, sources ===== */
var INST_UNI={};
var INST_REL=['Affiliated to','Constituent college of','Recognised centre of','Postgraduate or off-campus centre of','Autonomous college under'];
var INST_KIND={U:'University',C:'College',S:'Stand-alone institution',I:'Industrial Training Institute (ITI)'};
/* The national body whose approval each kind of stand-alone course needs. The AISHE list does not say whether the approval is current. */
var SA_BODY={'Technical/Polytechnic':'Diploma courses here need approval from AICTE and the state board of technical education. Check the AICTE list of approved institutions.',
 'Nursing':'Nursing courses need recognition from the Indian Nursing Council and the state nursing council.',
 'Teacher Training':'Teacher-training courses need recognition from the National Council for Teacher Education (NCTE).',
 'Paramedical':'Paramedical courses are recognised by the state paramedical council or an affiliating university. Ask which one.',
 'PGDM Institutes':'PGDM programmes need AICTE approval.',
 'Pharmacy Institutions':'Pharmacy courses need approval from the Pharmacy Council of India.',
 'Hotel Management and Catering':'Hotel-management courses are usually approved by AICTE or affiliated to the National Council for Hotel Management.',
 'Institutions under Rehabilitation Council of India':'Rehabilitation courses need recognition from the Rehabilitation Council of India.',
 'Institutes under Ministries':'Run under a government ministry.'};
function instRecogList(r,st){
  /* r = [name, district, kind, mgmt, code, pmv, website, extra] */
  var out=[], k=r[2], x=r[7];
  if(k==='I'){
    out.push('Affiliated to the National Council for Vocational Training (NCVT), Directorate General of Training, Ministry of Skill Development (ITI code '+r[4]+')');
    out.push(x?'DGT grading score for 2026-27: '+x+' out of 10':'No DGT grading score for 2026-27 was published for this code');
  } else if(k==='U'){
    out.push('Listed as a university by the Ministry of Education (AISHE code '+r[4]+')');
    if(x) out.push('Type: '+x);
  } else if(k==='C'){
    out.push('Listed as a college by the Ministry of Education (AISHE code '+r[4]+')');
    if(x&&x[1]){ var u=(INST_UNI[st]||{})[x[1]]; if(u) out.push(INST_REL[x[0]]+' '+u[0]+(u[1]?' ('+u[1]+')':'')) }
  } else if(k==='S'&&x){
    out.push('Listed by the Ministry of Education as a stand-alone institution (AISHE code '+r[4]+')');
    out.push('Type: '+x);
    if(SA_BODY[x]) out.push(SA_BODY[x]);
  } else out.push('Listed by the Ministry of Education (AISHE code '+r[4]+')');
  return out;
}
function instHits(){
  var q=instQ.trim().toLowerCase(), hit=[], sts=P.states||[P.state];
  for(var s=0;s<sts.length;s++){ var rows=INST[sts[s]]||[];
    for(var i=0;i<rows.length&&hit.length<25;i++){ if((rows[i][0]+' '+rows[i][1]).toLowerCase().indexOf(q)>=0) hit.push([sts[s],i]) } }
  return hit;
}
function privFit(s,p){
  /* returns null if it cannot fit these answers, else a list of things to check */
  var why=[];
  if(!/[UDI]/.test(s.lv)) return null;
  if(s.g==='F'&&p.gender!=='F'){ if(p.gender==='U') why.push('Only for girls and women.'); else return null; }
  if(s.st&&s.st.length&&!(p.states||[p.state]).some(function(x){return s.st.indexOf(x)>=0})) return null;
  if(s.cats&&s.cats.indexOf(p.cat)<0) return null;
  if(s.dis&&!p.dis){ if(p.dis==null) why.push('Only for students with a disability.'); else return null; }
  if(s.inc!=null&&INC[p.inc].r[0]>=s.inc) return null;
  if(s.inc!=null&&INC[p.inc].r[1]>s.inc) why.push('Your income bracket goes above its limit of '+rs(s.inc)+'.');
  if(s.inc==null) why.push('No income limit was found.');
  return why;
}
function privCard(s,why){
  var c=PRIV_CHK[s.chk];
  return '<div class="card stack" style="gap:6px"><div><b>'+esc(s.n)+'</b><div class="small muted">'+esc(s.by)+' · '+s.k+' · '+s.lv.split('').map(function(x){return PRIV_LV[x]}).join(', ')+(s.g==='F'?' · Girls only':'')+'</div></div>'+
    '<div><b>'+esc(s.amt)+'</b></div><div class="small">'+esc(s.who)+(s.inc!=null?' Family income limit: '+rs(s.inc)+'.':'')+'</div>'+
    '<div class="small"><b>When:</b> '+esc(s.when)+'</div>'+
    (why&&why.length?'<div class="small" style="color:var(--warn)">'+why.join(' ')+'</div>':'')+
    '<div class="small"><span class="pill '+c[0]+'">'+c[1]+'</span></div>'+
    '<div class="row small"><a href="'+s.url+'" target="_blank" rel="noopener">'+(s.chk==='list'?'Open the listing':'Open the provider\'s page')+'</a>'+(s.src&&s.src!==s.url?' · <a href="'+s.src+'" target="_blank" rel="noopener">Where the details came from</a>':'')+'</div></div>';
}
function vPrivate(){
  var fit=[], rest=[];
  PRIV.forEach(function(s){ var w=P?privFit(s,P):null; if(P&&w) fit.push([s,w]); else rest.push(s) });
  var abroad=rest.filter(function(s){return /A/.test(s.lv)&&!/[SDIU]/.test(s.lv)}), other=rest.filter(function(s){return abroad.indexOf(s)<0});
  return '<div class="stack">'+(lang==='hi'?'<div class="strip">यह पृष्ठ अभी केवल अंग्रेज़ी में है।</div>':'')+
    backLink()+
    '<h1>Company, public-sector and trust scholarships</h1>'+
    '<p>These are paid by companies, public-sector firms, foundations and trusts, not by the government schemes on your results page. Most are merit-cum-means: they look at both marks and family income. Many can be held together with a government scholarship, but check each one\'s rules. Checked on '+CHECKED2+'.</p>'+
    '<div class="strip warn"><b>How far to trust these details.</b> Only the LIC scholarship was read in the provider\'s own document. For the rest, the amounts, limits and dates come from scholarship listing sites and news reports, and companies change them every year. Treat each card as a lead and confirm it on the provider\'s page before you apply. Never pay anyone to apply for a scholarship.</div>'+
    (P?'<h2>Ones that may fit your answers ('+fit.length+')</h2>'+(fit.length?fit.map(function(x){return privCard(x[0],x[1])}).join(''):'<div class="card muted">None of these fits your answers. The full list is below.</div>')+
      '<h2>All the others ('+other.length+')</h2><p class="small muted" style="margin:0">They do not fit your answers on level, gender, state, category or income, as far as the listings say.</p>':'<h2>All of them ('+other.length+')</h2>')+
    other.map(function(s){return privCard(s)}).join('')+
    '<h2>For postgraduate study abroad ('+abroad.length+')</h2>'+abroad.map(function(s){return privCard(s)}).join('')+
    '<h2>Where to look for more</h2><div class="card"><ul class="why" style="margin-top:0">'+LISTING_SITES.slice(0,5).map(function(x){return '<li><a href="'+x[1]+'" target="_blank" rel="noopener">'+esc(x[0])+'</a></li>'}).join('')+'</ul>'+
    '<p class="small muted" style="margin:8px 0 0">These are private listing websites. They are useful for finding scholarships, but they are not the providers.</p></div></div>';
}
function loansHtml(){
  var mine=(P?P.states||[P.state]:[]);
  var sl=STATE_LOANS.slice().sort(function(a,b){return (mine.indexOf(b.st)>=0)-(mine.indexOf(a.st)>=0)});
  var banks=LENDERS.slice().sort(function(a,b){return (a.low==null)-(b.low==null)||a.low-b.low});
  return '<h2>Cheapest education loans we found</h2>'+
    '<p class="small muted" style="margin:0">Checked on '+CHECKED2+'. All bank rates float: they move when the Reserve Bank changes the repo rate. Apply through the <a href="https://pmvidyalaxmi.co.in/" target="_blank" rel="noopener">PM-Vidyalaxmi portal</a> to reach several banks with one form.</p>'+
    '<h3>State government schemes</h3><p class="small muted" style="margin:0">Far cheaper than any bank, but only for residents of the state.</p>'+
    sl.map(function(s){ var c=LOAN_CHK[s.chk], o=stateOf(s.st);
      return '<div class="card stack" style="gap:6px'+(mine.indexOf(s.st)>=0?';border-left:5px solid var(--good)':'')+'"><div><b>'+esc(s.n)+'</b> <span class="small muted">· '+esc(o.n)+(mine.indexOf(s.st)>=0?' · your state':'')+'</span></div>'+
        '<div><b>'+esc(s.rate)+'</b> · '+esc(s.amt)+'</div><div class="small">'+esc(s.who)+'</div>'+
        '<div class="small"><span class="pill '+c[0]+'">'+c[1]+'</span></div>'+
        '<div class="small"><a href="'+s.url+'" target="_blank" rel="noopener">Official portal</a>'+(s.src&&s.src!==s.url?' · <a href="'+s.src+'" target="_blank" rel="noopener">Where the rate came from</a>':'')+'</div></div>' }).join('')+
    '<h3>Public-sector banks, lowest rate first</h3><p class="small muted" style="margin:0">The lowest rates are for students admitted to institutions on the PM-Vidyalaxmi list or to premier institutes. A college outside those lists gets the ordinary rate, usually 9.5% to 10.5%. Private banks and loan companies usually charge more; we did not check their rates.</p>'+
    banks.map(function(b){
      return '<details class="more card"><summary><b>'+esc(b.n)+'</b> <span class="small muted" style="font-weight:400">· '+(b.low!=null?'from '+b.low.toFixed(2)+'%':'rate not confirmed')+'</span></summary>'+
        '<table class="tbl">'+b.rows.map(function(r){return '<tr><td>'+esc(r[0])+'</td><td style="white-space:nowrap"><b>'+esc(r[1])+'</b></td></tr>'}).join('')+'</table>'+
        (b.note?'<p class="small" style="margin:8px 0 0">'+esc(b.note)+'</p>':'')+
        '<p class="small muted" style="margin:6px 0 0">From the bank\'s own page: '+esc(b.asof)+'. <a href="'+b.url+'" target="_blank" rel="noopener">Open it</a>'+(b.url2?' · <a href="'+b.url2+'" target="_blank" rel="noopener">second page</a>':'')+'</p></details>' }).join('');
}
function allSources(){
  /* every web address the tool relies on, collected from the data itself */
  var seen={}, list=[];
  var add=function(u,what){ if(!u||!/^https?:/.test(u)) return; u=u.replace(/&amp;/g,'&'); if(seen[u]){ if(what&&seen[u].w.indexOf(what)<0&&seen[u].w.length<4) seen[u].w.push(what); return } seen[u]={u:u,w:what?[what]:[]}; list.push(seen[u]) };
  Object.keys(SRC).forEach(function(k){ add(SRC[k],'Background figures and rules') });
  STATES.forEach(function(s){ add(s.portal,s.n+' scholarship portal'); add(s.src,s.n+': where scheme names were first found') });
  SCHEMES.forEach(function(s){ JSON.stringify(s).replace(/https?:\/\/[^"\\\s<>]+/g,function(u){ add(u,s.name); return u }) });
  try{ JSON.stringify(VERIFY).replace(/https?:\/\/[^"\\\s<>]+/g,function(u){ add(u,'Official checks'); return u }) }catch(e){}
  REGISTERS.forEach(function(r){ add(r[1],'Institution registers') });
  LENDERS.forEach(function(b){ add(b.url,b.n+' loan rates'); add(b.url2,b.n+' loan rates') });
  STATE_LOANS.forEach(function(s){ add(s.url,s.n); add(s.src,s.n) });
  PRIV.forEach(function(s){ add(s.url,s.n); add(s.src,s.n) });
  LISTING_SITES.forEach(function(x){ add(x[1],x[0]) });
  ['https://pmvidyalaxmi.co.in/','https://pgportal.gov.in/','https://cms.rbi.org.in/','https://website.rbi.org.in/documents/d/rbi/education-loan','https://www.indiascholarships.in/guides/how-to-file-scholarship-grievance-online'].forEach(function(u){ add(u,'Loan and complaint help') });
  var dom=function(u){ return u.replace(/^https?:\/\//,'').split('/')[0].replace(/^www\./,'') };
  var gov=function(d){ return /(\.gov\.in|\.nic\.in|\.gov|rbi\.org\.in|sansad\.in|\.bank\.in|licindia\.in|ongcscholar\.org|pmvidyalaxmi\.co\.in|indiaai\.gov\.in)$/.test(d) };
  return {list:list,dom:dom,gov:gov};
}
function sourcesHtml(){
  var S=allSources(), g=S.list.filter(function(x){return S.gov(S.dom(x.u))}), o=S.list.filter(function(x){return !S.gov(S.dom(x.u))});
  var row=function(x){ return '<li style="margin-bottom:4px"><a href="'+x.u+'" target="_blank" rel="noopener" style="word-break:break-all">'+esc(x.u.replace(/^https?:\/\//,''))+'</a>'+(x.w.length?'<div class="small muted">Used for: '+esc(x.w.join('; '))+'</div>':'')+'</li>' };
  return '<h2>Every source we used</h2>'+
    '<p class="small muted" style="margin:0">'+S.list.length+' web addresses, collected from the data inside the tool, so nothing is left off. "Official" means a government, regulator or public-sector bank or company website. Everything else is a news site, a scholarship listing site or a company\'s own site.</p>'+
    '<details class="more card"><summary><b>Official sources ('+g.length+')</b></summary><ul class="why" style="margin-top:8px;padding-left:18px">'+g.map(row).join('')+'</ul></details>'+
    '<details class="more card"><summary><b>Other sources ('+o.length+')</b></summary><ul class="why" style="margin-top:8px;padding-left:18px">'+o.map(row).join('')+'</ul></details>';
}
function registersHtml(){
  var tot=0, n=0; Object.keys(INST_N).forEach(function(k){ tot+=INST_N[k]; n++ });
  return '<h2>The lists of colleges and institutes</h2><div class="card stack">'+
    '<p class="small" style="margin:0">The college finder on your results page searches '+tot.toLocaleString('en-IN')+' institutions in '+n+' states and union territories, from these official lists:</p>'+
    '<ul class="why" style="margin-top:0">'+REGISTERS.map(function(r){return '<li><a href="'+r[1]+'" target="_blank" rel="noopener">'+esc(r[0])+'</a>'+(r[2]?'. '+esc(r[2]):'')+'</li>'}).join('')+'</ul>'+
    '<p class="small" style="margin:0"><b>What "recognised" means here.</b> We show what the lists record: that the Ministry of Education lists the institution, which university a college is affiliated to and what kind of university that is, and for ITIs, affiliation to the National Council for Vocational Training and the 2026-27 grade. The lists do not say whether a course is approved by AICTE, the National Medical Commission, the Bar Council or another regulator. Check that on the regulator\'s own website before you pay a fee.</p>'+
    '<p class="small" style="margin:0"><b>Stand-alone institutions</b> (polytechnics, nursing, teacher training and similar) are not part of a university. For them we show the type, and the national body whose approval the course needs; the list does not say whether that approval is current.</p></div>';
}
function oppCard(w,W){
  return '<div class="card"><div class="row" style="justify-content:space-between"><span class="pill plain">'+w.by+'</span><span class="pill '+(w.chk==='official'?'good':'warn')+'">'+W[w.chk]+'</span></div>'+
    '<h3 style="margin:8px 0 4px">'+w.name+'</h3><table class="tbl">'+
    (w.who?'<tr><th>Who can apply</th><td>'+w.who+'</td></tr>':'')+((w.pay||w.get)?'<tr><th>What you get</th><td>'+(w.pay||w.get)+'</td></tr>':'')+
    (w.when?'<tr><th>When</th><td>'+w.when+'</td></tr>':'')+(w.how?'<tr><th>How to apply</th><td>'+w.how+'</td></tr>':'')+'</table>'+
    '<p class="small muted" style="margin:8px 0 0">'+w.note+(w.src?' <a href="'+w.src+'" target="_blank" rel="noopener">Document we read</a>.':'')+'</p>'+
    '<div class="row" style="margin-top:8px"><a class="btn sm" href="'+w.link+'"'+(/^https?:/.test(w.link)?' target="_blank" rel="noopener">Official site':'>Open')+'</a></div></div>';
}
var OPP_W={official:'Read on an official page',part:'Partly read on an official page',news:'From news reports and listings'};
function backLink(){ var r=route(), on={work:'#work',skills:'#skills',coaching:'#coaching',private:'#private'}[r]; return P&&on?kindTabs(on,matchAll(P).length):'<div><a href="#start" class="small">'+L('Back to the start','शुरुआत पर लौटें')+'</a></div>' }
function vWork(){
  var all=WORK.concat(WORK_MORE);
  return '<div class="stack">'+backLink()+
    '<h1>Internships and apprenticeships across India</h1><p>Government internships and apprenticeship schemes open to students from any state. Many pay a stipend; some are unpaid but count on a CV. Each card says how we checked it.</p>'+
    Object.keys(WORK_GROUP).map(function(g){ return '<h2>'+WORK_GROUP[g]+'</h2><div class="grid">'+all.filter(function(w){return w.g===g}).map(function(w){return oppCard(w,OPP_W)}).join('')+'</div>' }).join('')+
    '<p class="small muted">Never pay anyone for a government internship or apprenticeship. <a href="#fake">How to spot a fake scheme</a> · <a href="#skills">Free skill training</a> · <a href="#coaching">Free coaching and exam fees</a></p></div>';
}
function vSkills(){
  return '<div class="stack">'+backLink()+
    '<h1>Learn a trade: free government skill training</h1><p>Free courses for school leavers, ITI and diploma students, rural youth and artisans, with a government certificate. Some pay you while you train or help you find a job.</p>'+
    '<div class="grid">'+SKILLS.map(function(w){return oppCard(w,OPP_W)}).join('')+'</div>'+
    '<p class="small muted">Apprenticeships with a stipend after your course: <a href="#work">internships and apprenticeships</a>. Never pay an agent to join a free government course.</p></div>';
}
function vCoaching(){
  var mine=P?COACH.filter(function(c){return !c.st||P.states.indexOf(c.st)>=0}):COACH;
  var list=(P&&!coachAll)?mine:COACH;
  return '<div class="stack">'+backLink()+
    '<h1>Free coaching and exam fees</h1><p>Free coaching schemes for entrance and competitive exams, and the lower application fees many students qualify for.</p>'+
    '<h2>Free coaching</h2>'+(P&&!coachAll&&mine.length<COACH.length?'<p class="small muted">Showing the central scheme and those for your state. <button class="btn ghost sm" data-a="coachall">Show all states</button></p>':'')+
    '<div class="grid">'+list.map(function(w){return oppCard(w,OPP_W)}).join('')+'</div>'+
    '<h2>Exam application fees</h2><p class="small">Fees at exam centres in India. Women, SC, ST and PwD candidates pay less for most national exams.</p>'+
    '<div class="grid">'+EXAMFEES.map(function(x){ return '<div class="card"><div class="row" style="justify-content:space-between"><b>'+x.name+'</b><span class="pill '+(x.chk==='official'?'good':'warn')+'">'+OPP_W[x.chk]+'</span></div><p class="small muted" style="margin:2px 0 6px">'+x.body+'</p>'+
      '<table class="tbl">'+x.rows.map(function(r){return '<tr><th>'+r[0]+'</th><td>'+r[1]+'</td></tr>'}).join('')+'</table><p class="small muted" style="margin:8px 0 0">'+x.note+'</p>'+
      '<div class="row" style="margin-top:8px"><a class="btn ghost sm" href="'+x.link+'" target="_blank" rel="noopener">Official site</a></div></div>' }).join('')+'</div></div>';
}
function vFake(){
  return '<div class="stack"><div><a href="'+(P?'#schemes':'#start')+'" class="small">'+(P?'Back to my results':'Back to the start')+'</a></div>'+
    '<h1>Spot a fake scholarship</h1><p>Fake scholarship messages spread on WhatsApp and Telegram every season, most of all near deadlines. They want your money, your documents or your bank login.</p>'+
    '<h2>Warning signs</h2><div class="card"><ul class="why" style="margin:0">'+FAKE_SIGNS.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></div>'+
    '<h2>Recent fakes</h2>'+FAKE_SEEN.map(function(x){return '<div class="card flag"><h3 style="margin:0 0 4px">'+x[0]+'</h3><p class="small" style="margin:0">'+x[1]+' <a href="'+x[2]+'" target="_blank" rel="noopener nofollow">News report</a></p></div>'}).join('')+
    '<h2>If you are not sure</h2><div class="card"><ul class="why" style="margin:0">'+
    '<li>Search for the scheme on <a href="https://scholarships.gov.in/" target="_blank" rel="noopener">scholarships.gov.in</a>, <a href="https://www.myscheme.gov.in/" target="_blank" rel="noopener">myscheme.gov.in</a> or your state portal. If it is not there, do not apply.</li>'+
    '<li>Ask your college scholarship desk. They verify every real application.</li>'+
    '<li>Send the message to PIB Fact Check on WhatsApp at +91 87997 11259.</li></ul></div>'+
    '<h2>If you already paid or shared details</h2><div class="card"><ul class="why" style="margin:0">'+
    '<li>Call the cyber crime helpline <b>1930</b> straight away, and report at <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener">cybercrime.gov.in</a>. Speed matters for getting money back.</li>'+
    '<li>Call your bank to block your card or UPI, and change any password you shared.</li>'+
    '<li>Keep screenshots of the messages, links, numbers and payments.</li></ul></div>'+
    '<h2>Scholarships from your own college</h2><div class="card"><p class="small" style="margin:0 0 6px">Many colleges and universities have their own fee waivers and scholarships, which no list on the internet covers well. Ask the scholarship desk these questions:</p><ul class="why" style="margin:0">'+
    COLLEGE_ASK.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul></div></div>';
}
function vChanges(){
  return '<div class="stack"><div><a href="'+(P?'#schemes':'#start')+'" class="small">'+(P?'Back to my results':'Back to the start')+'</a></div>'+
    '<h1>What changed</h1><p>Every change to the schemes and the tool, newest first. A scheme\'s own card also says what last changed in it.</p>'+
    '<p class="small"><a href="feed.xml">Follow these changes in a feed reader (RSS)</a></p>'+
    CHANGELOG.map(function(c){ return '<div class="card"><p class="small muted" style="margin:0">'+fmtDate(c[0])+'</p><h3 style="margin:2px 0 6px">'+c[1]+'</h3><ul class="why" style="margin:0">'+
      c[2].map(function(i){return '<li>'+i[0]+(i[1]?' <a href="'+i[1]+'">Open</a>':'')+'</li>'}).join('')+'</ul></div>' }).join('')+'</div>';
}
function dataCentral(){
  var list=SCHEMES.filter(function(s){return s.lvl==='C'});
  return '<div class="card"><p class="small" style="margin:0 0 8px">'+list.length+' central schemes for degree students. Each is matched on the same answers as the state schemes. Where a central scheme is paid through your state, the card says so, so you do not apply twice.</p>'+
    list.map(function(s){ var g=gaps(s);
      return '<div style="padding:8px 0;border-top:1px solid var(--line)"><div><b>'+s.name+'</b></div>'+
        '<div class="small"><span class="pill '+STATUS_PILL[s.chk.by]+'">'+STATUS_WORD[s.chk.by]+'</span></div>'+
        (s.chk.note?'<div class="small">'+s.chk.note+'</div>':'')+(s.warn?'<div class="small" style="color:var(--bad)">'+s.warn+'</div>':'')+
        '<div class="small muted">Still missing: '+(g.miss.length?g.miss.join('; ')+'.':'nothing on our list.')+'</div>'+
        (s.chk.src?'<div class="small"><a href="'+s.chk.src+'" target="_blank" rel="noopener">Open the page we read</a></div>':'')+'</div>' }).join('')+'</div>';
}
function vData(){
  var st=SCHEMES.filter(function(s){return s.lvl!=='C'}), n=function(by){return st.filter(function(s){return s.chk.by===by}).length};
  var none=STATES.filter(function(x){return LOADED.indexOf(x)<0});
  var cnt=function(f){return SCHEMES.filter(f).length}, all=SCHEMES.length;
  var unconfBy={}; st.forEach(function(s){ if(s.chk.by==='unconf'){ (unconfBy[s.st]=unconfBy[s.st]||[]).push(s.name) } });
  var mail=REPORT_EMAIL?'<a class="btn sm" href="mailto:'+REPORT_EMAIL+'?subject='+encodeURIComponent('Scholarship Navigator: a detail to correct')+'&body='+encodeURIComponent('State and scheme:\n\nWhat is wrong or missing:\n\nWhat it should say:\n\nWhere I saw the correct detail (link, notice or office):\n')+'">Email '+REPORT_EMAIL+'</a>':'';
  return '<div class="stack">'+
    (lang==='hi'?'<div class="strip">यह पृष्ठ अभी केवल अंग्रेज़ी में है।</div>':'')+
    '<div><a href="'+(P?'#schemes':'#start')+'" class="small">'+(P?'Back to my results':'Back to the start')+'</a></div>'+
    '<h1>Our data: what we checked and what is missing</h1>'+
    '<p>This page shows everything behind the tool: where each detail came from, what we could confirm, what we could not, and what we know may be wrong. Read it before you rely on a scheme. Checked on '+CHECKED+'.</p>'+
    '<h2>In short</h2>'+
    '<div class="sum"><div class="card"><b>'+STATES.length+'</b><span class="small muted">states and union territories you can choose</span></div>'+
    '<div class="card"><b>'+LOADED.length+'</b><span class="small muted">of them have state schemes in the tool</span></div>'+
    '<div class="card"><b>'+st.length+'</b><span class="small muted">state schemes in the tool, plus '+(SCHEMES.length-st.length)+' central ones</span></div>'+
    '<div class="card"><b>'+n('official')+'</b><span class="small muted">confirmed on an official government page</span></div>'+
    '<div class="card"><b>'+n('part')+'</b><span class="small muted">partly confirmed</span></div>'+
    '<div class="card"><b>'+n('unconf')+'</b><span class="small muted">not confirmed</span></div>'+
    '<div class="card"><b>'+n('notfound')+'</b><span class="small muted">not found on any government page</span></div>'+
    '<div class="card"><b>'+none.length+'</b><span class="small muted">states and territories with no state scheme loaded</span></div>'+
    '<div class="card"><b>'+Object.keys(INST_N).reduce(function(a,k){return a+INST_N[k]},0).toLocaleString('en-IN')+'</b><span class="small muted">universities, colleges, stand-alone institutes and ITIs in the college finder</span></div>'+
    '<div class="card"><b>'+PRIV.length+'</b><span class="small muted">company, public-sector and trust scholarships listed</span></div></div>'+
    '<h2>What the labels mean</h2>'+
    '<div class="card"><table class="tbl">'+
    '<tr><th><span class="pill good">Confirmed</span></th><td>We read the rule on a government website or in a government document, and the card links to it. It can still be for an earlier year. The card says so when it is.</td></tr>'+
    '<tr><th><span class="pill warn">Partly confirmed</span></th><td>A government page shows the scheme exists, but leaves out something, such as the amount or the income limit. The missing part comes from elsewhere.</td></tr>'+
    '<tr><th><span class="pill warn">Not confirmed</span></th><td>The details come from a scholarship listing website (Buddy4Study). We tried the government portal and could not read it. The details may be right, but treat them as a lead and check the portal.</td></tr>'+
    '<tr><th><span class="pill bad">Not found</span></th><td>We could not find the scheme on any government page. Do not plan around it.</td></tr></table></div>'+
    '<p class="small"><a href="#changes">What changed, and when</a> · <a href="browse.html">Browse all schemes</a></p>'+
    '<h2>Central schemes</h2>'+dataCentral()+
    '<h2>Problems we know about</h2>'+
    '<p class="small muted" style="margin:0">'+ISSUES.length+' things you should know. If you can settle one of them, please tell us.</p>'+
    ISSUES.map(function(x,i){return '<div class="card'+(i<3?' flag':'')+'"><h3 style="margin:0 0 4px">'+x[0]+'</h3><p class="small" style="margin:0">'+x[1]+'</p></div>'}).join('')+
    '<h2>Schemes we could not confirm</h2>'+
    '<div class="card"><p class="small" style="margin:0 0 8px">These '+n('unconf')+' schemes are shown with details from a listing website. In most of these states the government portal does not allow a program to read it. Someone needs to open each portal and read the rules.</p>'+
    '<table class="tbl">'+Object.keys(unconfBy).map(function(k){return '<tr><th>'+esc(stateOf(k).n)+'</th><td>'+unconfBy[k].join('<br>')+'</td></tr>'}).join('')+'</table></div>'+
    '<h2>States and territories with nothing loaded</h2>'+
    '<div class="card"><p class="small" style="margin:0 0 8px">You can choose these, and you will still see the central scholarships, the cost planner and the loan guide. No state scheme is shown, because we could not read enough from official pages. Open each one in the list further down to see what we tried.</p>'+
    '<div class="chips">'+none.map(function(x){return '<span class="chip">'+esc(x.n)+'</span>'}).join('')+'</div></div>'+
    '<h2>What is missing, scheme by scheme</h2>'+
    '<div class="card"><p class="small" style="margin:0 0 8px">For each of the '+all+' schemes we looked for the same things. This is how many schemes have each one.</p><table class="tbl">'+
    [['Who can apply (category, course, type of college)',all],
     ['An income limit, or a clear statement that there is none',cnt(function(s){return s.cap!=null||s.floor!=null||NO_LIMIT[s.id]})],
     ['The amount',cnt(function(s){return s.val!=null||!!s.tbl||/₹/.test(s.benefit)})],
     ['Opening or closing dates for 2026-27',cnt(function(s){return !!(s.open||s.close)})],
     ['The portal\'s own list of papers',cnt(function(s){return !!s.docs})],
     ['The renewal rule',cnt(function(s){return !!s.renew})],
     ['Whether it can be held with another scholarship',cnt(function(s){return !!s.combine})],
     ['How many students were paid last year',cnt(function(s){return !!s.payout})]
    ].map(function(r){return '<tr><td>'+r[0]+'</td><td style="white-space:nowrap"><b>'+r[1]+'</b> of '+all+'</td></tr>'}).join('')+'</table>'+
    '<p class="small muted" style="margin:8px 0 0">"Who can apply" is filled in for every scheme, but for the unconfirmed ones it comes from the listing website.</p></div>'+
    '<h2>How we checked</h2>'+
    '<div class="card"><ol class="small" style="margin:0;padding-left:20px">'+
    '<li>On '+CHECKED+', a computer program was given the same task for each of the 36 states and union territories: find the government\'s own scholarship pages and read them.</li>'+
    '<li>For every scheme it looked for nine things: the official name, who runs it, who can apply, the income limit, the marks needed, the amount, the dates for 2026-27, the papers needed, and the rules for renewal and for holding it with another scholarship. It also looked for how many students were paid last year.</li>'+
    '<li>Only government websites and government documents counted as proof. News sites and listing websites were used only to find a scheme\'s name.</li>'+
    '<li>Many government portals do not allow a program to read them. We did not try to get around that. Those schemes stay "not confirmed".</li>'+
    '<li>Every income limit, category rule and closing date that changed was then read a second time on the official page before it went into the tool.</li>'+
    '<li>The central government\'s scheme directory (myScheme) did not load for any state, so nothing comes from it.</li></ol></div>'+
    '<h2>State by state</h2>'+
    '<p class="small muted" style="margin:0">Open a state to see the websites we tried, what happened on each, every scheme we show and what is still missing for it.</p>'+
    '<div class="card">'+STATES.map(dataState).join('')+'</div>'+
    registersHtml()+
    '<h2>Loans and company scholarships</h2><div class="card"><p class="small" style="margin:0">Bank rates were read on each bank\'s own page; see the <a href="#loan">loan guide</a>. State loan schemes and company scholarships are marked with how far each was checked; see the <a href="#private">company and trust scholarships</a>.</p></div>'+
    sourcesHtml()+
    '<h2>Tell us if something is wrong</h2>'+
    '<div class="card"><p style="margin:0 0 8px">If you have a notice, a government order or an answer from a scholarship office that corrects anything here, please send it'+(REPORT_EMAIL?' to '+REPORT_EMAIL:'')+'. Say where you saw it, so we can check it.</p>'+mail+'</div>'+
    '</div>';
}
function route(){var h=(location.hash||'').replace('#','');if(/^s=/.test(h)) return 'schemes';return ['schemes','costs','loan','ready','help','class','sheets','data','private','changes','work','fake','skills','coaching'].indexOf(h)>=0?h:'start'}
function render(){
  var r=route();
  if(r==='class'&&!classMode) r='start';
  if(r!=='start'&&r!=='class'&&r!=='data'&&r!=='private'&&r!=='changes'&&r!=='work'&&r!=='fake'&&r!=='skills'&&r!=='coaching'&&!P&&!(r==='sheets'&&classMode&&roster.length)) r=classMode?'class':'start';
  document.documentElement.lang=lang;
  document.getElementById('langbtn').textContent=lang==='en'?'हिन्दी':'English';
  document.getElementById('langmenu').textContent=lang==='en'?'हिन्दी':'English';
  var tabs=document.getElementById('tabs'); tabs.hidden=!P||r==='start'||r==='class'||r==='sheets';
  document.body.classList.toggle('hastabs',!tabs.hidden);
  var nav=document.getElementById('mainnav'); nav.classList.remove('open'); document.getElementById('menubtn').setAttribute('aria-expanded','false');
  var ns=document.getElementById('nav-sch'); ns.href=P?'#schemes':'browse.html'; ns.textContent=L('Scholarships','छात्रवृत्तियाँ');
  [['nav-sch',['schemes']],['nav-work',['work']],['nav-skills',['skills']],['nav-coaching',['coaching']],['nav-data',['data']]].forEach(function(x){ document.getElementById(x[0]).className=(x[0]==='nav-data'?'only-menu':'')+(x[1].indexOf(r)>=0?' on':'') });
  document.getElementById('nav-work').textContent=L('Internships','इंटर्नशिप'); document.getElementById('nav-skills').textContent=L('Skills','कौशल'); document.getElementById('nav-coaching').textContent=L('Coaching and exam fees','कोचिंग और परीक्षा शुल्क');
  var mb=document.getElementById('mybtn'); mb.href=P?'#schemes':'#start'; mb.textContent=P?L('My matches','मेरे विकल्प'):L('Find my matches','मेरे विकल्प खोजें'); if(P) mb.removeAttribute('data-a'); else mb.setAttribute('data-a','tostart');
  document.getElementById('footcheck').textContent=L('Details last checked '+CHECKED+'. Each scheme shows where its facts come from. Always confirm on the official portal before you apply.','जानकारी पिछली बार जाँची गई: '+CHECKED+'। हर योजना पर उसका स्रोत दिखाया गया है। आवेदन से पहले आधिकारिक पोर्टल पर पुष्टि करें।');
  [['schemes',L('Matches','विकल्प')],['costs',L('Costs','ख़र्च')],['loan',L('Loan','ऋण')],['ready',L('Get ready','तैयारी')],['help',L('If stuck','अगर अटकें')]].forEach(function(t){
    var a=document.getElementById('tab-'+t[0]); a.textContent=t[1]; a.className=r===t[0]?'on':'';
  });
  var home=r==='start'&&step<0, wide=['schemes','work','skills','coaching'].indexOf(r)>=0;
  var pn=P&&['costs','loan','ready','help'].indexOf(r)>=0?'<nav class="pnav" aria-label="'+L('My plan','मेरी योजना')+'">'+[['schemes',L('My matches','मेरे विकल्प')],['costs',L('Costs','ख़र्च')],['loan',L('Loan','ऋण')],['ready',L('Get ready','तैयारी')],['help',L('If stuck','अगर अटकें')]].map(function(t){return '<a href="#'+t[0]+'"'+(r===t[0]?' class="on" aria-current="page"':'')+'>'+t[1]+'</a>'}).join('')+'</nav>':'';
  view.className=home?'':'wrap';
  var html = r==='schemes'?vSchemes(): r==='costs'?vCosts(): r==='loan'?vLoan(): r==='ready'?vReady(): r==='help'?vHelp(): r==='data'?vData(): r==='private'?vPrivate(): r==='changes'?vChanges(): r==='work'?vWork(): r==='fake'?vFake(): r==='skills'?vSkills(): r==='coaching'?vCoaching(): r==='class'?vClass(): r==='sheets'?vSheets(): (step<0?vWelcome():vQuestion());
  view.innerHTML = home?html:'<div class="page'+(wide?' wide':'')+(r==='start'?' qwrap':'')+'">'+pn+html+'</div>';
}
function go(h){ if(location.hash===h) render(); else location.hash=h; window.scrollTo(0,0) }
function applyProfile(src){
  P={}; for(var k in src) P[k]=src[k];
  if(!P.states) P.states=[P.state]; if(!P.courses) P.courses=P.course?[P.course]:[];
  P.states=P.states.slice(); P.courses=P.courses.slice(); P.state=P.states[0]; P.course=P.courses[0];
  if(!P.level) P.level='ug';
  var c=(P.course&&courseOf(P.course))||{yrs:3}, lvo=levelOf(P.level), sc={'11':0.3,iti:0.3,dip:0.6,ug:1,pg:1}[P.level], tu=Math.round({govt:15000,private:90000,qhei:150000,unsure:50000}[P.inst]*sc/1000)*1000;
  cost={years:lvo.yrs||c.yrs,tuition:tu,hostel:36000,food:30000,travel:6000,books:5000,device:20000,exams:5000,coaching:6384};
  counted={}; docs={}; filter='all';
  loan={amt:Math.ceil(costTotals(cost).total/10000)*10000,rate:9.5,tenure:10,salary:25000,months:6};
  step=-1;
}
function finish(){
  isShared=false; badLink=false;
  if(adding){
    var prof={}; for(var k in draft){ if(k!=='label') prof[k]=draft[k] }
    roster.push({label:draft.label||('Student '+(roster.length+1)),P:prof}); saveRoster();
    adding=false; draft={}; step=-1; go('#class'); return;
  }
  applyProfile(draft); go('#schemes');
}
function loadShared(){
  var m=/^#s=([A-Za-z0-9_-]+)$/.exec(location.hash||''); if(!m) return;
  var p=decodeProfile(m[1]);
  if(p){ applyProfile(p); isShared=true; isExample=false; badLink=false }
  else { P=null; badLink=true; step=-1 }
}
function coerce(k,v){ if(k==='adult'||k==='dis'||k==='firstGen') return v==='true'; if(k==='inc') return +v; return v }
document.addEventListener('click',function(e){
  var b=e.target.closest('[data-a]'); if(!b) return;
  var a=b.dataset.a;
  if(a==='lang'){ e.preventDefault(); lang=lang==='en'?'hi':'en'; render(); }
  else if(a==='begin'){ draft={}; isExample=false; badLink=false; step=0; render(); window.scrollTo(0,0); }
  else if(a==='example'){ draft={adult:true,level:'ug',state:'BR',inc:2,cat:'OBC',gender:'F',dis:false,firstGen:true,m12:82,m10:85,course:'eng',inst:'govt'}; isExample=true; finish(); }
  else if(a==='restart'){ e.preventDefault(); draft={}; P=null; isExample=false; isShared=false; step=-1; go('#start'); }
  else if(a==='home'){ e.preventDefault(); step=-1; go('#start'); }
  else if(a==='tostart'||a==='needp'){ e.preventDefault(); if(a==='needp') quick.err=L('Answer the five questions first to open this.','इसे खोलने के लिए पहले पाँच सवालों के जवाब दें।'); step=-1; if(route()!=='start') location.hash='#start'; render(); var qf=document.getElementById('quickform'); if(qf) qf.scrollIntoView({block:'center'}); }
  else if(a==='qlvl'){ quick.lvl=b.dataset.v; render(); }
  else if(a==='quickgo'){ quickGo(); }
  else if(a==='jump'){ e.preventDefault(); var jt=document.getElementById(b.dataset.v); if(jt) jt.scrollIntoView({block:'start'}); }
  else if(a==='more'){ var u=unknowns(P); draft={}; for(var dk in P){ draft[dk]=P[dk] } ['gender','dis','firstGen','m12','m10','courses','course','quickInst'].forEach(function(x){ if(x==='gender'&&draft.gender!=='U') return; if(x==='dis'&&draft.dis!=null) return; if(x==='firstGen'&&draft.firstGen!=null) return; if((x==='m12'||x==='m10')&&draft.m12!=null) return; if((x==='courses'||x==='course')&&draft.courses&&draft.courses.length) return; delete draft[x] }); if(P.quickInst) delete draft.inst; step=steps().indexOf('gender'); isShared=false; location.hash='#start'; render(); window.scrollTo(0,0); }
  else if(a==='back'){ if(step<=0){ step=-1; if(adding){ adding=false; go('#class'); return } } else step--; render(); }
  else if(a==='pick'){ draft[b.dataset.k]=coerce(b.dataset.k,b.dataset.v); next(); }
  else if(a==='toggle'){ var tk=b.dataset.k, ta=draft[tk]||(draft[tk]=[]), ti=ta.indexOf(b.dataset.v); if(ti>=0) ta.splice(ti,1); else ta.push(b.dataset.v); render(); }
  else if(a==='multinext'){ var mk=b.dataset.k, ma=draft[mk]||[]; if(!ma.length){ document.getElementById('multierr').hidden=false; return } if(mk==='states') draft.state=ma[0]; else draft.course=ma[0]; next(); }
  else if(a==='plancourse'){ P.course=b.dataset.v; cost.years=levelOf(P.level||'ug').yrs||courseOf(P.course).yrs; render(); }
  else if(a==='marks'){
    var m12=parseFloat(document.getElementById('m12').value), m10=parseFloat(document.getElementById('m10').value);
    if(['11','iti','dip'].indexOf(draft.level)>=0&&isNaN(m12)&&!isNaN(m10)) m12=m10; /* matching uses the latest board result */
    if(isNaN(m12)||m12<0||m12>100){ document.getElementById('markerr').hidden=false; return }
    draft.m12=m12; draft.m10=isNaN(m10)?null:m10; next();
  }
  else if(a==='coachall'){ coachAll=true; render(); }
  else if(a==='filter'){ filter=b.dataset.v; render(); }
  else if(a==='classmode'){ e.preventDefault(); classMode=true; go('#class'); }
  else if(a==='leaveclass'){ classMode=false; adding=false; go('#start'); }
  else if(a==='addstudent'){ draft={}; adding=true; isExample=false; step=0; go('#start'); }
  else if(a==='canceladd'){ adding=false; step=-1; go('#class'); }
  else if(a==='label'){ var lv=document.getElementById('slabel').value.trim(); draft.label=lv||('Student '+(roster.length+1)); next(); }
  else if(a==='openstudent'){ applyProfile(roster[+b.dataset.i].P); isShared=false; isExample=false; go('#schemes'); }
  else if(a==='rmstudent'){ roster.splice(+b.dataset.i,1); saveRoster(); render(); }
  else if(a==='usebest'){ var bp=bestPlan(matchAll(P).filter(function(m){return m.status==='likely'}),cost.years,0); counted={}; bp.ids.forEach(function(id){counted[id]=true}); render(); }
  else if(a==='instpick'){ var ist=b.dataset.st, ir=INST[ist][+b.dataset.i]; P.instName=ir[0]+(ir[1]?', '+ir[1]:''); P.instRecog=instRecogList(ir,ist); P.instQ=!!ir[5]; P.instWeb=ir[6]||''; P.inst=ir[5]?'qhei':ir[3]==='P'?'private':(ir[3]==='G'||ir[3]==='A')?'govt':P.inst; instQ=''; render(); }
  else if(a==='instclear'){ delete P.instName; delete P.instRecog; delete P.instQ; delete P.instWeb; render(); }
  else if(a==='print'){ try{ window.print() }catch(err){} }
  else if(a==='ics'){
    var now=new Date().toISOString().replace(/[-:]/g,'').slice(0,15)+'Z', txt=buildIcs(calendarEvents(matchAll(P),todayISO()),now), link=document.createElement('a');
    try{ link.href=URL.createObjectURL(new Blob([txt],{type:'text/calendar'})) }catch(err){ link.href='data:text/calendar;charset=utf-8,'+encodeURIComponent(txt) }
    link.download='scholarship-dates.ics'; document.body.appendChild(link); link.click(); document.body.removeChild(link);
  }
  else if(a==='copylink'){
    var inp=document.getElementById('sharelink'), done=function(){ b.textContent=L('Copied','कॉपी हो गया') }, pick=function(){ inp.focus(); inp.select() };
    try{ navigator.clipboard.writeText(inp.value).then(done,pick) }catch(err){ pick() }
  }
  else if(a==='useGap'){ var t=costTotals(cost), sc=countedTotals(); loan.amt=Math.ceil(Math.max(0,t.total-sc.total)/10000)*10000; }
});
function next(){ var ks=steps(); if(step>=ks.length-1) finish(); else { step++; render(); window.scrollTo(0,0) } }
document.addEventListener('input',function(e){
  var el=e.target, f=el.dataset&&el.dataset.f; if(!f) return;
  if(f==='instq'){ instQ=el.value; var io=document.getElementById('instout'); if(io) io.innerHTML=instResults(); return }
  if(f==='num'){
    var v=parseFloat(el.value); if(isNaN(v)||v<0) v=0;
    var id=el.id.split('-'), o=id[0]==='c'?cost:loan, key=id[1];
    if(key==='years') v=Math.max(1,Math.min(8,Math.round(v)));
    if(key==='tenure') v=Math.max(1,Math.min(15,Math.round(v)));
    o[key]=v;
    var out=document.getElementById('out'); if(out) out.innerHTML=id[0]==='c'?costOut():loanOut();
  }
});
document.getElementById('menubtn').addEventListener('click',function(){ var n=document.getElementById('mainnav'), o=n.classList.toggle('open'); this.setAttribute('aria-expanded',o?'true':'false') });
document.addEventListener('change',function(e){
  var el=e.target, f=el.dataset&&el.dataset.f;
  if(f==='q'){ quick[el.dataset.k]=el.value; if(quick.err){ quick.err='' } return }
  if(f==='count'){ counted[el.dataset.id]=el.checked; }
  if(f==='doc'){ docs[el.dataset.id]=el.checked; render(); }
  if(f==='keeproster'){ keepRoster=el.checked; saveRoster(); }
});
window.addEventListener('hashchange',function(){ loadShared(); render(); window.scrollTo(0,0) });
try{ var saved=JSON.parse(localStorage.getItem('sn_roster')||'null'); if(Array.isArray(saved)&&saved.length){ roster=saved.filter(function(x){return x&&x.P&&decodeProfile(encodeProfile(x.P))}); keepRoster=true } }catch(e){}
loadShared();
render();
if((location.protocol==='https:'||location.hostname==='localhost'||location.hostname==='127.0.0.1')&&'serviceWorker' in navigator){ try{ navigator.serviceWorker.register('sw.js') }catch(e){} }
