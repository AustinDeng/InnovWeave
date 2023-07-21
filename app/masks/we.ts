import { BuiltinMask } from "./typing";
import profilePic1 from "@/public/企鹅1.png";
import profilePic2 from "@/public/企鹅2.png";
import profilePic3 from "@/public/企鹅3.png";
import profilePic4 from "@/public/运维.png";

export const WE_MASKS: BuiltinMask[] = [
  {
    avatar: "1f5bc-fe0f",
    pic: profilePic1,
    name: "运维交接",
    context: [
      {
        id: "maintainence-0",
        role: "user",
        content:
          "请简要说明交接系统的概述、环境配置、部署架构、系统组件、数据库信息、网络设置、监控和告警、安全措施、常见问题和故障排除、联系信息。",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: false,
    createdAt: 1688899480511,
  },
  {
    avatar: "1f5bc-fe0f",
    pic: profilePic2,
    name: "监控告警",
    context: [
      {
        id: "maintainence-0",
        role: "user",
        content:
          "请简要说明交接系统的概述、环境配置、部署架构、系统组件、数据库信息、网络设置、监控和告警、安全措施、常见问题和故障排除、联系信息。",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: false,
    createdAt: 1688899480511,
  },
  {
    avatar: "1f5bc-fe0f",
    pic: profilePic3,
    name: "常见问题",
    context: [
      {
        id: "maintainence-0",
        role: "user",
        content:
          "请简要说明交接系统的概述、环境配置、部署架构、系统组件、数据库信息、网络设置、监控和告警、安全措施、常见问题和故障排除、联系信息。",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: false,
    createdAt: 1688899480511,
  },
  {
    avatar: "1f5bc-fe0f",
    pic: profilePic4,
    name: "代码生成",
    context: [
      {
        id: "maintainence-0",
        role: "user",
        content:
          "请简要说明交接系统的概述、环境配置、部署架构、系统组件、数据库信息、网络设置、监控和告警、安全措施、常见问题和故障排除、联系信息。",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "cn",
    builtin: false,
    createdAt: 1688899480511,
  },
];
