'use client';

import React from 'react';
import { createProjectDepartments } from '@/helpers/api';

const items = [
  {
    id: '9e226a72-a1fd-4d60-9663-61d9542013e9',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'fc26881c-3d7a-4502-b28a-15d4346131c4',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'a48edc7b-a61d-4ea0-ae9f-d6b0b1e8a5b9',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'a4ce5418-3f5b-4683-9dee-233ba60b6c4b',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '86c0b486-0479-40d7-ac67-d6ea09329c09',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '4f90c5ae-003a-4b5d-b704-56b251cc2139',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '2a48faa0-a17a-4192-af7d-a753917215a8',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'e550a89a-3224-420e-875e-c615fd134d46',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'e3efb0e6-d804-402a-9f30-fb9d8ad16001',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '9ed01afa-6a4a-4479-b4e7-cfc1f2464353',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '28ad6c97-4607-47de-be8c-fe4d4f702eb5',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'a3884ebe-4268-4d49-be7e-d3c1a4b98d89',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '2dcab68c-78a4-4429-b6d8-91fb793964e9',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '83f74710-3a81-48cb-af29-5e58cd0ab064',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '2ef635f5-84fb-4528-966a-503eb735ba46',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '040837b6-b87b-42eb-88c2-60f9e43c4ba9',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '5d24cca6-efb0-4624-b3f0-68a6821ddebb',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '0a308681-62c2-4253-a347-5e1a6bc7457b',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'dd47d4a4-7630-4a8f-a9c8-4b9ac2d0bfba',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '92d46aa3-8e14-442c-b53b-52a0e1e74675',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '91b003e0-6106-40ef-9084-0cf4f8b25b3d',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '1f4ba0a1-ba84-499f-ba2a-edb71347b915',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '64548e38-9fe9-4462-a878-b25d579e9034',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '77764d50-51bc-41a4-8d9f-fbb8adb9506b',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '2777b0fe-54dd-4091-8d31-e44cf3b732c3',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '8c6c18db-2572-4542-9ba1-c7efbfd1215a',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'ebed23b6-c32c-4d3a-99ea-7811fd878bce',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'be8f65e0-eb01-4b99-9c3a-c684d71cb90b',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '44632776-17ca-43c9-b47d-17a04bb740dc',
    departmentProjectsId: '4dfd71af-51a3-4af9-874f-da260e081f08',
  },
  {
    id: 'cec49037-7513-4fae-9033-f900210f4523',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '518be069-83bc-49b0-988b-6ce888e99631',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'f8eae54d-b559-4169-ab33-07f611474534',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '8590c934-79b1-40ab-be7d-ad0776c6786c',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'b49b019f-1129-4a0f-b005-22afa27d10c8',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '76525d4c-db79-4bce-a201-3f991c85303e',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'c80d96c3-7c31-4066-a7e1-18d6bdd3a8f7',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'b441862a-78f8-4978-8950-e766b3da994c',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'ccd05e96-aa43-4f7c-8ec5-bca881949c1b',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'a0074890-8a72-49f9-bce1-efe11d9282de',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'c32cea12-b1da-4013-8c11-93b8bcef7647',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'a823fea6-86c7-41ef-8ff3-0d93a41b85d8',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '04c9da30-40f3-4ed6-9b6e-e440d172ca21',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '5e06bd79-29ac-4590-877a-b83c90fbf156',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'ebd658ea-3b4f-4667-bdf8-061c3c73240e',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'd3731a93-a750-4e15-bd3c-4f8a15644728',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'a49a6351-56bf-4343-83b9-0efa3635f4e2',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'fbe6119a-7e7a-433e-b4d2-5a1cd971dfe5',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '583eb520-2c98-44d1-8a27-e5e281f58445',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '34f2575f-c738-41b7-8295-c1395293025e',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '7fb9f959-02d7-400f-9460-a56559607bbf',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '72697133-e61f-4bfc-9fa4-c0bd557f53fa',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '8de63c83-23f1-465c-8452-9ba7dad919de',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '8f43365e-899b-4c32-8efa-45ec95dafcc7',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '972fdb0b-f822-4538-acc9-72d8893a20b2',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'd7c616e7-48bc-44d7-9206-70a827118643',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '77a59bef-34a7-4660-a6a9-648be836b959',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'e264333e-9e72-4baa-b2fe-0a90a7fd8801',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '071d6e41-c7f4-4d83-a2f9-5e6a6ab2a9d3',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '5070580c-27c5-4202-84c4-8e6979e325c1',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'd0ad8aa1-b92f-4126-a393-55ba4d6950a8',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'da6d9b1e-c145-47b2-aebd-5fbecf6ecb3b',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '7856172f-addc-4391-b225-636237d7d8e6',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '7554270a-4167-4148-a80d-ceb21ec0de7c',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'ee6c3ce4-fab2-474c-827e-8555658c050e',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '0ef4c2bf-5620-434f-99fe-f9c3900beac2',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '6953227e-1c8b-4eea-8961-919b908bdeda',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'e177823b-942f-4d56-8cc0-dca0e2457959',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '193109ab-3744-47bd-8c11-026583d16048',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'c69930a9-88e7-4c5e-a902-11b82e21f750',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '3977d16b-387d-4341-8f75-ce8621a5bb6d',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'ec7ee413-7b68-4f2d-a293-b9974996fde7',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'dd322e8c-3e27-4d7a-873d-f5c1ee8c7c9e',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'f81377c6-c61c-4293-9890-cbcd246521c5',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'f0d61bd2-3eac-47b6-9f44-f5b08fdbce95',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '59dc8a97-4dcb-46ec-b887-4c33de5b881e',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '52e117bd-dd78-438c-81f2-1c91fc000edb',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'e8041824-ecd9-4642-9dec-44d27e08bc55',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'eb4bb4ea-cf00-45dd-8bf4-81a9075c98eb',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '5cc166e9-28c1-4cfb-bec1-e7e5ab679dfb',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'dbf12935-c9c0-4641-8f66-953a0052a5ae',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '93349867-1c1c-4baa-8189-6f6404c87077',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '87c7098c-8df1-4a95-a7fa-c3754abacf5a',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '5ac8f8b2-2a0b-4d85-8876-e7e5239aa92b',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'c055a600-95e7-4340-b617-b367af0ce88e',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '0d7347f1-1230-45d0-8ebf-15050a3b1067',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '36615d12-b5e5-4d21-a415-fad34bdf7f78',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'fab4c443-ce48-48ca-8edc-1658dce945c6',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '2a214de5-1698-4586-82ea-2d8c799efdf8',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'debc43c5-7942-4d7c-9792-c18176b1c70b',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'e3e87ca2-b9c8-48b7-8a07-cf59f30514da',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '5f7dd641-cdae-4640-bbab-0279ac67c596',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '353f6590-3c15-4f91-8349-a4982b5ffb70',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '7bf829ba-6f65-436e-821a-fab6d0a89ae3',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'ae747af4-2478-47a5-9834-042e2c94c2c3',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '4c81f97d-ba30-4528-8d49-6ca88dfaf965',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '84229ace-2404-448f-b37c-4df7509b55fd',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'f1ba8a90-1b30-47c2-ac71-946cb65549bd',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'a73582b9-1f1d-4550-aea2-9986c4f7ee34',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '9a49acba-d717-483c-94d8-e7e2a69c714e',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '39dca27e-da5a-4a5f-9843-0d6c6b38f817',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '9db981c8-5588-4d8c-991a-a636cf5f18e2',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '1539917d-65a6-419e-8557-55e5f432cfa8',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '16d7593e-7d22-465a-87e2-a2b60f38ac0c',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '3ecabd8a-f8f7-4fd5-82b7-36979968c6df',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '4c486de0-b920-4a58-9753-a9e87cff065a',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '0751ff33-9252-448f-8cf9-7067a8a4569c',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '440314c2-1613-4d01-992f-34f33e75214f',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '83584b66-2fe1-42dd-a812-728f94777a7d',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'bd6217a8-f029-48d9-b689-9aa7b41b1186',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '07f14cb9-ec32-430d-9db9-236a96fcd82a',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '1e3c567b-45e3-45cc-867d-6aee0db7add2',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'e2d5e508-28dd-4c6c-9915-d416ba2b5e68',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '0a150a94-8db7-4afb-94b5-f8b4e997af28',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'f21058ff-a1a1-4013-a7ea-48817afddd74',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '0a7ca3ec-6876-4c6a-8cf0-3842c8598761',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '8f44787d-6fbe-4d08-98fa-1a3769874400',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '42ad133b-ad52-43c8-94de-1f301a04e1eb',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '4feac2a1-c45d-4b48-9ffb-a91360016bc9',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '1bf46fc6-164c-4d98-b553-de1730c2a410',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'b01b2fdf-1228-4570-8979-650ca0e607bd',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'cfd5dc82-e226-4a3f-b1bd-7ec0833fcbbc',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '669202cb-f330-434b-bd43-c59fb26a820d',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'b79ce922-38ba-4a8c-9c9a-af9ce9a17642',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '8739e6a7-98cf-4d44-82b9-60c421bea568',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'cf2aadf1-eba9-49f0-974c-e780e2f1489e',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '5761c3ef-a2b8-4a06-b0e6-79a37b1c95d3',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'e732e5a8-25f7-483c-bd34-32595302b42a',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'e367db15-a700-44cb-9558-0cea7bc6a1b3',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '9ffaf4f4-1eb8-428e-b30f-9b906de31081',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'a4233775-f3bd-4f32-a26a-92871527725a',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'ae37e4c5-ac97-42b2-9343-cd9b0ad43c0f',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '227e24c1-fb32-42cf-8480-1fca60e279f7',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '91c95a31-77ae-4889-a66e-c614a72832eb',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '4726486f-7aec-48cd-9075-8f6eb5181b07',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '41e61efc-3125-4224-af9c-1cb0f0ee3d40',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'e099e0ac-35a0-477b-98e7-a3f1ed1de554',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'ddc29889-b2c8-4552-8397-dd66a2e4a234',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'f164befa-2d9d-423b-b1c0-50b12e90ea8b',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '1d529980-47b8-4d95-9f92-6cf9efdf9332',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '60467ac3-adf5-4726-b14c-1136961cf6f4',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '86a36f1a-e6c4-4468-a376-184c96e9e8ab',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'bdf9b644-3546-44ac-891c-6931bf7dc72e',
    departmentProjectsId: '4dfd71af-51a3-4af9-874f-da260e081f08',
  },
  {
    id: '023f7916-883e-43e0-a68b-ec3a64ddbebf',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '370744e4-06e6-41aa-b54c-03a64faaddd3',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'c6137e13-80aa-4ae1-b1a7-24f301d77d0d',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '3fbb8d2a-4e8f-426d-8683-7bf06079fa04',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '0f8060b3-1b78-4166-ae4e-cc225643dc65',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '19aa8372-813e-4bc0-af94-e053c3a5a64a',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '62208061-c6a2-409b-8cfd-357557321ed8',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '71a05956-562c-413a-8f29-de915b52e990',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '87644765-7964-48f2-b074-5957e98f9e7a',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'd777d7a7-a856-4fac-b564-55e6f354f69d',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '2058c2d9-7ab4-4e71-994f-4bf3dfba35c7',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'f74f63fc-3f4b-4993-9f9b-ed9b6c55a52e',
    departmentProjectsId: '4dfd71af-51a3-4af9-874f-da260e081f08',
  },
  {
    id: '9d6739f4-089f-4b85-9896-67db5687630a',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'dfe70b0c-92cc-4439-a364-bc4f5b929555',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '367b94c6-d257-4b9d-97c0-1a5f8a283427',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '23dc2493-4658-46b0-83ff-7be811b43813',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '6c0d3bc0-7c70-44ed-94a3-004620d1afb4',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'fa28d4a8-ae03-42d9-9e8c-9c37ddc2349e',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'a44090a1-bd8a-4dfb-a794-2fdc35ffd8af',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'a34e12ed-e9f6-4f57-bec9-ee2da773be1d',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '0f816066-3ecf-4f62-819b-fdc6d61daa2d',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'de57f5b0-a944-4dd8-9b99-bcf675027e3f',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'da47e763-ccd7-4d3e-814e-78e9cd64e176',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '2ba53e12-bc8c-4c13-ab55-36fa5261289b',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '9bcb78ee-90aa-40a8-a2ed-fe9a9394046d',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '7a5cd0ae-b5d9-48e5-abc2-554098212fc9',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '559a35a8-9dcc-4f7b-9983-932f41b5edb9',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '5c375c3a-371c-4e82-b238-62ba89a686bd',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '820a8d5c-28a1-4e28-b1e8-2ff8f0c870b7',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '8b9dfcc7-3bc5-4cfb-afcb-54c6bf465726',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '74f0c558-602d-40d8-a9e1-5379d2dcc1af',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '4b974390-f88e-423b-8d78-d3f550fda791',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '00ba06a7-6cb9-443a-ae12-f6e11d613105',
    departmentProjectsId: '6cd6cac5-1533-45e3-8e9a-d4e1472def9a',
  },
  {
    id: '87bce3f7-c7d6-458f-bc4c-5993abdfc285',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '6eecdb38-45e6-4c55-81d5-e1ce2cda2269',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '0a32e5dc-c825-4085-ab83-6ab3ff96375b',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'b869d349-2873-4953-833c-268c3d9dbdab',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'f7998d17-ae86-4d00-afae-68e3b428910c',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'd6eec741-a722-4864-9a6e-74885cb67690',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'e176261c-17e7-4ff4-965a-38ce2459d84b',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '6bddc717-ca75-42b9-9f69-ef2321020fda',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'cda2f6db-c3f0-4651-9d15-403f67064079',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'fd41c97e-7ad0-4760-91b4-f711dea37ef2',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'd7701cd6-5675-4ece-9404-8b4ed02eea55',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'b841ee56-d444-4bca-947b-f172f1810b11',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '6537e5a1-daae-4bc4-acf3-4021aeaadcd0',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '115a1b8e-5813-464b-b233-06ce194229fe',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'ed35a22b-6ed2-48ee-b45e-b168151425d6',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '6c587817-926c-4b46-9560-6fc299ad6950',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '8d85a084-6fbd-4111-ba27-1e2ba09e6536',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '9447e15d-74fe-416a-9e02-4d419cc678d3',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '0aecba61-428e-410d-a08e-3eb5650de07a',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'aa322e17-14f7-417c-bf1c-6353fc56eed8',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'e1b6ee1f-d61a-45d8-9927-94cb128ca6c7',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '3295e3af-6ac6-4145-9af5-bb2e1987e963',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'c5fc17c9-37f2-4827-bf9e-894385d92855',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '0bf03fbe-417a-40ad-a1ef-84c5983f5197',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '384096e1-faa2-4fe2-b0fe-756d0bb1fe1e',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'db8c3508-5993-4f68-9655-372b9f917840',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'fa221df1-9939-4658-b585-84c3f1d5d5be',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'd50abb56-dfe2-4645-a197-1b3252595268',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '7af71012-e463-47bd-992a-26825aceb8b4',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'cd985e08-f77d-4f64-be6f-b8ecf98e99bf',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '3aed2024-8aa7-491b-ab2e-5cab51d07d5b',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: 'fc7c7d9d-ce69-439d-bef4-23cd33e97cd4',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
  {
    id: '127dc6fc-7527-474a-a62a-c023b5956aa0',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'f8aa5734-0d4b-422d-87b3-98c012d1614e',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: 'bb7d2326-a07c-4d7c-b6e7-a3c43fee3a2c',
    departmentProjectsId: '0e20ac00-ec5f-464a-86d3-61ddc90e9aa7',
  },
  {
    id: '9d6e2888-1291-46e5-a47a-e07a100eba2e',
    departmentProjectsId: '0cd75086-b396-4c52-a907-5b52fb6aeedd',
  },
];

const createAllProjectDepartments = async () => {
  try {
    // Map through items and create project departments
    const promises = items.map((item) =>
      createProjectDepartments(item.id, item.departmentProjectsId)
    );

    // Wait for all promises to resolve
    await Promise.all(promises);

    console.log('Successfully created project departments for all items');
  } catch (error) {
    console.error('Error creating project departments:', error);
  }
};

const Page = () => {
  return (
    <div className='max-w-5xl w-full mx-auto py-16 flex flex-col gap-10'>
      <h1 className='text-2xl font-bold w-full border-b border-gray-400 pb-4'>
        Tools
      </h1>
      <div className='grid grid-cols-4 gap-10'>
        <div
          className='w-full p-5 border border-gray-400 rounded-md text-center'
          // onClick={createAllProjectDepartments}
        >
          Create Project Departments
        </div>

        {/* <div
          className='w-full p-5 border border-gray-400 rounded-md text-center'
          onClick={pullAllImagesIntoGalleries}
        >
          Pull All Images into Galleries
        </div>
        <div
          className='w-full p-5 border border-gray-400 rounded-md text-center'
          onClick={putAllImagesIntoGalleries}
        >
          Download Images into Folders
        </div>
        <div
          className='w-full p-5 border border-gray-400 rounded-md text-center'
          onClick={updateProjectGalleries}
        >
          Update Project Galleries
        </div> */}
      </div>
    </div>
  );
};

export default Page;
