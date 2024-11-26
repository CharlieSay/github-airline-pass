import { MemberStatus, StatusConfig } from "./types";

export const MEMBER_STATUS_CONFIG: Record<MemberStatus, StatusConfig> = {
  ROOKIE: {
    threshold: 2,
    backgroundColor: "bg-green-500",
  },
  GOLD: {
    threshold: 5,
    backgroundColor: "bg-yellow-500",
  },
  PLATINUM: {
    threshold: 8,
    backgroundColor: "bg-gray-300",
  },
  DIAMOND: {
    threshold: Infinity,
    backgroundColor: "bg-blue-300",
  },
} as const;

export function getMemberStatus(experience: number): MemberStatus {
  const status = Object.entries(MEMBER_STATUS_CONFIG).find(
    ([_, config]) => experience < config.threshold
  );
  return (status?.[0] as MemberStatus) ?? "DIAMOND";
}

export function getMemberStatusColor(status: MemberStatus): string {
  return MEMBER_STATUS_CONFIG[status].backgroundColor;
}
