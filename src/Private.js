import { Routes, Route } from "react-router-dom";
import {
  Home,
  Books,
  Temur,
  Jadid,
  Sovet,
  Mustaqillik,
  Addauthor,
  Addbooks,
  Settings,
  Single,
  Bookt,
  Bookj,
  Bookso,
  Bookm,
  Singlebook,
} from "./pages";
import { Author, My, Payment, Security } from "./components";

export const Private = () => {
  return (
    <div>
      <Routes>
          <Route path="/addauthor" element={<Addauthor/>} />
          <Route path="/addbooks" element={<Addbooks/>} />
          <Route path="/settings" element={<Settings />}>
            <Route index element={<My/>}/>
            <Route path="security" element={<Security/>}/>
            <Route path="payment" element={<Payment/>} />
          </Route>
          <Route path="/*" element={<Home />}>
            <Route index element={<Temur />} />
            <Route path="jadid" element={<Jadid />} />
            <Route path="sovet" element={<Sovet />} />
            <Route path="mustaqillik" element={<Mustaqillik />} />
          </Route>
          <Route path="/kitoblar" element={<Books />}>
            <Route index element={<Bookt />} />
            <Route path="jadid" element={<Bookj />} />
            <Route path="sovet" element={<Bookso />} />
            <Route path="mustaqillik" element={<Bookm />} />
          </Route>
          <Route path="/author/authorid/:id" element={<Single />} />
          <Route path="/book/bookid/:id" element={<Singlebook />}>
            <Route index element={<Author />} />
            <Route path="iqtibos" element={<Author />} />
            <Route path="taqriz" element={<Author />} />
          </Route>
        
      </Routes>
    </div>
  );
};
