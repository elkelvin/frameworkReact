import React from 'react';
import "./../css/home.css"
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  ListInput,
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardContent,
  Chip,
  Icon,
  Toggle
} from 'framework7-react';

const warehouse = [
  "110-San Jose",
  "111-Milpitas",
  "112-Lincoln",
  "115-San Diego",
  "116-Advanced Foam Packaging",
  "117-Livermore",
  "120-Orange County",
  "125-Robertsdale",
  "130-Tualatin",
  "132-Tigard",
  "136-Redmond",
  "145-Tech Ridge",
  "147-Round Rock",
  "150-Houston",
]

const tblResults = [
  {
    partNo: "D000000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    revision: "1.0",
    cost: 250.00,
    laborTime: 10,
    validated: "XXXXXX",
    date: new Date(2022, 11, 7),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    revision: "1.0",
    cost: 250.00,
    laborTime: 10,
    validated: "XXXXXX",
    date: new Date(2022, 11, 7),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    revision: "1.0",
    cost: 250.00,
    laborTime: 10,
    validated: "XXXXXX",
    date: new Date(2022, 11, 7),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    revision: "1.0",
    cost: 250.00,
    laborTime: 10,
    validated: "XXXXXX",
    date: new Date(2022, 11, 7),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    revision: "1.0",
    cost: 250.00,
    laborTime: 10,
    validated: "XXXXXX",
    date: new Date(2022, 11, 7),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    revision: "1.0",
    cost: 250.00,
    laborTime: 10,
    validated: "XXXXXX",
    date: new Date(2022, 11, 7),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    revision: "1.0",
    cost: 250.00,
    laborTime: 10,
    validated: "XXXXXX",
    date: new Date(2022, 11, 7),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  },
  {
    partNo: "D000000",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum lacinia vitae velit non convallis",
    revision: "1.0",
    cost: 250.00,
    laborTime: 10,
    validated: "XXXXXX",
    date: new Date(2022, 11, 7),
    notes: "Lorem ipsum dolor sit amet",
    inStock: true
  }
]
const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar sliding={true}>
      <NavLeft>
        <img src="assets/logo-tpk.png" width="150" height="53" />
      </NavLeft>
      <NavTitle></NavTitle>
      <NavRight>
        <Link>Welcome, Enrique L</Link>
      </NavRight>
    </Navbar>


    <Page>
      <Block inset={true}>
        <Card>
          <CardHeader>
            <div></div>
            <span className='gl-color'>Search options</span>
          </CardHeader>
          <CardContent>
            <Row>
              <Col width={35}>
                <List inset={true} className="lc-organized">
                  {/* <ListItem className='gl-noAfter'>
                    <span className='item-label gl-noAfter'>CM PN (Max. 10 items)</span>
                  </ListItem> */}
                  <ListInput
                    label="CM PN (Max. 10 items)"
                    type="text"
                    clearButton
                    placeholder="Crate Maker PN"
                  >
                  </ListInput>
                  <Chip text="Add" slot='list' style={{ "transform": "translateY(50%)" }} className='lc-btnAdd' />

                  {/* <ListItem> */}

                  {/* <Chip text="Add" slot='list'/> */}
                  {/* </ListItem> */}
                  {/* <Toggle slot="after"></Toggle> */}

                  {/* <ListItem title="CM PN (Max. 10 items)">
                    <Chip text="Add" slot='after' />
                    <span slot='list'>ddss</span>
                  </ListItem> */}
                  {/* <Chip text="Add" slot='after' /> */}
                  {/* </ListItem> */}
                </List>
              </Col>
              <Col width={65}></Col>
            </Row>

            <Row>
              <Col width={35}>
                <List inset={true} className={'lc-organized'}>
                  <ListInput
                    label="Sage PN (Max. 10 items)"
                    type="text"
                    clearButton
                    placeholder="Sage PN"
                  >
                  </ListInput>
                  <Chip text="Add" slot='list' style={{ "transform": "translateY(50%)" }} className='lc-btnAdd' />
                </List>
              </Col>
              <Col width={65}>
                <List inset={true} className="margin-left">
                  <Chip text="Add" slot='list' style={{ "transform": "translateY(50%)" }} className='gl-mx-2' />
                </List>
              </Col>
            </Row>

            <Row>
              <Col width={35}>
                <List inset={true} className="lc-organized">
                  <ListInput
                    label="Customer PN (Max. 10 items)"
                    type="text"
                    clearButton
                    placeholder="Customer PN"
                  >
                  </ListInput>
                  <Chip text="Add" slot='list' style={{ "transform": "translateY(50%)" }} className='lc-btnAdd' />
                </List>
              </Col>
              <Col width={65}></Col>
            </Row>
            <Row>
              <Col width={100}>
                <ListItem className='gl-mx-3 lc-select' title="Site" smartSelect={true} smartSelectParams={{ openIn: 'popup', searchbar: true, searchbarPlaceholder: 'Search Site' }}>
                  <select name="site" multiple={true}>
                    {warehouse.map((x, i) => (<option value={i} key={i}>{x}</option>))}
                  </select>
                </ListItem>
              </Col>
            </Row>

            <Row>
              <Col width={100} className="display-flex justify-content-center">
                <Button fill>Search</Button>
              </Col>
            </Row>
          </CardContent>
        </Card>

        <Card className="data-table">
          <table>
            <thead>
              <tr>
                <th class="checkbox-cell">
                  <Checkbox />
                </th>
                <th class="label-cell text-align-center">Part Number</th>
                <th class="label-cell text-align-center">Description</th>
                <th class="label-cell text-align-center">Rev</th>
                <th class="label-cell text-align-center">Material cost</th>
                <th class="label-cell text-align-center">Labor time</th>
                <th class="label-cell text-align-center">Validated (Sage PN)</th>
                <th class="label-cell text-align-center">Modified date</th>
                <th class="label-cell text-align-center">Notes</th>
                <th class="label-cell text-align-center">In stock</th>
                <th class="label-cell text-align-center">Attachments</th>
              </tr>
            </thead>
            <tbody>
              {warehouse.map((x, i) => (
                <tr key={i}>
                  <td class="checkbox-cell">
                    <Checkbox />
                  </td>
                  <td class="label-cell text-align-center">{x.partNo}</td>
                  <td class="label-cell text-align-center">{x.description}</td>
                  <td class="label-cell text-align-center">{x.revision}</td>
                  <td class="label-cell text-align-center">${x.cost}</td>
                  <td class="label-cell text-align-center">{x.laborTime}</td>
                  <td class="label-cell text-align-center">XXXXXX</td>
                  <td class="label-cell text-align-center">
                    07-11-2022
                    <a href="#"
                      class="link tooltip-init profile-link"
                      data-tooltip="This crate last modification is older than 60 days">
                      <i class="f7-icons text-color-tpk">info_round_fill</i>
                    </a>
                  </td>
                  <td class="label-cell text-align-center">Lorem ipsum dolor sit amet</td>
                  <td class="label-cell text-align-center">Yes</td>
                  <td class="label-cell text-align-center"><a class="button button button-fill color-tpk" onclick="drawing()">3 - View</a></td>
                </tr>
              ))}

            </tbody>
          </table>
        </Card>
      </Block>
    </Page>
  </Page >
);
export default HomePage;