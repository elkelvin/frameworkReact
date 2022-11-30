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
      </Block>
    </Page>
  </Page >
);
export default HomePage;