import * as fs from "fs"
import * as path from "path"

import { XmlToDmnParser } from "./xml-to-dmn-parser"

it("should parse a dmn xml file", () => {
  // given
  const parser = new XmlToDmnParser()
  const xml = fs.readFileSync(path.join(__dirname, "__tests__", "single-hit-unique.xml"), "utf8")

  // when
  const dmn = parser.parse(xml)

  // then
  expect(dmn).toMatchSnapshot()
})
