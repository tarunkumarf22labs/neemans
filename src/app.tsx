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
      console.log(dataval, "dataval");

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

  function handeler(val, sal, clickedproduct = "relive-knit-sneakers") {
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
      <div className="f22storiesstyles">
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
        <div id="powered_by"><span>Powered By
          <svg width="18" height="18" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.95724" cy="7" r="7" fill="white" />
            <path d="M7.9293 2.5L12.7188 9.30263L11.8767 10.5L9.74509 8.97368L7.9293 10.0132L6.0872 8.97368L3.96877 10.5L3.15298 9.30263L7.9293 2.5Z" fill="#272727" />
            <path d="M7.92951 10.0132L6.0874 8.97368L6.10028 5.10526L7.92951 2.5L9.7453 5.07902V8.97368L7.92951 10.0132Z" fill="#555555" />
            <path opacity="0.2" d="M3.15298 9.30263L7.9293 2.5L8.84065 3.79442L6.0872 8.97368L3.96877 10.5L3.15298 9.30263Z" fill="white" />
            <path opacity="0.3" d="M7.92917 2.5L12.7186 9.30263L11.8765 10.5L9.74496 8.97368L7.0589 3.73948L7.92917 2.5Z" fill="#272727" />
          </svg>
          F22 LABS </span></div>
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
          handeler={handeler}
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
