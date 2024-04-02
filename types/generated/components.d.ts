import type { Schema, Attribute } from '@strapi/strapi';

export interface TopicsContent extends Schema.Component {
  collectionName: 'components_topics_contents';
  info: {
    displayName: 'Content';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    input: Attribute.Text;
    output: Attribute.Text;
  };
}

export interface TopicsCourseListTopics extends Schema.Component {
  collectionName: 'components_topics_course_list_topics';
  info: {
    displayName: 'CourseList-Topics';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    Content: Attribute.Component<'topics.content', true>;
  };
}

export interface VideoTopicsVideoTopics extends Schema.Component {
  collectionName: 'components_video_topics_video_topics';
  info: {
    displayName: 'Video-Topics';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    videoURL: Attribute.String;
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'topics.content': TopicsContent;
      'topics.course-list-topics': TopicsCourseListTopics;
      'video-topics.video-topics': VideoTopicsVideoTopics;
    }
  }
}
