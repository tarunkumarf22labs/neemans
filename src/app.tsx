// @ts-nocheck
import { useCallback, useEffect, useState } from "uelements";
import StoryContainer from "./components/StoryContainer";
import Story from "./components/Story";
import "./app.css";
import { Ival } from "./types";
import { loadFirebase } from "./hook/firebase";
import { nanoid } from "nanoid";
import { useLocalStorage } from "./hook/useLocalStorage";

export default function App({ dataURL }: { dataURL: string }) {
  const [show, setshow] = useState(false);
  const [data, setData] = useState<null | Ival>(null);
  const [jsondata, setJsondata] = useState<[] | Ival[]>([]);
  const [uniqueidanalytics] = useLocalStorage("uniqueidanalytics", nanoid());
  const [next, setNext] = useState(0);
  const [mainataindata, setMainataindata] = useState({});

  useEffect(() => {
    async function handledata() {
      let data = await fetch(dataURL);
      let dataval = await data.json();
      // console.log(dataval, "dataval");

      setJsondata(dataval);
    }
    handledata();
    updateUser();
  }, []);

  document.documentElement.style.setProperty(
    "--f22stories-circlewidth",
    `${jsondata?.[0]?.widthofcircle}px`
  );

  document.documentElement.style.setProperty(
    "--f22stories-circlecolor",
    `${jsondata?.[0]?.borderaroundcircle}`
  );

  document.documentElement.style.setProperty(
    "--circleanimationf22stories",
    `${jsondata?.[0]?.circleanimationf22stories}px`
  );

  const fetchUsers = async () => {
    const firebase = await loadFirebase();
    const firestore = firebase.firestore();
    const collectionRef = firestore.collection("neemans");

    // Add a document for Neemans
    const neemansDocRef = collectionRef.doc(uniqueidanalytics);

    neemansDocRef
      .set({
        id: uniqueidanalytics,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        mainataindata: mainataindata,
      })
      .then(() => {
        // console.log("Neemans document added successfully!");
      })
      .catch((error) => {
        // console.error("Error adding Neemans document: ", error);
      });
  };

  // updaet firebase

  const updateUser = async () => {
    const firebase = await loadFirebase();
    const firestore = firebase.firestore();
    const documentRef = firestore.collection("neemans").doc(uniqueidanalytics);
    documentRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMainataindata(doc.data().mainataindata);

          // documentRef
          //   .update({
          //     field1: "new value",
          //     flow: 123,
          //   })
          //   .then(() => {
          //     console.log("Document updated successfully");
          //   })
          //   .catch((error) => {
          //     console.error("Error updating document: ", error);
          //   });
        } else {
          // console.error("No such document");
        }
      })
      .catch((error) => {
        // console.error("Error getting document: ", error);
      });
  };

  //  handling state
  function handleoverlay() {
    setshow((prev) => !prev);
  }

  const memoizedhandleoverlay = useCallback((items: Ival) => {
    setData(items);
    handleoverlay();
  }, []);

  const handledata = (type: string) => {
    let data = jsondata.find((data, i) => {
      if (type === "plus") {
        return i === next + 1;
      } else if (type === "minus") {
        if (next === 0) {
          return;
        }
        return i === next - 1;
      }
    });
    setData(data!);
  };

  function handler(val, sal, clickedproduct = "relive-knit-sneakers") {
    const existingItem = mainataindata[sal.name]?.content.findIndex(
      (item) => item.id === val.id
    );
    if (existingItem === -1) {
      setMainataindata({
        ...mainataindata,
        [sal.name]: {
          ...mainataindata[sal.name],
          content: [
            ...mainataindata[sal.name].content,
            { id: val.id, dotclicked: {} },
          ],
        },
      });
    }
  }

  function dotclickedtoupdate(data, val, sal) {
    try{
    setMainataindata({
      ...mainataindata,
      [sal.name]: {
        content: [
          ...mainataindata[sal.name]?.content,
          {
            id: val.id,
            dotclicked: {
              ...mainataindata[sal.name]?.content.dotclicked,
              [data]: {
                clicked: true,
                clickedoncta: "",
              },
            },
          },
        ],
      },
    });
  }catch(error){
    console.log(error)
  }
    // console.log(mainataindata[sal.name]);

    // let tata  = data.content.find((item) => item.id  ===   val.id)
  }

  function creationparentdata(data) {
    if (!mainataindata.hasOwnProperty(data)) {
      setMainataindata({
        ...mainataindata,
        [data]: {
          content: [],
        },
      });
    }
  }

  return (
    <>
      <h2
        style="
    margin-top: 0;
    text-transform: uppercase;
    font-weight: 600;
    width: 100%;
    color: #000;
    text-align: center;
    font-size: 16px;
      margin: 3rem 0 2rem;
"
      >
        🎥 Experience Beyond Words! 🌟
      </h2>
      
      <div className="f22storiesstyles" style={{display: 'flex', flexDirection: 'column'}}>
        <div className="stories_container">
          {jsondata?.map((items, i) => {
            return (
              <Story
                items={items}
                memoizedhandleoverlay={memoizedhandleoverlay}
                key={items.id}
                onClick={() => setNext(i)}
                fetchUsers={fetchUsers}
                creationparentdata={creationparentdata}
              />
            );
          })}
        </div>
        <h2
        style=" font-weight: 500; width: 100%; color: rgb(0, 0, 0); text-align: center; font-size: 14px; margin: 1rem 0px; line-height: 1.5;"
      >
        🔗 Click here to Watch, Relate, and Revel in a world where tradition meets passion. Let’s not just talk about it; let’s experience it together. 🌸
      </h2>
      </div>
        
      {show ? (
        <StoryContainer
          data={data!}
          handleoverlay={handleoverlay}
          handledata={handledata}
          setshow={setshow}
          setNext={setNext}
          next={next}
          jsondata={jsondata}
          handler={handler}
          creationparentdata={creationparentdata}
          dotclickedtoupdate={dotclickedtoupdate}
          fetchUsers={fetchUsers}
        />
      ) : (
        ""
      )}
    </>
  );
}
