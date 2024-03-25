import type { Schema, Attribute } from '@strapi/strapi';

export interface TopicsCourseListTopics extends Schema.Component {
  collectionName: 'components_topics_course_list_topics';
  info: {
    displayName: 'CourseList-Topics';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    Content: Attribute.Media;
  };
}

export interface VideoTopicsVideoTopics extends Schema.Component {
  collectionName: 'components_video_topics_video_topics';
  info: {
    displayName: 'Video-Topics';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Blocks;
    videoURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'topics.course-list-topics': TopicsCourseListTopics;
      'video-topics.video-topics': VideoTopicsVideoTopics;
    }
  }
}
