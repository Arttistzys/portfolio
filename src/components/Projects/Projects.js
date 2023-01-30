import React, { useState } from 'react';

import { Image } from 'antd';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';


const ImageBooking = ({ img, imgList, keyImg }) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Image
        key={`raw-img-${keyImg}`}
        preview={{
          visible: false,
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          overflow: 'hidden',
        }}
        src={img}
        onClick={() => setVisible(true)}
      />
      <div key={`preview-img-${keyImg}`} style={{ display: 'none', }}>
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          {imgList && imgList?.length && imgList.map((e, i) => <Image key={e + i} src={e} />)}
        </Image.PreviewGroup>
      </div>
    </>
  );
};


const Projects = () => (
  <Section id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i + p.title}>
            {/* <Img src={p.image} /> */}
            <ImageBooking img={p.image} imgList={[p.image, ...p.imageList]} keyImg={p.image} />

            <HeaderThree title={p.title}>{p.title}</HeaderThree>
            <Hr />

            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <Hr />
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i + t + p.title}>{t}</Tag>;
                })}
              </TagList>
            </div>
            {/* <UtilityList>
              <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
              <ExternalLinks href={p.source}>Source Code</ExternalLinks>
            </UtilityList> */}
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;