import axios from 'axios';

import config from '../config';

const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ3NjM1YWI2NDZlMDdmZDE5OWY3NGIwMTZhOTU0MzkyMmEwY2ZmOWEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vam91cm5leWZvb2RzLWlvIiwiYXVkIjoiam91cm5leWZvb2RzLWlvIiwiYXV0aF90aW1lIjoxNTc2NzQwODE5LCJ1c2VyX2lkIjoiQjI3MjQySmloZ1JPcmhjTkRMR2puWWFTa3lRMiIsInN1YiI6IkIyNzI0MkppaGdST3JoY05ETEdqbllhU2t5UTIiLCJpYXQiOjE1NzY3NDA4MTksImV4cCI6MTU3Njc0NDQxOSwiZW1haWwiOiJkZW1vQGpvdXJuZXlmb29kcy5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGVtb0Bqb3VybmV5Zm9vZHMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.nZBYazL4_OAYLb4CcH8Ypr547JuxI9VmQ-5Xd2PVjM4qPb3Qe_pwv4rhOws8ZFiPxipeFEE9bTHItWd-sbL6IzyrrorN5O6DvRSpcZ3puHgFwov1BNQ14EsF9yQAYlTrgA15Kxu0Pm5tPxuy_GLmbJAg430vO4jQGwCzUkKnaKtiqpi0V4oCd_IGbFnLyWVP_qKNQcI3qjRzCaC8J8IU6uV-apb7lo1z9VXeE_-dxDAZ2Jzgx7V2zEVS2SkwNPl4eM-Y2mBWzPBhJE1K3JcH27xCY-kdOluXEuHwcENmOTKvmrvRid2BKVb1f7ckA7j4ZdQhYULtsKtlNmPJcEMPNA`

    // `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ1OThkYjVjZjE1ZWNhOTI0OWJhZTUzMDYzOWVkYzUzNmMzYzViYjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vam91cm5leWZvb2RzLWlvIiwiYXVkIjoiam91cm5leWZvb2RzLWlvIiwiYXV0aF90aW1lIjoxNTc2NjczNTk4LCJ1c2VyX2lkIjoiQjI3MjQySmloZ1JPcmhjTkRMR2puWWFTa3lRMiIsInN1YiI6IkIyNzI0MkppaGdST3JoY05ETEdqbllhU2t5UTIiLCJpYXQiOjE1NzY2NzM1OTgsImV4cCI6MTU3NjY3NzE5OCwiZW1haWwiOiJkZW1vQGpvdXJuZXlmb29kcy5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGVtb0Bqb3VybmV5Zm9vZHMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.qrPmppfF9Lt0Fxg4lzgqIHwEOhJie_kAOrAHt_pUy2Gvn9aKslbrF2gDaBlauUkV78BHAaFxPpbh-MQrFYcSz5BAfc0c4VdlIjOi2ULRdfUSyeWJRxl6Q2gkyZEd9FSasNFv80K9r4ThDf-qwKiF5dGlWR0Wf2hOzINVmMuT0qJhvPxdCFzbvJt9xIN4iM3IWr7bhPB7pLYLxsfTtFZtLvOAcuwcfrNZaTNVAWU3iS25owgkSK14cI8_98OU3dzQLBvAakg2Lnp55DpHiTj25Jtvzl_87PULkjWURfh_-kNtZB8SoJ1xKT-9kPfGWgduliA3qIwzmpPo9Q6UFXm-uw`
  },
  timeout: 0
});

/**
 * HTTP request interceptor.
 */
// http.interceptors.request.use(config => {
//   let accessToken =
//     'eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ1OThkYjVjZjE1ZWNhOTI0OWJhZTUzMDYzOWVkYzUzNmMzYzViYjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vam91cm5leWZvb2RzLWlvIiwiYXVkIjoiam91cm5leWZvb2RzLWlvIiwiYXV0aF90aW1lIjoxNTc2NjYzNzQ5LCJ1c2VyX2lkIjoiQjI3MjQySmloZ1JPcmhjTkRMR2puWWFTa3lRMiIsInN1YiI6IkIyNzI0MkppaGdST3JoY05ETEdqbllhU2t5UTIiLCJpYXQiOjE1NzY2NjM3NDksImV4cCI6MTU3NjY2NzM0OSwiZW1haWwiOiJkZW1vQGpvdXJuZXlmb29kcy5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZGVtb0Bqb3VybmV5Zm9vZHMuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.ENQPn6UDrwh36-kM1ivGQfTkllWgkxlTfVOlpbGNFcHqXekPe3yBmWsIT_Q8XtKLp-KdszKZFhserjt8AJQywKB1gB2HJGRDMu6XZOtGrhOMsnAfAiNhMPc3KFOh0KwTFS40J8rFUapukmEQPAPok_iH2r9Bx1xVdOxdZhSADpk3hZ9YD5eg7cqMOZRFz-UKoqgj1lup0uFdpV5RdxfEe8jU9XpaoYp1KGPw3HyGuYU_O2en4IrxE_dTxV-MM2qU4zLccLRVy7WfUIlrns2XbnE96ycTUNpEpgPIohZr7kBEVm3KmAd3wL414TXCJwfxZMR16Wwwv-qrnJEpN1ifpw';
//   config.headers.Authorization = `Bearer ${accessToken}`;

//   return config;
// });

export default http;
