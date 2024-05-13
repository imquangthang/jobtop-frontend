// CVTemplate.js
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    marginBottom: 20,
    flexDirection: "row",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  subHeader: {
    marginBottom: 10,
    fontWeight: "bold",
  },
});

const CVTemplate = ({
  name,
  jobTitle,
  email,
  phone,
  aboutMe,
  skills,
  education,
  experience,
  imageSrc,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Image src={imageSrc} style={styles.image} />
        <View>
          <Text style={styles.headerText}>{name}</Text>
          <Text>{jobTitle}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text>Email: {email}</Text>
        <Text>Phone: {phone}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>About Me</Text>
        <Text>{aboutMe}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Skills</Text>
        {skills.map((skill, index) => (
          <Text key={index}>- {skill}</Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Education</Text>
        {education.map((edu, index) => (
          <Text key={index}>- {edu}</Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Experience</Text>
        {experience.map((exp, index) => (
          <Text key={index}>- {exp}</Text>
        ))}
      </View>
    </Page>
  </Document>
);

export default CVTemplate;
