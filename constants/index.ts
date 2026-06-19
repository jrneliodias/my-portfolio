import { projectDataPt, timelineDataPt } from './data/pt';
import { projectDataEn, timelineDataEn } from './data/en';
import type { ProjectData, TimelineData } from './types';

export function getProjectData(locale: string): ProjectData {
  return locale === 'en' ? projectDataEn : projectDataPt;
}

export function getTimelineData(locale: string): TimelineData {
  return locale === 'en' ? timelineDataEn : timelineDataPt;
}

export type { ProjectData, TimelineData, ProjectItem, TimelineItem, TextBlock } from './types';
