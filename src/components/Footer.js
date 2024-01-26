import { FaApple, FaFacebook, FaInstagram, FaWindows, FaYoutube} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { DiAndroid } from "react-icons/di";
import { SlEnvolope } from "react-icons/sl";
import { BsBadgeAd, BsFillBriefcaseFill, BsTelephone } from "react-icons/bs";
import { GrGift } from "react-icons/gr";

export const Footer = () => {
  return (
    <footer>
  <div class="container-fluid bg-primary">
    <div class="row">
      <div class="col-md-9 py-3 text-white">Get connected with us on social networks!</div>
      <div class="col-md-3 py-3 text-center text-white">
        <a className='mx-2' title="Apple" href="/" style={{textDecoration:"none",color:"white"}}>
          <FaApple />  
        </a>
        
        <a className='mx-2' title="Windows" href="/"style={{textDecoration:"none",color:"white"}}>
          <FaWindows />
        </a>
        <a className='mx-2' title="Android" href="/" style={{textDecoration:"none",color:"white"}}>
          <DiAndroid />
        </a>|
        <a title="Twitter" href="/" className='mx-2'  style={{textDecoration:"none",color:"white"}}>
          <FaXTwitter />
        </a>
        <a title="Facebook" href="/" className='mx-2'  style={{textDecoration:"none",color:"white"}}>
          <FaFacebook />
        </a>
        <a title="Instagram" href="/" className='mx-2'  style={{textDecoration:"none",color:"white"}}>
          <FaInstagram />
        </a>
        <a title="Youtube" href="/" className='mx-2'  style={{textDecoration:"none",color:"white"}}>
          <FaYoutube />
        </a>
      </div>
    </div>
  </div>
  <div class="container-fluid bg-dark text-white">
    <div class="row ">
      <div class="col-md-3 py-3">
        <div class="h6">Company Name</div>
        <hr />
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.</p>
      </div>
      <div class="col-md-3 py-3">
        <div class="h6">Policy</div>
        <hr />
        <ul class="list-group list-group-flush">
          <li class="list-group-item bg-dark text-white border-light"><a
              class="text-decoration-none text-white stretched-link" href="/">Return Policy</a></li>
          <li class="list-group-item bg-dark text-white border-light"><a
              class="text-decoration-none text-white stretched-link" href="/">Terms Of Use</a></li>
          <li class="list-group-item bg-dark text-white border-light">
            <a class="text-decoration-none text-white stretched-link" href="/">Security</a>
              </li>
          <li class="list-group-item bg-dark text-white border-light">
            <a class="text-decoration-none text-white stretched-link" href="/">Privacy</a>
            </li>
          <li class="list-group-item bg-dark text-white border-light">
            <a class="text-decoration-none text-white stretched-link" href="/">EPR Compliance</a>
            </li>
        </ul>
      </div>
      <div class="col-md-3 py-3">
        <div class="h6">Address</div>
        <hr />
        <address><strong>Twitter, Inc.</strong><br />1355 Market St, Suite 900<br />San Francisco, CA 94103<br /><abbr
            title="Phone">P:</abbr> (123) 456-7890</address>
        <div class="h6">Customer Care</div>
        <hr /><BsTelephone /> +1800 100 1000<br /><SlEnvolope /> info@email.com
      </div>
    </div>
  </div>
  <div class="container-fluid bg-secondary text-white text-center">
    <div class="row">
      <div class="col-md-2 py-2"><a class="text-white text-decoration-none" href="/">
      <BsFillBriefcaseFill /> Partner with us</a></div>
      <div class="col-md-2 py-2"><a class="text-white text-decoration-none" href="/"><BsBadgeAd /> Advertise</a></div>
      <div class="col-md-2 py-2"><a class="text-white text-decoration-none" href="/"><GrGift /> Gift</a>
      </div>
      <div class="col-md-3 py-2">© 2009-2024 React-E-Commerce.com (2.0)</div>
      <div class="col-md-3 py-2 bg-white">
        <img src="data:image/webp;base64,UklGRrIEAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSEsDAAABoIX9/yG7+ca2bSeHm9S23bA2r+xObdtTxNwclv/Yzu4ec9uZPdZq9L34r4rLXETEBOCE0J/atm17bds0wwMvN5OOHjBN0/RVRUzTaND1Qyt1Xdc/0HVdHxYvGBUiSJZ4PFSLHCHK+ZusRdxut7uwlTVuhx17xAF6vtxAY//nn7cbHZ9v5cg49/DLbl2fJdOANoO7gEcIebkGuZepwq7sDMwPYWh3nS8Aj9OPexOotvtde3Vng2kXj3uDPOPiYY8Qr5GkhmJyNRpV2KefaZDfd67BS3wBWd2LE8rgduTnwM20mzZ1tQI4OvIRYq6iKFUaPvMcX3yqoyKMHNIZ/BRvGm+/gMKBF9cmsp3zuzz7TOdJTLvJ7FrwzXhHynjttdeqNchfUUUIheR+KOJheJfj8Mf4JIEhTi1iFqfdxNd799xB6TWS1FBMfoOQCmvKVQ7Pg7xwLw7bWYMSWM4He1uk1XfJ3JvYjF42xzxC9E9LS8vVUGxax9Gowj6MvjMhSH6BV+Hlrk7xOkednOPM380KscVH7ikly7xcLldGcjraQu15Rm2Ow5aC5cvNv5VoKCcvx9L57Qs5sZ4gyTb0sSjXkDVMvKXBilmkGZZl3YM1lrx5u9/v9w+T/q8njESnLJec3m+CS57eyRW39xSXy+WalaL9dtzwhM2M7UQZs41xOyibxX5d1/WkirlTyAcYZf3n8teH2ayqqrq+jYdVVVVz2PSxoigN/OPGyy+/hSkY2Wfs2LEjsJqh0Sctxvz5o/CRB3JfU8H8+fNvMnsDQPEPADA2JfeSdK7BJtf0qAKSc2d4UEyuRqMCkgxgF0ne1J9yKoZkZGRsDbowKkgFmlY8+HYPPvMcX3whFSxcuPBje8zAG5Z86+Ti5IV3fcHeKZh97733Hm3NxKgQFYwdO+X2kAfT5qfhYypYvnz5Tpr7N72M9fzrt5XZKFuSgntJRs7GurlzDQWUPQiQa9CqgHFNvEuS36LhuxT0Gjly5CC42TH0vNvBwO8/t3sQMDqOI6AAwHwLcrkKABfw7eR+zZH308/GnJwcbgQCwe1GMBAURpUQQhxwhBC7WqgLsaXYCfdNZo8Vdx9+tORXgAqSDRVM3KoMk6RVMhsnfgYAVlA4IEABAACQCACdASpAAEAAPrVOoEsnJCMhqhM9yOAWiWIA049sjAOe66P/qAN49BykG/SmkbY1GfazPm+/xgKImctoNjpdebq2M/q8Spg9T471IAD+/ZmAHp2TOChHPGgAF6iJKf3KDTvhWTxZHcIOfKKrdshJsw/hpgj0ZABTHY81R8qS9kNS/3wo8cw8fPIbffNm/MROdF531tRYLBhPjTKvaBb4j9Rs6h595M7sD7XMce9BG4FA/dRoJkP9ZC9dPr9T+P6+/YeTeGAAry7k2VzKicG/4u///ZUpWIqt8V3SUo43/3fmYoz+5tGrebCePFh7KnD7gH5RQyh67PfISu19MY+VAh7Mjz2mpjRedurFMTaXpoa8s/78ENjFSuBf0WdKaJBpUSfyJTBgRG0R+649Rg2gbEU3D9emNicP/PcAAAAAAA==" width="32" alt="American Express" class="me-2" />
        <img src="data:image/webp;base64,UklGRs4EAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSMUBAAAFkERbmyFJX0a2bdvWrse27ZmtbdueWdu2bdu2zXaWI//IWPYmIiYAlUtdCmtmZSa5mLSiZ8uX8LH+PRM8VRQ9f3Tv1LkSsvT+HQPAaXra+ZqDwjUJCjh/bVl6myRmbjsGva+qvwEQdyYKek27hj7X12euBwhN84dj8QBQFo1ZpMN1ZScQ32Q5IN7erYjHY08dGP9M0z+OnHc3goxHmpY5WDQQQjVGhSUD7TXZB1mb7rdxvx8nzcuMIgDD50DeYfMBl1dh4kwK2fu4MrTdCplb7cLWtlJt7My++kv1OTT1PuROTtsuWfPIpZL1jR1mDJNCNjWngWSHf7U3hsAtz0ZJNvfMPslaHSxXjGBSyExu2psoI2iM7GM4Zo4ygsBl/eHxW5XIFPIV2N5anMbITtQB4PPVWVSFCmot5h0ADJ0nSuCiwbB7tqokT1Jg3+lFlIgKlex37E8H8HoSRlehgvpf9gtwulzOpToQWkD1Kecz+OcNZhSmoQsxbYxCsrelBr2xO/L13a3+E0DwuWR9H7ucAGXGopouPNqNNq9hP2NzhsJjejhxC8hr9MiN9Wemsp+3Fx4Ef6/eqZ6qYir+/HTHiv+oVAoAVlA4IOICAABQEACdASpAAEAAPrVSo0ynJKMiLBK5mOAWiWxpzlp7FMET2zkC+SX7GfHrE8SLcH/sL61XRVejn6iHPe+xh/dv956Yaezrx+oD6TtApZtcvyE1gpgKMB3SKCMrFTN0cj1wxgiuPGKnaAy9nX8ae+rOgXBfsco4lIcDubJU0b2i56z7MLmb61EvMHvAAP7+zLLf4+RIBuZ/+uV8fsR+ZbL/+3m6Up9St7VhQRj5BJPNWmKSW/O3uKOHsWGD9+/eov+ynBUZP+pNsCqa4loLCprEWheaGOF6z10EFpwyRT0+IXYeNaIA8J3ETcwmbPHVhIjvJkC+7+wI2dveoF0ckfG7AE7J+B++Zldv+JROzJI8B2ln3RFYeyLEFfDODOaXnkDwMJy7RsDK/9k1McftC6oIyZHRNTfjDtk13/LxMx+lsOefmqg2awjZ3ug0GG+tp5np+tcUEAY7ofUz2l8t5vmeEheOmmPsEBem02SSY2maFp3fNewSa7H1ldLHdMGYutWdOFvLa3hQNklFqIpgB3PbovQS20TQ6f7jQf6Q6SXk+C8AXfwCJ3wzV+TxefCucZot/l/Bgy6xzGsyXb2fMKlNehhuO+snT4zFU/7FigHmbXRuSUVLlSdDL6j0PjCF2fehSD9ZZqkO47X6BwQmfm9M7VLQ27x6/KX6V8IKnVxkZYhHGjZYu2ViYxW+eaukRsL+GNLZMWVP/IRk7+m+lkkOKv5eGHd98/QztcVucj5VsHdBwox+wO3DfRNDKinhGiW0cYoGTuP/nneXrDyTDUQuMcOoKyGXI/tBHfDTy9O/QcvFKsli9i3EUlgDV7LFcS0uYJeYVAVZLv1Nhw1cXt5KT0TNl/3LoRKsu//E8bweybpph9P0R58/+X6PSjJDwH+Hi5ouV25BQZ8ayP682QC8HTT7FGYQB+a4TTY1qE0bHn1WNw5I/YU/ZvpIa55+2kH/LdLAnNmxCY+Q8uX/AsW77gA=" width="32" alt="Maestro" class="me-2" />
        <img src="data:image/webp;base64,UklGRkwCAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSFUAAAAFcFrbthO9HsChKACHph3wOUcXbZJ0QgOph8zM1DD2rae/iIgJALas5vIknmTEUiYg+pdnpDihAnqDlAdk7IJRZJRk1AFJ2Dgil/RDAlHlSTztDgxRAFZQOCDQAQAAkAkAnQEqQABAAD61VKFNpySioiQLaOAWiWkAEVQ9BHF9rx/K/7N5rfQJ0RoAWxzRRd8U5ePruxEjUPqSXvEQjzlxdoXxDN1skusuh2vvkcqY2UOQQAD++5zjv8uh5IirrPYbTOLR/CKH/v90iqIMZ8sH+eQYWAXkNfafptwg8R8/t2PeK0FP+8y8uwe1m4sfl/+e7NUHkf+I/P6U8tT/SGMSYXSyuP737De+9oEI617pl4pAPxzY/SxZqiwfTqHXZQnlVxENhUtMarsh2GqDPR/s++5sx8njSBijfuP6hwQ+Rj637TSX2PDJz34IexBHU3zT36+d8JzfcdXQguxI7E9CT/71W9pB30hiDFGXWs69AgTWh0C8wVRbZI/w1Yu9Gb6rws7fVYhXracT5ZNqhFMr2/scPCKKnGJnfmlmq3zVHzpovfoCfH1tt1EF9Q7hdyCXB8oys5BqoBjXXbA14mzWkB3zz3e1rRk+/7//I3aWJjPsfBEKSr+CT7tB1g/1MzMoFQi8XJ4411APuGUh0QJeJO1lVntcvGGBmRPpSzOMcUU13GR2cOGhDvOBo10dEHR2vMmS8qA+kzxJjW4a8Db5HiR+I25V8K7++0AAAAA=" width="32" alt="Net Banking" class="me-2" />
        <img src="data:image/webp;base64,UklGRl4DAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSA0CAAANkATbtmk78+Hbtm3Ftm3btm3btm3btm3byb2nce/5UTepiogJ4L+A0xrqvK648xf166nzutKOdG0qysUOz6wPadLQdVnS5PavSUPXZXGLG+lJgyM5nGIOAFYRepimNgAM4ldhmlY/Hf7AemtxGiABmF3P56oDKU96ZI225sXIofbvIfMxboaiRgCz6/lcdSDlZq+s8Y7i3bxWpIHYhH4asITHlm4YsyYBBvf2nzp99iDxXH5gdilgCY8t3TBHFwYMjrUy1E6Dd0gzgLrDdhhwN3rT7eMegyyoPfdWKKG3VsL35n1B3WE7DHgcu+PmUafB1pTYkAbXZWlgVNAO4M7EGle/mPjErVACKwJdyAhGBe1IDk2uc++Tkc+kwUGJVQTS9T5vAVfgqMa3JbybQWak+9+9BZyAC37AakkiuuLl8Msfka7S5AKq4ouueDNh+wek20uB2CdJA1qNB4gFLndplxuxVWOCh2dJA3oOAIgGLnctXRcW9QMFaRZgKtpEYFtvM3xBA6IIlAYmoU3RVE4E5VkLeCorAN+Fzuai0NoGeAYPfYywC8gPyludzUWhXDLwgSg4KrF1hkfovp3ZxiiOZ4KDoCiWqDXA7AfP0H0ztaNRXIk2cCUVmC75ZC+Qtx+jwjG0VYBFwA9LgbzLcBWuCCCN326YAN+a8xd3B0bxF1t2hPdD/qZvTl/4VzoAVlA4ICoBAABwCACdASpAAEAAPrVQnkqnJSKhsBQKAOAWiWQA0Te9FYQwG2A57fTM95p/2ValNlRQTMj6bXL+gszUBdFbMKyEh+MJKxSNRhyDT+wAAP7614AoFCt5qp8cr/qUNS9i/uesLv+LNGF5bGDiOHSiThP6H229QZdqHRzVp9KsffkR2uer8j9g1gshyR/4AQqsFnfTI6ncp9guu+23VtiG2J8DplJub54xxTobvQfMNT9do5NOv/72Fn7T/xpZ/9aDwTf+88b5fJsV7eikTrFLOf4uJrEwMtgkL0z2fab6EPg1iFKPXUHCoF+JQIb5xk7sGH0GwUasZb14hJvFEA6X7+n1KxepiMymmReKRxQLFVdMfpVZoF8CgJjr4wQEf7BZGUqv+we8HlrLIAAA" width="32" alt="Paypal" class="me-2" />
        <img src="data:image/webp;base64,UklGRggEAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSJoCAAANkETbtmlH+75vxrZto1e2bdt2Vc+2bdu2bbs+Yr+P2wjGGy9OOhExAagfLAoItyQ8o5kvPhhLcxoXA94TS8enS/+VZDsP33b9oXxz6T3db46+hAG4uZiA7/Tv74nLrLYWs2qQtRjlkL45MHHg5QwAjrL7heUBeCZtXvAfgISmScoHW2RDilCckvIBSlBdl5gNHDmoAHNWhrkk4qgAjPpcDpTeeM9yIp0fYwaMhzaZSlAtDjYD6Qvul01EBSwjFBSaOXF3R67B0jH1UDqMjMDkZY902Af6blRZMtnpAmI2MQJTgtLq6ZMfRnAbYcoa+3F2kz+Tul1aOarxpTvQjMpYGSQe0E5OC9Z7Nji+eWSjbXnx2fq92eA4FTmeEX+zLu7EVWkrXI+B3j5caxSMeL2idTPXzy5/hM2+XO5K4H//K0eW/nCaDfP8pC4Fz2ORpemKwMUmnPxgcumuxhtnK0l/Oi0sBvCP382RH2M+/LOjd7gS7wuG4H6Il+kVm3dNdtTh519T9osIdZznrW8DKYCo9wXcxEGzrrB3YFYyRO1VuNsX36fqxZhq9WNK29Yvqbc8Mm8B2gC4fgncCpPwVuaiwo0EqU/XHPbFKLwUA3CGzWA97oJRkJOMs7NJcPYQOGYO3HAAlv0OfGdkn6iJ6497bgCwMdcu5w2S5BJo9iPx4TPdRXDNnv4HZJwsALsF0BTirg7FX28rAP65ns/CNgai8SEPUT7dCl+fKgQ5J/yDcvp0apEIoEUwlpeiXFRrCS0nhJZQRGyK2HIhlqTRYpr85tJn5SKq8LGsWPrVARMPvKG8IyFdsBklbrFeNvH3X8oz4uyKYxkl6ef4zejlQngGaJd/Qqn/lj1xtOQbzfwvQhkNH15mUp7VIwVWUDggSAEAADAJAJ0BKkAAQAA+tVCkSyclJCGsGqmY4BaJQBpntAbYDn1bIiIhvdOsHKN0Tqa8vlsMOdCJpZaqwJa2EYrkI3t4FSmmWa/vYCakRQTm3tG7YAAA/vWZ9//0+7lOAJI2KAuYz9oASXv9rd7+DfTm3cENz6ca6/2blq6ylvOjArBO6zZ+UepDWJQeOAioVEqjreiTjaA9H1GuA3lpjo2TVdx3hnCN3rZOEW5DHxAb9z856/CJ1Yltc1tZlpH5HJUc5YfACASkvBti7DMyvKG94h0/25Ifoc24LJ5qQvXQEAwLDgNe+GK20aa9pXNA+A3xqOjaY8cwFQcgW9+0Ae9GtghkcxE9YsVWFkZKexZ3nbY+14v6C6ZFsyLoHZ6UtOb8SyPjdry4en4ImYkVdU0P9k/bfsJ9e6EpgEui/8kDJdJGyCSAD3QAAAA=" width="32" alt="Rupay" class="me-2" />
        <img src="data:image/webp;base64,UklGRioEAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSLoCAAABkETbtiFJ/2dk2bZt27Zt20bbtm3btm3bthH5JhGxoiLbPYmICUD/CUtYh0ZwPMxRlgn2Wv3iO8n1NztjCbqIu9+PzZw8hdOTp+/59KqIRvvk5x6KiPPSxS/uOVAVwlwxJIS4L/SnGgupSCjd3q8XpZj5LVg4zJ/vlhCyZz8j3GV+U1vFaWwn9pOLmzqZaSRKm1uKTaWMJbpiIszANO2wWX4dMB4jvhna8cSYiUFdoHQCchG12HroJtVz4gTq8bPfkJlGD957q13ed2ehKHuebx9b0Rjd/RiImHq8eWSaBqcVQj4KyJf+7DXAdimaFPK8hraVJa1ZP9gmOQGmoT4AJCwQZUtkJfRFtGNgtsLm50/pP0AfuWOQJ7oNQCB46cWW/s0v4TTyh6HA/oXgzWv603aubx5bmD4EEMAuQ7Ziv13RpnF59cyqDI56OdHroHrYKZZNAgmbDBFbQ2EhQVMFe+QXwDDEVGQZ9EdT4JtglQ5iS2YvHBkzjnLsaRikcfl7HCO961/C5Y/vvrtIDbFm8QiYfgoP+XLLgFHst2ua7iMTRqkg9pR6T5k8iXLy5CntMkHTGkQZBY4pI/QU9RRRF2CMECZ4PIJAmIcwxgjzMSL4fIwR5vN5GBMIEXwCs6Vs7utrH5YalByRZGqR7eXk6WnplxBiEZscK+/lb52SFp+ZGOVsFhCUJM+WfXRZVXN9VlFTboJLRFm/lOTqjrbcspq4gFLtksrSmIL8flWp3Zq8gnJF2VL3N1OxtlGy9HJzldTSMTDXNTb3dlAz1DN1krNWMdRzdLC21DGw93KxxWxx/xdixvcQ4bB4vkucYgTkCIfvp9V8ijRynZwwiIyHdkSptIOcaiohxnFxnb4fLxpTIedTcG/3No7vvC64FYXoTUZdfPGK4y+vz3RGTHlqltYct9Lio/+EAVZQOCBKAQAAcAkAnQEqQABAAD61WKZOJyUjsiYaqKJAFollADUATRSjQNo/UkFMXC/tjC+KcooGLOZIfKKq+nMT0TuB4PDJLkbIGJv9HN5Y1OhJzK/evY3ia7SQAP7+hwP7ALpgIyJhk8ubzRr5jMHV2Oz2e4WSf/PJ++8H29csnuo9dcibv55euCdBrb5mjz3hSRTHiMdAU2keicD6y41esQfzX77mrv+R7D9j/LH0R360Icnirp1l48LgA6zhXoi9eibwJOQ1p8RD5pH+JmQWQavBaRG2v3yD408Imj57ZXo7fLhij3EJHQIryFqgh/vfx8fZV02lkaGKM9S9oVqSilodNdtZVylzpbHocIQysVB3i0Z53jfR7tbR2zj5yk1ORyN5ChFREnhLkEWGky6x+OiGAS3mSN65uragsB8W5uH+1tLLVWcGVdxXnN1kOBAA" width="32" alt="UPI" class="me-2" />
        <img src="data:image/webp;base64,UklGRpIDAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSPcBAAABkCzJtmlb4z7btm3bdss2WrZt27Zt27Zt+52z12iMtdd5H3AbETEBCCc9y8QjN26fX9c6yn+I3XLLe1q/9PZZ/NvzvPuoSZLvpPIz+r60zfpLkqsFQMReH4QmiSVZgCS7oq+cATCWjictNWl97ANgjLCFZQBJ/gJWyxygM11HWw7ZAi74LZsl4muZBdyVRoj1Xd6NatRqzJlAQclP36Iup+SN1CbJYDRE9SQBapFkIBI0CnSF3zSXemLCAByVHUBekvwLtBXWs1hTBUm+kWsuMCRZFEhvSJrUQDN5AVSy8Hhav3Ek2UF+Ob0haZYDs0nyEoDJcgSIeN9CczKlJfYPkkH8IcmULvNJ8hXi/pYSAM7JBADZfljIYGvpQpLn8EAGuCQVDytJ8ikAfJUaAJDivo2mGhDxjeTCHDnugr8kmfaftACQiBpNgJavLXwB1CfJn0BW+eN0SY6S5FcAqCC/4N/REwPck8UADEnGdWkh1gUyUh45YIsQZRjiCBf4mUhyRnYBN1rY3skPXAjlhtNHn1PQfzIYiUnv7aUTtwLUtVkZ6m+n1T7JJCK1GHrS+Xu0I/IcVo8knTLZnkHriYmA/U7/CiU30sP2RVq7IGCpaNkgP4HpQb/A1kjYSZIG9vNy3Cllnjx58mRGyGkG7zhz4cDk7AivHABWUDggdAEAANAJAJ0BKkAAQAA+tVCeSiclIqGuG2qo4BaJZgDTHFmDQIB6mNuX4kvrt+g3/Rb4BvKoOhlmiEDCootu+H5p7hl55sR19reG8stdLDma6AynqkvmD8+uWAD++teDR9joK3hp1jwUTY9n9i24aQHUWFYCeWCHenGGp8mOjfX7EH/KNxroFNxKOlu6I5xY5vzwsG0QjhPP/m2dgzuwLcQo8hXTk7OP4BPlbfhcB3CMI5QNMX+uscruWCeOZrZPqFRec6Q6cM4wat+1l5Ch4hn2TcTdF6yxiuHqWIxrcLk9KYMvR1VcBXk84AnRL5HYWXx13RLxgtTCGPqExpv/rZiAoz1nbT4UXML68l9hpX3zVdO0ZhyXGc/kH8DV87Gqnr9toA/m2TCphOVfIede0CfJ3ZwANrJIZJTF8OY0Adp9JI+D8Ct1gboLfiSz7c/6kLFUlAsR67jj7bQTOwfK7Opl0O4igfs/8unRKnP5taSa05dw1AAAAA==" width="32" alt="Visa" class="me-2" /></div>
    </div>
  </div>
</footer>
  )
}
